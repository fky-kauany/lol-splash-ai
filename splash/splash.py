"""Uma splash no estilo do League a partir de um mod (ou de uma imagem), de graça, no ComfyUI local.

O caminho: o visualizador 3D (`experiments/viewer`) tira uma foto limpa da skin numa pose (fundo liso,
sem painel), e o ComfyUI repinta a foto como splash: o SDXL Illustrious com o LoRA L0LSPL4SH (treinado
em splashes do League), o ControlNet de profundidade (a pose e a silhueta continuam as da foto), uma
segunda passada maior pros detalhes e o FaceDetailer no rosto. Tudo roda na placa de vídeo, sem
nenhuma API paga.

Uso (com o ComfyUI aberto, `run_nvidia_gpu.bat`, ou com --start):
    python splash.py --mod "<mod.fantome | pasta | .wad.client>" --anim spell4 --advance 0.8 \
        --prompt "caitlyn \\(league of legends\\), kneeling, aiming rifle, ..."
    python splash.py --image foto.png --prompt "..."

Veja o README.md ao lado pra escolher a pose e escrever o prompt.
"""

import argparse
import json
import os
import random
import re
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import urllib.parse
import urllib.request
import uuid
from pathlib import Path

HERE = Path(__file__).resolve().parent
LOCAL_GO = HERE.parent.parent


def _comfy_dir() -> Path:
    """O ComfyUI portátil: o do COMFY_DIR, o que está ao lado da pasta (o pacote do pack.py) ou o daqui."""
    if os.environ.get("COMFY_DIR"):
        return Path(os.environ["COMFY_DIR"])
    for near in (HERE.parent / "ComfyUI_windows_portable", HERE.parent / "ComfyUI" / "ComfyUI_windows_portable"):
        if (near / "python_embeded").exists():
            return near
    return Path(r"D:\ComfyUI\ComfyUI_windows_portable")


COMFY_DIR = _comfy_dir()
GO = r"C:\Program Files\Go\bin\go.exe"
# O visualizador: o executável pronto (o pacote do pack.py, pra quem não tem o código: `bin/` ao lado da
# pasta, ou o SPLASH_VIEWER) ou o código do local-go, pelo `go run`.
VIEWER_EXE = next(
    (p for p in [Path(os.environ.get("SPLASH_VIEWER", "")), HERE.parent / "bin" / "sklol-viewer.exe"] if p.name and p.is_file()),
    None,
)
VIEWER_CWD = VIEWER_EXE.parent if VIEWER_EXE else LOCAL_GO


def viewer_cmd(*args: str) -> list[str]:
    """A linha de comando do visualizador com `args`."""
    if VIEWER_EXE:
        return [str(VIEWER_EXE), *args]
    return [GO, "run", "-tags", "experiments", "./experiments/viewer/cmd/viewer", *args]
EDGES = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]

# O tamanho da primeira passada (um dos tamanhos nativos do SDXL, quase a proporção de uma splash) e
# o da segunda. A splash do client é 1215x717; a final sai em 2016x1152 e numa cópia 1215x717.
BASE_W, BASE_H = 1344, 768
HIRES_W, HIRES_H = 2016, 1152

# O modelo de que o LoRA gosta (a recomendação do autor dele) e os gatilhos do LoRA.
CHECKPOINT = "illustriousXL_smoothftSPO.safetensors"
LORA = "L0LSPL4SH_IllustriousXLv01.safetensors"
# Os modelos (`--model`): o v2, o padrão, é a versão 2.0 do LoRA (Civitai 822028), feita só pro
# RouWei 0.8 V-Pred (Civitai 950531), mais nova e de cores mais fundas. O V-Pred pede o ModelSamplingDiscrete
# em `v_prediction`, o CFG baixo (3 a 5, o autor do RouWei) e o Euler a; o RescaleCFG segura o contraste.
# O v1 é o de antes (Illustrious + o LoRA 1.0).
MODELS = {
    "v1": {"checkpoint": CHECKPOINT, "lora": LORA, "vpred": False, "cfg": 6.5, "sampler": "dpmpp_2m", "scheduler": "karras"},
    "v2": {
        "checkpoint": "rouwei_v080Vpred.safetensors",
        "lora": "L0LSPL4SH_ROUWEIVPRED.safetensors",
        "vpred": True,
        "cfg": 4.5,
        # Euler, e não o Euler a do autor do RouWei: o "a" põe ruído novo a cada passo, e num img2img que
        # repinta pouco (0.35, com os mapas) sobravam poucos passos pra limpar, e o ruído ficava como um
        # brilho granulado, de cristal (a armadura e o canhão de um Ezreal).
        "sampler": "euler",
        "scheduler": "normal",
    },
}
CONTROLNET = "xinsir_union_promax.safetensors"
UPSCALER = "4x-UltraSharp.pth"
FACE_MODEL = "bbox/face_yolov8m.pt"
IPADAPTER = "noobIPAMARK1_mark1.safetensors"
CLIP_VISION = "CLIP-ViT-bigG-14-laion2B-39B-b160k.safetensors"
MOD_SUFFIXES = (".fantome", ".zip", ".modpkg", ".client")
# As tags que vão em toda splash, antes do prompt da skin e do --prompt (positivas), e antes do
# --negative (negativas): ficam no prompts.json, ao lado, pra mudar sem mexer no código. O --prompt e o
# --negative só acrescentam.
PROMPTS_FILE = HERE / "prompts.json"


def load_prompts(prefix: str = "") -> tuple[str, str]:
    data = json.loads(PROMPTS_FILE.read_text(encoding="utf-8"))
    return ", ".join(data.get(f"{prefix}positive", [])), ", ".join(data.get(f"{prefix}negative", []))


POSITIVE_HEAD, NEGATIVE = load_prompts()
# Os cenários (`--bg1`, `--bg2`, `--bg3`): o fundo pintado do zero com as tags de cada um, no prompts.json.
SCENES = json.loads(PROMPTS_FILE.read_text(encoding="utf-8")).get("scenes", {})


def log(text: str) -> None:
    print(text, flush=True)


# ---------------------------------------------------------------- a foto pelo visualizador


def free_port() -> int:
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def wait_http(url: str, seconds: float) -> None:
    end = time.time() + seconds
    while time.time() < end:
        try:
            with urllib.request.urlopen(url, timeout=2):
                return
        except Exception:
            time.sleep(1)
    raise RuntimeError(f"{url} não respondeu em {seconds:.0f} s")


def render_mod(args, out: Path, mod: str | None = None, pose: dict | None = None) -> tuple[Path, str]:
    """Abre o mod no visualizador (o Go, sem navegador) e tira a foto com o Edge sem janela.

    Sem `mod` e `pose`, o mod e a pose são os da linha de comando (`--mod`, `--anim`...). Devolve a
    foto e o campeão que o visualizador achou no mod (vazio se ele não disse).
    """
    edge = next((e for e in EDGES if Path(e).exists()), None)
    if not edge:
        raise RuntimeError("Microsoft Edge não encontrado (precisa dele pra foto sem janela)")
    port = free_port()
    cmd = viewer_cmd("--no-open", "--port", str(port))
    if args.lol:
        cmd += ["--lol", args.lol]
    cmd.append(str(Path(mod or args.mod).resolve()))
    env = dict(os.environ, GOARCH="amd64")
    log("Abrindo o mod no visualizador...")
    # A saída do visualizador vai pra um arquivo, e não pra um pipe: o `go run` abre o viewer.exe como
    # filho, e um pipe ficaria aberto com ele (ler até o fim travava o script).
    fd, said_name = tempfile.mkstemp(prefix="splash-viewer-", suffix=".log")
    os.close(fd)
    said_file = Path(said_name)
    said_out = said_file.open("wb")
    viewer = subprocess.Popen(cmd, cwd=VIEWER_CWD, env=env, stdout=said_out, stderr=subprocess.STDOUT)
    try:
        # A primeira vez compila o visualizador e monta a página: pode levar um minuto.
        wait_http(f"http://127.0.0.1:{port}/", 180)
        query = {
            "capture": "1",
            "shot": "1",
            "bg": args.bg,
            "anim": args.anim,
            "advance": str(args.advance),
            "yaw": str(args.yaw),
            "pitch": str(args.pitch),
            "zoom": str(args.zoom),
        }
        if pose:
            query.update({k: str(v) for k, v in pose.items()})
        if args.skin is not None:
            query["skin"] = str(args.skin)
        url = f"http://127.0.0.1:{port}/?{urllib.parse.urlencode(query)}"
        profile = Path(tempfile.mkdtemp(prefix="splash-edge-"))
        try:
            subprocess.run(
                [
                    edge,
                    "--headless=new",
                    "--enable-unsafe-swiftshader",
                    "--use-angle=swiftshader",
                    "--hide-scrollbars",
                    f"--window-size={BASE_W},{BASE_H}",
                    "--virtual-time-budget=30000",
                    f"--user-data-dir={profile}",
                    f"--screenshot={out}",
                    url,
                ],
                check=True,
                timeout=180,
                capture_output=True,
            )
        finally:
            shutil.rmtree(profile, ignore_errors=True)
    finally:
        # A árvore inteira: matar só o `go run` deixava o viewer.exe aberto, um a cada foto.
        subprocess.run(["taskkill", "/T", "/F", "/PID", str(viewer.pid)], capture_output=True)
        viewer.wait()
        said_out.close()
    # O visualizador diz o campeão na primeira linha ("<mod>: campeão talon, skins do mod [12]...").
    said = said_file.read_bytes().decode("utf-8", errors="replace")
    said_file.unlink(missing_ok=True)
    found = re.search(r"campe\S*o (\w+)", said)
    if not out.exists():
        raise RuntimeError("o Edge não gravou a foto")
    log(f"Foto do modelo: {out}")
    return out, found.group(1) if found else ""


def render_refs(args, out: Path) -> tuple[list[Path], str]:
    """As vistas de referência da skin (o `--shot --auto` do visualizador, sem janela: a foto, os mapas e
    as seis vistas em volta, no cinza), pro `--style`. Devolve as vistas e o campeão."""
    cmd = viewer_cmd("--shot", "--auto", "-o", str(out.resolve()))
    cmd += ["--anim", "idle1", "--yaw", "0", "--pitch", "0", "--zoom", "1"]
    if args.lol:
        cmd += ["--lol", args.lol]
    if args.skin is not None:
        cmd += ["--skin", str(args.skin)]
    cmd.append(str(Path(args.mod).resolve()))
    log("Tirando as vistas da skin no visualizador...")
    done = subprocess.run(cmd, cwd=VIEWER_CWD, env=dict(os.environ, GOARCH="amd64"), capture_output=True, timeout=600)
    said = (done.stdout + done.stderr).decode("utf-8", errors="replace")
    refs = find_maps(out)["refs"]
    if done.returncode != 0 or not refs:
        raise RuntimeError(f"o visualizador não tirou as vistas: {said[-800:]}")
    found = re.search(r"campe\S*o (\w+)", said)
    log(f"Vistas da skin: {len(refs)}")
    return refs, found.group(1) if found else ""


def pick_shot(args, out: Path) -> tuple[Path, str]:
    """Abre o mod no visualizador (`--shot`, no navegador) pro jogador escolher a animação, pausar e girar;
    o "Salvar PNG" grava a foto, os mapas e as vistas em `out` e ao lado, e o splash continua sozinho.
    Devolve a foto e o campeão que o visualizador achou."""
    cmd = viewer_cmd("--shot", "-o", str(out.resolve()))
    if args.lol:
        cmd += ["--lol", args.lol]
    if args.skin is not None:
        cmd += ["--skin", str(args.skin)]
    cmd.append(str(Path(args.mod).resolve()))
    # A saída num arquivo, como no render_mod: um pipe ficaria preso ao viewer.exe.
    fd, said_name = tempfile.mkstemp(prefix="splash-pick-", suffix=".log")
    os.close(fd)
    said_file = Path(said_name)
    said_out = said_file.open("wb")
    viewer = subprocess.Popen(cmd, cwd=VIEWER_CWD, env=dict(os.environ, GOARCH="amd64"), stdout=said_out, stderr=subprocess.STDOUT)
    # A última do conjunto: o visualizador grava a foto, os mapas e as vistas, nessa ordem.
    last = out.with_name(f"{out.stem}-ref6.png")
    try:
        log("Abrindo o visualizador: escolha a animação no painel, pause no quadro, gire e clique em Salvar PNG.")
        end = time.time() + 3600
        while not last.exists():
            if viewer.poll() is not None:
                raise RuntimeError(f"o visualizador fechou: {said_file.read_bytes().decode('utf-8', 'replace')[-800:]}")
            if time.time() > end:
                raise RuntimeError("a foto não foi salva em 1 hora")
            time.sleep(1)
        # O arquivo aparece antes de terminar de ser escrito.
        size = -1
        while size != last.stat().st_size:
            size = last.stat().st_size
            time.sleep(0.5)
    finally:
        subprocess.run(["taskkill", "/T", "/F", "/PID", str(viewer.pid)], capture_output=True)
        viewer.wait()
        said_out.close()
    said = said_file.read_bytes().decode("utf-8", errors="replace")
    said_file.unlink(missing_ok=True)
    found = re.search(r"campe\S*o (\w+)", said)
    log(f"Foto do modelo: {out}")
    return out, found.group(1) if found else ""


# O nome de uma cor pelo matiz (graus), pro prompt dos brilhos.
HUE_NAMES = ((15, "red"), (45, "orange"), (70, "yellow"), (160, "green"), (200, "cyan"), (250, "blue"), (290, "purple"), (335, "pink"), (360, "red"))


def make_skymask(image: Path, dest: Path) -> Path:
    """Onde a imagem de mapa não tem céu (o skymask.py, no Python do ComfyUI): o transparente ou a cor
    lisa encostada na borda de cima."""
    py = COMFY_DIR / "python_embeded" / "python.exe"
    done = subprocess.run([str(py), "-s", str(HERE / "skymask.py"), str(image), str(dest)], capture_output=True, text=True)
    if done.returncode != 0 or not dest.exists():
        raise RuntimeError(f"não achei o céu: {(done.stderr or done.stdout).strip()[-400:]}")
    log(f"Céu: {done.stdout.strip()}")
    return dest


def make_glow(photo: Path) -> tuple[Path, str] | None:
    """Os brilhos da foto (`<foto>-glow.png`, pelo glow.py no Python do ComfyUI, que tem o OpenCV) e o
    nome da cor deles."""
    dest = photo.with_name(f"{photo.stem}-glow.png")
    py = COMFY_DIR / "python_embeded" / "python.exe"
    done = subprocess.run([str(py), "-s", str(HERE / "glow.py"), str(photo), str(dest)], capture_output=True, text=True)
    if done.returncode != 0 or not dest.exists():
        log(f"Sem os brilhos: {(done.stderr or done.stdout).strip()[-400:]}")
        return None
    log(f"Brilhos da foto: {done.stdout.strip()}")
    hue = int(done.stdout.strip().split()[-1])
    if hue < 0:
        return None
    return dest, next(name for limit, name in HUE_NAMES if hue < limit)


def cut_photo(source: str, out: Path, bg: str) -> Path:
    """Um print vira a foto limpa (o campeão no fundo liso), pelo cutout.py no Python do ComfyUI, que
    tem o rembg: o Python de quem roda este script não precisa de biblioteca nenhuma."""
    py = COMFY_DIR / "python_embeded" / "python.exe"
    log("Tirando o fundo do print...")
    done = subprocess.run(
        [str(py), "-s", str(HERE / "cutout.py"), source if source == "clipboard" else str(Path(source).resolve()), str(out), bg], capture_output=True, text=True
    )
    if done.returncode != 0 or not out.exists():
        raise RuntimeError(f"não deu pra tirar o fundo: {(done.stderr or done.stdout).strip()[-800:]}")
    log(f"Foto do campeão: {out}")
    return out


# ---------------------------------------------------------------- o ComfyUI


def comfy_up(url: str) -> bool:
    try:
        with urllib.request.urlopen(f"{url}/system_stats", timeout=3):
            return True
    except Exception:
        return False


def start_comfy(url: str) -> None:
    """Abre o ComfyUI portátil numa janela própria (ele fica aberto pras próximas)."""
    py = COMFY_DIR / "python_embeded" / "python.exe"
    port = urllib.parse.urlparse(url).port or 8188
    log("Abrindo o ComfyUI (a primeira vez demora)...")
    subprocess.Popen(
        [str(py), "-s", "ComfyUI/main.py", "--windows-standalone-build", "--port", str(port)],
        cwd=COMFY_DIR,
        creationflags=getattr(subprocess, "CREATE_NEW_CONSOLE", 0),
    )
    wait_http(f"{url}/system_stats", 300)


def upload(url: str, path: Path) -> str:
    """Manda a foto pra pasta input do ComfyUI (multipart à mão, sem biblioteca)."""
    boundary = uuid.uuid4().hex
    name = f"splash-{uuid.uuid4().hex[:8]}{path.suffix}"
    body = (
        f'--{boundary}\r\nContent-Disposition: form-data; name="image"; filename="{name}"\r\n'
        f"Content-Type: image/png\r\n\r\n"
    ).encode() + path.read_bytes() + f"\r\n--{boundary}--\r\n".encode()
    req = urllib.request.Request(
        f"{url}/upload/image", data=body, headers={"Content-Type": f"multipart/form-data; boundary={boundary}"}
    )
    with urllib.request.urlopen(req) as res:
        return json.load(res)["name"]


# ---------------------------------------------------------------- o prompt sozinho

# O WD14 (o tagger da SmilingWolf) lê uma imagem e devolve as tags do Danbooru, a língua do Illustrious.
TAGGER = "wd-eva02-large-tagger-v3"

# O que não é da skin nem da pose: o fundo da foto e o jeito como ela foi feita.
NOT_ART = re.compile(r"background|^3d$|^realistic$|^blurry|^solo|^signature$|^watermark$|^border$|^letterboxed$")
# A pose e o enquadramento: da imagem da pose, só isto passa (a roupa dela não); da skin, isto sai.
POSE = re.compile(
    r"^(upper body|lower body|cowboy shot|full body|portrait|close-up|wide shot|dutch angle|foreshortening|"
    r"perspective|fighting stance|battle|action|dynamic pose|reverse grip|dual wielding|outstretched arms?|"
    r"arms? up|arm up|raised arm|reaching|kneeling|on one knee|sitting|squatting|crouching|standing|jumping|"
    r"running|walking|midair|floating|flying|leaning forward|leaning back|pointing|motion blur|"
    r"looking at viewer|looking to the side|looking away|looking back|looking down|looking up|"
    r"closed mouth|open mouth|clenched teeth|v-shaped eyebrows|serious|angry|smirk|smile)$"
    r"|^from |^holding |^hand on |^hands on "
)
GENDER = re.compile(r"^(1boy|1girl|male focus|female focus|multiple boys|multiple girls|2boys|2girls)$")


def tag(url: str, image: str) -> list[str]:
    g = {
        "load": {"class_type": "LoadImage", "inputs": {"image": image}},
        "tag": {
            "class_type": "WD14Tagger|pysssss",
            "inputs": {
                "image": ["load", 0],
                "model": TAGGER,
                "threshold": 0.35,
                "character_threshold": 0.85,
                "replace_underscore": True,
                "trailing_comma": False,
                "exclude_tags": "",
            },
        },
    }
    text = run(url, g)["tag"]["tags"][0]
    return [t.strip() for t in text.split(",") if t.strip()]


def escape(tag_: str) -> str:
    # Parênteses no prompt do ComfyUI são peso; numa tag (talon (league of legends)) são texto.
    return tag_.replace("(", r"\(").replace(")", r"\)")


def auto_prompt(look: list[str], pose: list[str] | None, champion: str) -> str:
    """O prompt das tags: o campeão, o gênero e a aparência da skin (`look`) e a pose de outra
    imagem (`pose`; sem ela, a pose também vem da skin)."""
    out: list[str] = []
    if champion:
        out.append(f"{champion} (league of legends)")
    out += [t for t in look if GENDER.match(t)]
    out.append("solo")
    for t in look:
        if NOT_ART.search(t) or GENDER.match(t) or (pose is not None and POSE.search(t)):
            continue
        out.append(t)
    if pose is not None:
        out += [t for t in pose if POSE.search(t) and not NOT_ART.search(t)]
    seen: set[str] = set()
    return ", ".join(escape(t) for t in out if not (t in seen or seen.add(t)))


def find_maps(photo: Path) -> dict:
    """Os mapas que o visualizador grava ao lado da foto (o conjunto do `--shot`): `<foto>-depth.png`,
    `<foto>-normal.png`, `<foto>-pose.png` e as vistas `<foto>-ref1.png`... Os que existem substituem o
    que o splash adivinhava da foto."""
    stem = photo.with_suffix("")
    found: dict = {"refs": sorted(photo.parent.glob(f"{stem.name}-ref*.png"), key=lambda p: (len(p.name), p.name))}
    for key in ("depth", "normal", "pose"):
        path = Path(f"{stem}-{key}.png")
        if path.exists():
            found[key] = path
    return found


def graph(
    image: str,
    positive: str,
    seed: int,
    args,
    look: str | list[str] | None = None,
    scene: dict | None = None,
    maps: dict | None = None,
) -> dict:
    """O fluxo no formato da API do ComfyUI: as chaves são os nós, e ["id", n] é a saída n de outro."""
    M = MODELS[args.model]
    # A aparência da skin (o --look): o IP-Adapter passa a roupa e as cores da imagem pro modelo, e a
    # profundidade da --image continua mandando na pose. O NoobAI IPA foi treinado pra família do
    # Illustrious (o modelo da splash) e usa o codificador ViT-bigG.
    model = ["lora", 0]
    extra = {}
    if look:
        extra = {
            "look_load": {"class_type": "LoadImage", "inputs": {"image": look if isinstance(look, str) else look[0]}},
            "look_prep": {
                "class_type": "PrepImageForClipVision",
                "inputs": {"image": ["look_load", 0], "interpolation": "LANCZOS", "crop_position": "center", "sharpening": 0.0},
            },
            "clip_vision": {"class_type": "CLIPVisionLoader", "inputs": {"clip_name": CLIP_VISION}},
            "ipa": {"class_type": "IPAdapterModelLoader", "inputs": {"ipadapter_file": IPADAPTER}},
            "look": {
                "class_type": "IPAdapterAdvanced",
                "inputs": {
                    "model": model,
                    "ipadapter": ["ipa", 0],
                    "image": ["look_prep", 0],
                    "clip_vision": ["clip_vision", 0],
                    "weight": args.look_weight,
                    "weight_type": args.look_type,
                    "combine_embeds": "concat",
                    "start_at": 0.0,
                    "end_at": args.look_end,
                    "embeds_scaling": "V only",
                    # Com um cenário, a aparência vale só na personagem: no fundo, ela copiava o fundo
                    # liso (ou preto) da foto, e o cenário não aparecia.
                    **({"attn_mask": ["char_mask", 0]} if scene else {}),
                },
            },
        }
        model = ["look", 0]
        if isinstance(look, list):
            # As vistas de referência (todas do mesmo tamanho) num lote: o IP-Adapter junta todas.
            last = ["look_load", 0]
            for i, ref in enumerate(look[1:], 1):
                extra[f"look_load{i}"] = {"class_type": "LoadImage", "inputs": {"image": ref}}
                extra[f"look_batch{i}"] = {"class_type": "ImageBatch", "inputs": {"image1": last, "image2": [f"look_load{i}", 0]}}
                last = [f"look_batch{i}", 0]
            extra["look_prep"]["inputs"]["image"] = last
    maps = maps or {}
    # A cor de partida do fundo e quanto ele muda. Um cenário escuro começa do quase preto e é repintado a
    # 90% (`plate` e `bg_denoise` no prompts.json): repintado do zero, a partir de ruído puro, o estilo
    # de splash (sempre iluminado) ganhava do prompt, e o "pitch black" saía azul médio (brilho 92 de
    # 255); o resto da cor de partida leva a escuridão, e a IA pinta as montanhas por cima.
    plate = int((scene or {}).get("plate", args.bg), 16)
    bg_denoise = float((scene or {}).get("bg_denoise", 1.0))
    g = {
        "ckpt": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": M["checkpoint"]}},
        # O RouWei V-Pred foi treinado com zsnr (o ruído do fim apaga tudo): sem ele, o começo nunca
        # apagava a imagem de partida, e tudo puxava pra um cinza lavado (a Soraka preta saía cinza-clara,
        # e o fundo "pitch black", branco).
        "vpred": {"class_type": "ModelSamplingDiscrete", "inputs": {"model": ["ckpt", 0], "sampling": "v_prediction", "zsnr": True}},
        "rescale": {"class_type": "RescaleCFG", "inputs": {"model": ["vpred", 0], "multiplier": 0.7}},
        "lora": {
            "class_type": "LoraLoader",
            "inputs": {
                "model": ["rescale", 0] if M["vpred"] else ["ckpt", 0],
                "clip": ["ckpt", 1],
                "lora_name": M["lora"],
                "strength_model": args.lora,
                "strength_clip": args.lora,
            },
        },
        "pos": {"class_type": "CLIPTextEncode", "inputs": {"clip": ["lora", 1], "text": positive}},
        "neg": {
            "class_type": "CLIPTextEncode",
            "inputs": {
                "clip": ["lora", 1],
                "text": ", ".join(
                    t for t in (NEGATIVE, args.negative, ", ".join(scene["negative"]) if scene else "") if t
                ),
            },
        },
        "load": {"class_type": "LoadImage", "inputs": {"image": image}},
        "photo_src": {
            "class_type": "ImageScale",
            "inputs": {"image": ["load", 0], "upscale_method": "lanczos", "width": BASE_W, "height": BASE_H, "crop": "center"},
        },
        # Uma imagem com transparência (a foto do `--shot` do visualizador) vai pra cima da cor lisa `bg`,
        # e o que era transparente vira o fundo que a máscara acha. Sem transparência, a máscara do
        # LoadImage é zero, e a imagem passa inteira.
        "alpha_img": {"class_type": "MaskToImage", "inputs": {"mask": ["load", 1]}},
        "alpha_scaled": {
            "class_type": "ImageScale",
            "inputs": {"image": ["alpha_img", 0], "upscale_method": "bilinear", "width": BASE_W, "height": BASE_H, "crop": "center"},
        },
        "alpha_raw": {"class_type": "ImageToMask", "inputs": {"image": ["alpha_scaled", 0], "channel": "red"}},
        # Quase transparente (menos de 10% de opacidade) conta como fundo: um efeito da skin pode deixar
        # um plano invisível na foto (a Ghostly Raven Soraka tinha um com opacidade 1 a 3 de 255 num
        # canto), e ele virava "personagem": nem repintado como fundo, nem escurecido (o canto claro).
        "alpha_mask": {"class_type": "ThresholdMask", "inputs": {"mask": ["alpha_raw", 0], "value": 0.9}},
        "alpha": {"class_type": "InvertMask", "inputs": {"mask": ["alpha_mask", 0]}},
        "plate": {
            "class_type": "EmptyImage",
            "inputs": {"width": BASE_W, "height": BASE_H, "batch_size": 1, "color": plate},
        },
        "photo": {
            "class_type": "ImageCompositeMasked",
            "inputs": {
                "destination": ["plate", 0],
                "source": ["photo_src", 0],
                "x": 0,
                "y": 0,
                "resize_source": False,
                "mask": ["alpha", 0],
            },
        },
        # A profundidade da foto guia a pose; a cor da foto entra pelo img2img (o denoise). Com o mapa do
        # visualizador (`<foto>-depth.png`), ela é a do modelo 3D; sem ele, a adivinhada da foto.
        "depth": (
            {
                "class_type": "ImageScale",
                "inputs": {"image": ["depth_load", 0], "upscale_method": "lanczos", "width": BASE_W, "height": BASE_H, "crop": "center"},
            }
            if "depth" in maps
            else {
                "class_type": "DepthAnythingV2Preprocessor",
                "inputs": {"image": ["photo", 0], "ckpt_name": "depth_anything_v2_vitl.pth", "resolution": 1024},
            }
        ),
        "cn": {"class_type": "ControlNetLoader", "inputs": {"control_net_name": CONTROLNET}},
        "cn_type": {"class_type": "SetUnionControlNetType", "inputs": {"control_net": ["cn", 0], "type": "depth"}},
        "guided": {
            "class_type": "ControlNetApplyAdvanced",
            "inputs": {
                "positive": ["pos", 0],
                "negative": ["neg", 0],
                "control_net": ["cn_type", 0],
                "image": ["depth", 0],
                "strength": args.control,
                "start_percent": 0.0,
                "end_percent": args.control_end,
                "vae": ["ckpt", 2],
            },
        },
        # Quanto cada ponto muda (Differential Diffusion): o fundo liso da foto (a cor exata do `bg`)
        # é repintado do zero, pra virar cenário; o campeão muda só `denoise`, pra skin continuar a
        # mesma. A borda é borrada, pra emenda não aparecer.
        "bg_mask": {"class_type": "ImageColorToMask", "inputs": {"image": ["photo", 0], "color": plate}},
        "bg_shrink": {"class_type": "GrowMask", "inputs": {"mask": ["bg_mask", 0], "expand": -4, "tapered_corners": True}},
        "bg_img": {"class_type": "MaskToImage", "inputs": {"mask": ["bg_shrink", 0]}},
        "bg_blur": {"class_type": "ImageBlur", "inputs": {"image": ["bg_img", 0], "blur_radius": 24, "sigma": 8.0}},
        "bg_soft": {"class_type": "ImageToMask", "inputs": {"image": ["bg_blur", 0], "channel": "red"}},
        "keep": {"class_type": "SolidMask", "inputs": {"value": args.denoise, "width": BASE_W, "height": BASE_H}},
        # O fundo muda `bg_denoise` (1, do zero, a menos que o cenário diga): o que falta da cor de
        # partida (a `plate`) fica.
        "bg_amount": {
            "class_type": "SolidMask",
            "inputs": {"value": max(bg_denoise - args.denoise, 0.0), "width": BASE_W, "height": BASE_H},
        },
        "bg_scaled": {
            "class_type": "MaskComposite",
            "inputs": {"destination": ["bg_soft", 0], "source": ["bg_amount", 0], "x": 0, "y": 0, "operation": "multiply"},
        },
        "change": {
            "class_type": "MaskComposite",
            "inputs": {"destination": ["keep", 0], "source": ["bg_scaled", 0], "x": 0, "y": 0, "operation": "add"},
        },
        # Com um cenário, a profundidade guia só a personagem (o fundo liso da foto virava uma parede
        # lisa): o prompt com a profundidade vale na máscara dela, e o prompt sem nada no fundo.
        "char_mask": {"class_type": "InvertMask", "inputs": {"mask": ["bg_mask", 0]}},
        "pos_char": {
            "class_type": "ConditioningSetMask",
            "inputs": {"conditioning": ["guided", 0], "mask": ["char_mask", 0], "strength": 1.0, "set_cond_area": "default"},
        },
        # O fundo só com o texto do cenário (sem o da personagem): com o prompt inteiro, ele desenhava
        # outra espada e outra capa colados nela, como duas imagens juntas.
        "pos_scene": {
            "class_type": "CLIPTextEncode",
            "inputs": {"clip": ["lora", 1], "text": f"{POSITIVE_HEAD}, {', '.join(scene['positive'])}" if scene else positive},
        },
        # O fundo também leva a profundidade, mais fraca e só no começo: ali ela diz "longe, nada perto",
        # e a IA não continua pra fora da silhueta o que encosta nela (o espinho da manopla da Igris Yi
        # virava uma vara preta atrás do ombro, e as pontas do ombro, um pelo preto do lado da cabeça).
        # Mais forte ou até o fim, o fundo voltava a ser uma parede lisa.
        "guided_scene": {
            "class_type": "ControlNetApplyAdvanced",
            "inputs": {
                "positive": ["pos_scene", 0],
                "negative": ["neg", 0],
                "control_net": ["cn_type", 0],
                "image": ["depth", 0],
                "strength": args.control * 0.6,
                "start_percent": 0.0,
                "end_percent": 0.5,
                "vae": ["ckpt", 2],
            },
        },
        "pos_bg": {
            "class_type": "ConditioningSetMask",
            "inputs": {"conditioning": ["guided_scene", 0], "mask": ["bg_mask", 0], "strength": 1.0, "set_cond_area": "default"},
        },
        "pos_all": {"class_type": "ConditioningCombine", "inputs": {"conditioning_1": ["pos_char", 0], "conditioning_2": ["pos_bg", 0]}},
        "diff": {"class_type": "DifferentialDiffusion", "inputs": {"model": model, "strength": 1.0}},
        "latent": {"class_type": "VAEEncode", "inputs": {"pixels": ["photo", 0], "vae": ["ckpt", 2]}},
        # No --enhance sem cenário, o fundo da imagem é o que ela já tem: a imagem inteira muda só
        # `denoise`. Com um cenário, o fundo é pintado do zero.
        "latent_mask": {
            "class_type": "SetLatentNoiseMask",
            "inputs": {"samples": ["latent", 0], "mask": ["keep", 0] if args.enhance and not scene else ["change", 0]},
        },
        "first": {
            "class_type": "KSampler",
            "inputs": {
                "model": ["diff", 0],
                "seed": seed,
                "steps": 30,
                "cfg": M["cfg"],
                "sampler_name": M["sampler"],
                "scheduler": M["scheduler"],
                "positive": ["pos_all", 0] if scene else ["guided", 0],
                "negative": ["neg", 0] if scene else ["guided", 1],
                "latent_image": ["latent_mask", 0],
                "denoise": 1.0,
            },
        },
        "first_img": {"class_type": "VAEDecode", "inputs": {"samples": ["first", 0], "vae": ["ckpt", 2]}},
        "save_first": {"class_type": "SaveImage", "inputs": {"images": ["first_img", 0], "filename_prefix": "splash/pass1"}},
        # A segunda passada: aumenta (o UltraSharp) e repinta de leve, como o "highres fix" que o
        # autor do LoRA recomenda; é ela que traz o detalhe de splash.
        "up_model": {"class_type": "UpscaleModelLoader", "inputs": {"model_name": UPSCALER}},
        "up": {
            "class_type": "ImageUpscaleWithModel",
            "inputs": {"upscale_model": ["up_model", 0], "image": ["first_glow", 0] if "glow" in maps else ["first_img", 0]},
        },
        "up_scaled": {
            "class_type": "ImageScale",
            "inputs": {"image": ["up", 0], "upscale_method": "lanczos", "width": HIRES_W, "height": HIRES_H, "crop": "disabled"},
        },
        "up_latent": {"class_type": "VAEEncodeTiled", "inputs": {"pixels": ["up_scaled", 0], "vae": ["ckpt", 2], "tile_size": 1024, "overlap": 64, "temporal_size": 64, "temporal_overlap": 8}},
        "second": {
            "class_type": "KSampler",
            "inputs": {
                "model": model,
                "seed": seed,
                "steps": 22,
                "cfg": M["cfg"] - 0.5,
                "sampler_name": M["sampler"],
                "scheduler": M["scheduler"],
                "positive": ["pos_all", 0] if scene else ["guided", 0],
                "negative": ["neg", 0] if scene else ["guided", 1],
                "latent_image": ["up_latent", 0],
                "denoise": args.hires_denoise,
            },
        },
        "second_img": {"class_type": "VAEDecodeTiled", "inputs": {"samples": ["second", 0], "vae": ["ckpt", 2], "tile_size": 1024, "overlap": 64, "temporal_size": 64, "temporal_overlap": 8}},
    }
    g.update(extra)
    if "skymask" in maps:
        # O --map: o céu vem da máscara do skymask.py, e não da cor lisa do fundo.
        g["skymask_load"] = {"class_type": "LoadImage", "inputs": {"image": maps["skymask"]}}
        g["skymask_img"] = {
            "class_type": "ImageScale",
            "inputs": {"image": ["skymask_load", 0], "upscale_method": "bilinear", "width": BASE_W, "height": BASE_H, "crop": "center"},
        }
        g["bg_mask"] = {"class_type": "ImageToMask", "inputs": {"image": ["skymask_img", 0], "channel": "red"}}
    if "depth" in maps:
        g["depth_load"] = {"class_type": "LoadImage", "inputs": {"image": maps["depth"]}}
    if "normal" in maps:
        # As normais do modelo (`<foto>-normal.png`): um segundo ControlNet (o mesmo union, no tipo
        # normal) por cima do da profundidade, que segura o relevo (a armadura, as dobras da capa).
        g["normal_load"] = {"class_type": "LoadImage", "inputs": {"image": maps["normal"]}}
        g["normal_img"] = {
            "class_type": "ImageScale",
            "inputs": {"image": ["normal_load", 0], "upscale_method": "lanczos", "width": BASE_W, "height": BASE_H, "crop": "center"},
        }
        g["cn_normal"] = {"class_type": "SetUnionControlNetType", "inputs": {"control_net": ["cn", 0], "type": "normal"}}
        g["guided_n"] = {
            "class_type": "ControlNetApplyAdvanced",
            "inputs": {
                "positive": ["guided", 0],
                "negative": ["guided", 1],
                "control_net": ["cn_normal", 0],
                "image": ["normal_img", 0],
                "strength": args.normal,
                "start_percent": 0.0,
                "end_percent": args.control_end,
                "vae": ["ckpt", 2],
            },
        }
        # Quem usava a condição da profundidade passa a usar a das duas.
        for key, node in g.items():
            if key == "guided_n":
                continue
            for name, value in node["inputs"].items():
                if isinstance(value, list) and len(value) == 2 and value[0] == "guided":
                    node["inputs"][name] = ["guided_n", value[1]]
    if "pose" in maps:
        # O esqueleto do modelo no desenho do OpenPose (`<foto>-pose.png`): o union no tipo openpose, por
        # cima dos outros. Diz onde está cada mão e cotovelo: a mão levantada na frente do capacete da
        # Igris Yi, que a profundidade não separa da cabeça, virava "mão na cabeça".
        top = "guided_n" if "normal" in maps else "guided"
        g["pose_load"] = {"class_type": "LoadImage", "inputs": {"image": maps["pose"]}}
        g["pose_img"] = {
            "class_type": "ImageScale",
            "inputs": {"image": ["pose_load", 0], "upscale_method": "lanczos", "width": BASE_W, "height": BASE_H, "crop": "center"},
        }
        g["cn_pose"] = {"class_type": "SetUnionControlNetType", "inputs": {"control_net": ["cn", 0], "type": "openpose"}}
        g["guided_p"] = {
            "class_type": "ControlNetApplyAdvanced",
            "inputs": {
                "positive": [top, 0],
                "negative": [top, 1],
                "control_net": ["cn_pose", 0],
                "image": ["pose_img", 0],
                "strength": args.pose,
                "start_percent": 0.0,
                "end_percent": args.control_end,
                "vae": ["ckpt", 2],
            },
        }
        for key, node in g.items():
            if key == "guided_p":
                continue
            for name, value in node["inputs"].items():
                if isinstance(value, list) and len(value) == 2 and value[0] == top:
                    node["inputs"][name] = ["guided_p", value[1]]
    last = ["second_img", 0]
    if args.face:
        # O rosto: o autor do LoRA diz que sem isso ele sai embolado.
        g["face_det"] = {"class_type": "UltralyticsDetectorProvider", "inputs": {"model_name": FACE_MODEL}}
        g["face"] = {
            "class_type": "FaceDetailer",
            "inputs": {
                "image": last,
                "model": model,
                "clip": ["lora", 1],
                "vae": ["ckpt", 2],
                "positive": ["pos", 0],
                "negative": ["neg", 0],
                "bbox_detector": ["face_det", 0],
                "guide_size": 1024,
                "guide_size_for": True,
                "max_size": 1024,
                "seed": seed,
                "steps": 24,
                "cfg": M["cfg"] - 0.5,
                "sampler_name": M["sampler"],
                "scheduler": M["scheduler"],
                "denoise": 0.25 if args.enhance else 0.45,
                "feather": 5,
                "noise_mask": True,
                "force_inpaint": True,
                "bbox_threshold": 0.5,
                "bbox_dilation": 10,
                "bbox_crop_factor": 3.0,
                "sam_detection_hint": "center-1",
                "sam_dilation": 0,
                "sam_threshold": 0.93,
                "sam_bbox_expansion": 0,
                "sam_mask_hint_threshold": 0.7,
                "sam_mask_hint_use_negative": "False",
                "drop_size": 10,
                "wildcard": "",
                "cycle": 1,
            },
        }
        last = ["face", 0]
    if "glow" in maps:
        # Os brilhos da foto (as linhas acesas da armadura), que a pintura apaga: somados (o "screen":
        # o preto não muda nada) antes da segunda passada, que os pinta no estilo dela, e de novo no
        # fim, porque a segunda passada ainda os apaga.
        g["glow_load"] = {"class_type": "LoadImage", "inputs": {"image": maps["glow"]}}
        g["glow_img"] = {
            "class_type": "ImageScale",
            "inputs": {"image": ["glow_load", 0], "upscale_method": "lanczos", "width": BASE_W, "height": BASE_H, "crop": "center"},
        }
        g["first_glow"] = {
            "class_type": "ImageBlend",
            "inputs": {"image1": ["first_img", 0], "image2": ["glow_img", 0], "blend_factor": args.glow, "blend_mode": "screen"},
        }
        g["glow_big"] = {
            "class_type": "ImageScale",
            "inputs": {"image": ["glow_load", 0], "upscale_method": "lanczos", "width": HIRES_W, "height": HIRES_H, "crop": "center"},
        }
        g["final_glow"] = {
            "class_type": "ImageBlend",
            "inputs": {"image1": last, "image2": ["glow_big", 0], "blend_factor": args.glow, "blend_mode": "screen"},
        }
        last = ["final_glow", 0]
    dark = args.bg_dark if args.bg_dark is not None else (scene or {}).get("darken")
    if scene and dark is not None and dark < 1:
        # O fundo mais escuro, sem IA: a imagem multiplicada por um cinza (`dark` é o brilho que sobra,
        # 0.35 no bg1) e a personagem por cima. Só o prompt
        # sempre deixava luz (postes, janelas, um céu claro atrás da cabeça).
        level = round(255 * dark)
        g["dark_plate"] = {
            "class_type": "EmptyImage",
            "inputs": {"width": HIRES_W, "height": HIRES_H, "batch_size": 1, "color": level * 0x10101},
        }
        g["dark_all"] = {
            "class_type": "ImageBlend",
            "inputs": {"image1": last, "image2": ["dark_plate", 0], "blend_factor": 1.0, "blend_mode": "multiply"},
        }
        # A personagem pela máscara justa (a do recorte, com 2 px de borda borrada): com a da pintura
        # (borrada em 24 px), uma faixa cinza em volta dela não escurecia e virava um halo.
        g["char_img"] = {"class_type": "MaskToImage", "inputs": {"mask": ["char_mask", 0]}}
        g["char_blur"] = {"class_type": "ImageBlur", "inputs": {"image": ["char_img", 0], "blur_radius": 3, "sigma": 1.5}}
        g["char_soft"] = {"class_type": "ImageToMask", "inputs": {"image": ["char_blur", 0], "channel": "red"}}
        g["dark_bg"] = {
            "class_type": "ImageCompositeMasked",
            "inputs": {
                "destination": ["dark_all", 0],
                "source": last,
                "x": 0,
                "y": 0,
                "resize_source": False,
                "mask": ["char_soft", 0],
            },
        }
        last = ["dark_bg", 0]
    g["small"] = {
        "class_type": "ImageScale",
        "inputs": {"image": last, "upscale_method": "lanczos", "width": 1215, "height": 717, "crop": "center"},
    }
    small = ["small", 0]
    if args.enhance and not scene:
        # Sem cenário, o fundo é o da imagem enviada: a transparência dela volta no resultado (o PNG do
        # `--shot` sai transparente). Sem transparência, a máscara é zero e a imagem fica inteira.
        # O transparente cresce 2 pixels (da primeira passada): na borda, a pintura mistura a cor lisa do
        # fundo (`bg`), que ficava como um contorno cinza.
        g["alpha_grow"] = {"class_type": "GrowMask", "inputs": {"mask": ["alpha_mask", 0], "expand": 2, "tapered_corners": True}}
        g["final_alpha"] = {"class_type": "JoinImageWithAlpha", "inputs": {"image": last, "alpha": ["alpha_grow", 0]}}
        g["small_alpha"] = {"class_type": "JoinImageWithAlpha", "inputs": {"image": small, "alpha": ["alpha_grow", 0]}}
        last, small = ["final_alpha", 0], ["small_alpha", 0]
    g["save"] = {"class_type": "SaveImage", "inputs": {"images": last, "filename_prefix": "splash/final"}}
    g["save_small"] = {"class_type": "SaveImage", "inputs": {"images": small, "filename_prefix": "splash/client"}}
    return g


def run(url: str, prompt: dict) -> dict:
    req = urllib.request.Request(
        f"{url}/prompt",
        data=json.dumps({"prompt": prompt, "client_id": uuid.uuid4().hex}).encode(),
        headers={"Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req) as res:
            pid = json.load(res)["prompt_id"]
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"o ComfyUI recusou o fluxo: {e.read().decode(errors='replace')}") from None
    start = time.time()
    while True:
        with urllib.request.urlopen(f"{url}/history/{pid}") as res:
            hist = json.load(res).get(pid)
        if hist and hist.get("status", {}).get("completed"):
            return hist["outputs"]
        if hist and hist.get("status", {}).get("status_str") == "error":
            msgs = [m for m in hist["status"].get("messages", []) if m[0] == "execution_error"]
            raise RuntimeError(f"erro no ComfyUI: {json.dumps(msgs, ensure_ascii=False)[:2000]}")
        if time.time() - start > 1800:
            raise RuntimeError("o ComfyUI não terminou em 30 minutos")
        time.sleep(2)


def fetch(url: str, image: dict, dest: Path) -> None:
    q = urllib.parse.urlencode({"filename": image["filename"], "subfolder": image["subfolder"], "type": image["type"]})
    with urllib.request.urlopen(f"{url}/view?{q}") as res:
        dest.write_bytes(res.read())


def main() -> None:
    ap = argparse.ArgumentParser(description="Splash no estilo do League pelo ComfyUI local.")
    src = ap.add_mutually_exclusive_group(required=True)
    src.add_argument("--mod", help="o mod (.fantome, .zip, .modpkg, pasta ou .wad.client)")
    src.add_argument("--image", help="uma foto pronta do modelo (fundo liso, de preferência)")
    src.add_argument(
        "--photo", help="um print do campeão no jogo, recortado em volta dele: o script tira o fundo sozinho (o rembg)"
    )
    src.add_argument(
        "--clipboard", action="store_true", help="o print vem do clipboard (o recorte do Win+Shift+S), como o --photo"
    )
    ap.add_argument(
        "--style",
        help="a skin do --mod dentro desta imagem (o estilo, a composição e a pose dela), repintada --denoise (0.7)",
    )
    ap.add_argument(
        "--prompt",
        default="",
        help="o que acrescentar ao prompt feito das imagens (o cenário, os efeitos), em tags do Danbooru",
    )
    ap.add_argument("--champion", help="o campeão como o Danbooru o chama (sem isso, o do mod ou o do tagger)")
    ap.add_argument("--no-auto", dest="auto", action="store_false", help="não lê as imagens: o prompt é só o --prompt")
    ap.add_argument("--negative", default="", help="o que tirar, além do negativo de sempre (ex.: pink, animal ears)")
    ap.add_argument("--out", default=str(HERE / "out"), help="onde gravar (padrão: out/ ao lado)")
    ap.add_argument("--count", type=int, default=1, help="quantas tentativas (uma semente cada)")
    ap.add_argument("--seed", type=int, help="a semente (sem isso, sorteada)")
    # A foto.
    ap.add_argument("--skin", type=int, help="a skin do WAD que abre (sem isso, a do mod)")
    ap.add_argument("--anim", default="spell4", help="a animação da pose (veja a lista no visualizador)")
    ap.add_argument("--advance", type=float, default=0.8, help="em que segundo da animação")
    ap.add_argument("--yaw", type=float, default=20, help="graus em volta do campeão (0 é de frente)")
    ap.add_argument("--pitch", type=float, default=-10, help="graus acima (negativo: de baixo, heroico)")
    ap.add_argument("--zoom", type=float, default=1.0, help="1 enquadra o campeão e os efeitos inteiros; menor é mais perto")
    ap.add_argument("--bg", default="5a6270", help="a cor do fundo da foto (hex)")
    ap.add_argument("--lol", help="a pasta do League (sem isso, o visualizador acha sozinho)")
    # A pintura.
    ap.add_argument(
        "--denoise", type=float, default=0.62, help="quanto repinta o campeão (mais: mais splash, menos fiel; o fundo é sempre 1)"
    )
    ap.add_argument(
        "--no-pick",
        dest="pick",
        action="store_false",
        help="com --mod, tira a foto sem abrir o visualizador (a pose do --anim, --advance, --yaw...)",
    )
    ap.add_argument("--control", type=float, default=0.55, help="força da profundidade (a pose)")
    ap.add_argument(
        "--normal", type=float, default=0.5, help="força das normais do modelo (com o <foto>-normal.png do visualizador)"
    )
    ap.add_argument(
        "--pose", type=float, default=0.8, help="força do esqueleto do modelo (com o <foto>-pose.png do visualizador)"
    )
    ap.add_argument(
        "--glow",
        type=float,
        default=1.0,
        help="com os mapas, devolve os brilhos da foto (as linhas acesas da armadura) à pintura; 0 desliga",
    )
    ap.add_argument(
        "--no-maps",
        dest="maps",
        action="store_false",
        help="ignora os mapas e as vistas que o visualizador gravou ao lado da foto (<foto>-depth.png...)",
    )
    ap.add_argument("--control-end", type=float, default=0.6, help="até onde a profundidade guia (0 a 1)")
    ap.add_argument("--hires-denoise", type=float, default=0.4, help="quanto a segunda passada repinta")
    ap.add_argument("--lora", type=float, default=0.9, help="força do LoRA de splash")
    ap.add_argument("--no-face", dest="face", action="store_false", help="sem o FaceDetailer")
    # A aparência da skin.
    ap.add_argument(
        "--look", help="a skin que a pintura deve vestir: uma imagem dela ou o mod (aí, uma foto de frente pelo visualizador)"
    )
    ap.add_argument("--look-weight", type=float, default=0.8, help="força da aparência do --look")
    ap.add_argument("--look-end", type=float, default=0.85, help="até onde o --look guia (0 a 1)")
    ap.add_argument("--look-type", default="linear", help="como o --look entra (linear, style transfer, strong style transfer...)")
    ap.add_argument(
        "--enhance",
        action="store_true",
        help="melhora a imagem sem mudar quem está nela: mais detalhe e luz realista, sem o estilo de splash nem cenário novo",
    )
    ap.add_argument(
        "--map",
        action="store_true",
        help="um mapa ou uma estrutura (a --image), sem personagem: repinta no estilo de splash e pinta o céu que falta",
    )
    ap.add_argument("--sky", help="com --map, o céu que pintar (tags em inglês); sem isso, o map_sky do prompts.json")
    ap.add_argument(
        "--bg-contrast",
        type=float,
        help="o contraste do fundo do cenário, sem IA, em volta do brilho médio (1 não muda; o bg4 usa 4.5)",
    )
    ap.add_argument(
        "--bg-dark",
        type=float,
        help="o brilho que sobra no fundo do cenário (0 a 1; o bg1 usa 0.35, 1 não escurece), depois de gerar",
    )
    for key, help_ in (
        ("bg1", "o cenário escuro, de trevas (o fundo pintado do zero; a personagem só melhora)"),
        ("bg2", "o cenário neutro (tons suaves, luz de estúdio)"),
        ("bg3", "o cenário rosa, com cachoeira e flores de cerejeira"),
        ("bg4", "o submundo: montanhas pontiagudas e escuras, céu de tempestade, tons frios"),
        ("bg5", "o Spirit Blossom: cerejeiras em flor, pétalas, lanternas, rosa e lilás"),
        ("bg6", "o inferno: montanhas vulcânicas escuras, rios de lava, brasas e fumaça"),
        ("bg7", "o Summoner's Rift: selva verde, ruínas de pedra, o rio, arbustos e uma torre ao longe"),
        ("bg8", "o hextec elétrico: raios azuis, cristais hextec, engrenagens e máquinas de latão de Piltover"),
    ):
        ap.add_argument(f"--{key}", action="store_true", help=f"{help_}; dá pra pedir mais de um")
    ap.add_argument(
        "--model",
        choices=sorted(MODELS),
        default="v2",
        help="v2: RouWei V-Pred + LoRA de splash 2.0 (o padrão); v1: Illustrious + LoRA 1.0 (o de antes)",
    )
    ap.add_argument(
        "--keep-color",
        type=float,
        default=1.0,
        help="com a foto do visualizador, devolve os tons dela à personagem no fim (0 a 1; 0 desliga)",
    )
    # O desfoque do fim (blur.py): as medidas de uma splash da Caitlyn, em frações da altura.
    ap.add_argument("--no-blur", dest="blur", action="store_false", help="sem o desfoque das bordas no fim")
    ap.add_argument("--blur", dest="blur", action="store_true", help="com o desfoque das bordas (no --map e no --style, que vêm sem)")
    ap.add_argument("--blur-center", default="0.5,0.39", help="o centro do foco (frações da largura e da altura)")
    ap.add_argument("--blur-inner", type=float, default=0.21, help="até onde tudo é nítido (fração da altura)")
    ap.add_argument("--blur-outer", type=float, default=0.5, help="onde o desfoque fica completo (fração da altura)")
    ap.add_argument("--blur-strength", type=float, default=0.005, help="o desfoque máximo (sigma, fração da altura)")
    ap.add_argument("--blur-darken", type=float, default=0.3, help="quanto as bordas escurecem com o desfoque (0 a 1)")
    ap.add_argument("--comfy", default="http://127.0.0.1:8188", help="o endereço do ComfyUI")
    ap.add_argument("--start", action="store_true", help="abre o ComfyUI se ele não estiver aberto")
    args = ap.parse_args()
    global POSITIVE_HEAD, NEGATIVE
    if args.model == "v2":
        # As tags do LoRA 2.0 (o formato que o autor indica) e o negativo curto do RouWei.
        POSITIVE_HEAD, NEGATIVE = load_prompts("v2_")
    if args.style:
        # A skin dentro de outra imagem: a imagem de estilo é a base (a composição, a pose, a luz e as
        # cores) e é repintada `denoise` (0.7: o bastante pra não sair igual, e a skin tomar o lugar);
        # a pose vem da profundidade dela, um pouco mais solta, e a aparência, das vistas da skin (o
        # IP-Adapter). A imagem de estilo já tem o desfoque dela: o do fim fica desligado.
        if not args.mod:
            sys.exit("Com --style, diga a skin em --mod.")
        ap.set_defaults(denoise=0.7, control=0.6, control_end=0.6, blur=False, look_weight=0.85, look_end=0.9)
        args = ap.parse_args()
    if args.map:
        # Um mapa ou uma estrutura, sem personagem: a imagem é repintada `denoise` (0.4) no estilo de
        # splash, com a forma pela profundidade dela, e o que não tem céu (o transparente, ou a cor lisa
        # encostada na borda de cima) vira céu, pintado do zero pelo `map_sky` do prompts.json (ou o
        # --sky). Sem as partes de personagem: o rosto, os mapas do visualizador e os tons da foto.
        if not args.image:
            sys.exit("Com --map, diga a imagem do mapa em --image.")
        # 0.4: com 0.5, as marcações do chão (as faixas, os desenhos) se perdiam.
        # Sem o desfoque do fim: num mapa, a cena toda é o assunto (o --blur liga).
        ap.set_defaults(denoise=0.4, control=0.7, control_end=0.8, face=False, maps=False, keep_color=0.0, blur=False)
        args = ap.parse_args()
    if args.enhance:
        # Melhorar e não repintar: repinta pouco, a profundidade guia até o fim, sem o LoRA de splash
        # (ele puxa a cara e as cores das splashes que conhece), e a própria imagem vira o --look, pra
        # roupa, cabelo e cores continuarem os dela. Um ajuste dado na linha de comando ainda vale.
        ap.set_defaults(denoise=0.38, control=0.85, control_end=1.0, hires_denoise=0.28, lora=0.0, look_weight=0.7, look_end=1.0)
        args = ap.parse_args()
        POSITIVE_HEAD, NEGATIVE = load_prompts("enhance_")

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    stamp = time.strftime("%Y%m%d-%H%M%S")

    champion = ""
    style_refs: list[Path] = []
    # O que este comando cria só pra pintar (a foto do visualizador e os mapas dela, as vistas do --style,
    # a foto do --look, os brilhos) sai no fim: na pasta ficam só o final e o -final-sharp. Uma --image
    # dada não é apagada.
    scratch: list[Path] = []
    if args.style:
        photo = Path(args.style)
        style_refs, champion = render_refs(args, out / f"{stamp}-skin.png")
        scratch += set_files(out / f"{stamp}-skin.png")
    elif args.mod and args.pick:
        photo, champion = pick_shot(args, out / f"{stamp}-photo.png")
        scratch += set_files(photo)
    elif args.mod:
        photo, champion = render_mod(args, out / f"{stamp}-photo.png")
        scratch.append(photo)
    elif args.photo or args.clipboard:
        photo = cut_photo(args.photo or "clipboard", out / f"{stamp}-photo.png", args.bg)
        scratch.append(photo)
    else:
        photo = Path(args.image)

    if not comfy_up(args.comfy):
        if not args.start:
            sys.exit(f"O ComfyUI não está aberto em {args.comfy} (abra o run_nvidia_gpu.bat ou use --start).")
        start_comfy(args.comfy)

    look = None
    if args.look:
        source = Path(args.look)
        if source.is_dir() or source.suffix.lower() in MOD_SUFFIXES:
            # A foto de frente, parada e de corpo inteiro: é a que mostra a roupa.
            pose = {"anim": "idle1", "advance": 0.5, "yaw": 0, "pitch": 0, "zoom": 1}
            source, champion = render_mod(args, out / f"{stamp}-look.png", mod=args.look, pose=pose)
            scratch.append(source)
        look = upload(args.comfy, source)

    name = upload(args.comfy, photo)
    if style_refs and look is None:
        look = [upload(args.comfy, ref) for ref in style_refs]
    # Os mapas do visualizador ao lado da foto: a profundidade e as normais do modelo e as vistas de
    # referência, que viram o --look (a skin de todos os lados, e não só do ângulo da foto).
    maps: dict = {}
    if args.maps:
        found = find_maps(Path(photo))
        if "depth" in found:
            # Os mapas são exatos, então mandam mais (a pose, o contorno, o relevo) e a cor da foto muda
            # menos: com os padrões (0.55 até 60%, denoise 0.62), a espada da Igris Yi saía em duas e o
            # torso de outra cor. Um valor dado na linha de comando continua valendo.
            given = set(sys.argv[1:])
            for flag, attr, value in (
                ("--control", "control", 0.9),
                ("--control-end", "control_end", 0.85),
                # As normais ficam desligadas: as cores pastel do mapa clareavam a roupa (a Soraka preta saía
                # cinza-esverdeada, o torso da Igris Yi de outra cor); a profundidade e o esqueleto já
                # seguram a forma. `--normal 0.5` as liga.
                ("--normal", "normal", 0.0),
                ("--denoise", "denoise", 0.35),
                # A segunda passada também repinta pouco: com 0.4, ela apagava os brilhos da armadura.
                ("--hires-denoise", "hires_denoise", 0.28),
            ):
                if not any(a == flag or a.startswith(flag + "=") for a in given):
                    setattr(args, attr, value)
        if args.normal <= 0:
            found.pop("normal", None)
        # A foto do visualizador (com a transparência) é a máscara e os tons do keepcolor.py no fim.
        if "depth" in found:
            args.photo_path = Path(photo)
        for key in ("depth", "normal", "pose"):
            if key in found:
                maps[key] = upload(args.comfy, found[key])
        used = [k for k in ("depth", "normal", "pose") if k in found] + ([f"{len(found['refs'])} vistas"] if found["refs"] else [])
        log(f"Mapas do visualizador: {', '.join(used) or 'nenhum'}")
        if args.glow > 0 and "depth" in found:
            glow = make_glow(Path(photo))
            if glow:
                scratch.append(glow[0])
                maps["glow"] = upload(args.comfy, glow[0])
                # O prompt também pede os brilhos, na cor deles: sem isso, a IA os pintava de branco.
                args.prompt = ", ".join(
                    t for t in (args.prompt, f"(glowing {glow[1]} lines on armor:1.2), {glow[1]} glow") if t
                )
        if look is None and found["refs"]:
            look = [upload(args.comfy, ref) for ref in found["refs"]]
    if args.enhance and look is None:
        look = name
    if args.champion:
        champion = args.champion
    prompt = args.prompt
    if args.auto:
        # O prompt sai das imagens: a aparência da skin (o --look, ou a própria foto) e, com o
        # --look, a pose da --image. O --prompt é acrescentado no fim.
        log("Lendo as imagens (tagger)...")
        made = auto_prompt(tag(args.comfy, look if isinstance(look, str) else look[0]), tag(args.comfy, name), champion) if look else auto_prompt(
            tag(args.comfy, name), None, champion
        )
        # A cor do cabelo que o tagger achou ganha peso: o LoRA puxa o laranja das splashes que conhece
        # (o vermelho da Igris Yi saía laranja). Num vermelho, o laranja vai pro negativo.
        made = re.sub(r"(?<![\w(])((?:red|black|white|blue|purple|pink|green|silver|grey|blonde|brown|orange) hair)(?=,|$)", r"(\1:1.3)", made)
        if "(red hair:1.3)" in made:
            args.negative = ", ".join(t for t in (args.negative, "orange hair, ginger hair") if t)
        prompt = f"{made}, {prompt}" if prompt else made
    elif not prompt:
        sys.exit("Sem o tagger (--no-auto), o --prompt é obrigatório.")
    log(f"Prompt: {prompt}")
    # Cada cenário pedido é uma rodada de `--count` imagens; sem nenhum, o fundo de sempre.
    scenes = [(key, SCENES[key]) for key in ("bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7", "bg8") if getattr(args, key)] or [("", None)]
    if args.map:
        # O céu é o "cenário" do mapa: a máscara dele faz o papel do fundo.
        mask = make_skymask(Path(photo), out / f"{stamp}-sky.png")
        scratch.append(mask)
        maps["skymask"] = upload(args.comfy, mask)
        data = json.loads(PROMPTS_FILE.read_text(encoding="utf-8"))
        sky = [args.sky] if args.sky else data.get("map_sky", [])
        scenes = [("map", {"name": "map", "positive": sky, "negative": data.get("map_sky_negative", [])})]
        prompt = re.sub(r"(^|, )solo(?=,|$)", "", prompt).strip(", ")
    for key, scene in scenes:
        positive = f"{POSITIVE_HEAD}, {prompt}"
        # O texto do cenário também vai pro da imagem toda (a luz da personagem combina com o fundo), menos
        # no --map: lá ele pintava as nuvens do céu no chão (as ruas viravam água refletindo o céu).
        if scene and not args.map:
            positive += ", " + ", ".join(scene["positive"])
            log(f"Cenário {key} ({scene['name']})")
        for i in range(args.count):
            seed = args.seed + i if args.seed is not None else random.randrange(2**32)
            log(f"Pintando ({i + 1}/{args.count}, semente {seed})...")
            t = time.time()
            outputs = run(args.comfy, graph(name, positive, seed, args, look, scene, maps))
            save_outputs(args, outputs, out, f"{stamp}-{scene['name']}-{seed}" if scene else f"{stamp}-{seed}", scene)
            log(f"  em {time.time() - t:.0f} s")
    for path in scratch:
        path.unlink(missing_ok=True)


def set_files(photo: Path) -> list[Path]:
    """A foto do visualizador e tudo o que ele grava ao lado dela (os mapas e as vistas)."""
    return [photo, *photo.parent.glob(f"{photo.stem}-*.png")]


def scene_contrast(scene: dict | None, args=None) -> float:
    """O contraste do fundo do cenário (`--bg-contrast`, ou `"contrast"` no `scenes`; 1 não muda), pelo
    keepcolor.py."""
    if scene and args is not None and args.bg_contrast is not None:
        return args.bg_contrast
    return float((scene or {}).get("contrast", 1.0))


def save_outputs(args, outputs: dict, out: Path, prefix: str, scene: dict | None = None) -> None:
    # Só o final fica (e, com o desfoque, o `-final-sharp` ao lado), em WebP: a primeira passada e a cópia no
    # tamanho do client (1215x717) o fluxo ainda faz, mas não são baixadas.
    for img in outputs.get("save", {}).get("images", []):
        dest = out / f"{prefix}-final.png"
        fetch(args.comfy, img, dest)
        contrast = scene_contrast(scene, args)
        if getattr(args, "photo_path", None) and (args.keep_color > 0 or contrast != 1):
            keep_color(args, dest, contrast)
        if args.blur:
            blur(args, dest)
        # O PNG serve aos passos de cima; o que fica na pasta é o WebP.
        dest = to_webp([dest, dest.with_name(f"{dest.stem}-sharp{dest.suffix}")])
        log(f"  final: {dest}")


def to_webp(images: list[Path]) -> Path:
    """Os PNGs viram WebP (o webp.py, no Python do ComfyUI), e o primeiro é devolvido com o nome novo; se
    a conversão falhar, os PNGs ficam."""
    images = [p for p in images if p.exists()]
    py = COMFY_DIR / "python_embeded" / "python.exe"
    done = subprocess.run([str(py), "-s", str(HERE / "webp.py"), *map(str, images)], capture_output=True, text=True)
    if done.returncode != 0:
        log(f"  sem o WebP: {(done.stderr or done.stdout).strip()[-400:]}")
    first = images[0]
    return first.with_suffix(".webp") if first.with_suffix(".webp").exists() and not first.exists() else first


def keep_color(args, image: Path, bg_contrast: float = 1.0) -> None:
    """Os tons da foto de volta na personagem (o keepcolor.py, sem IA): a pintura clareava as skins
    escuras, e o prompt não segurava."""
    py = COMFY_DIR / "python_embeded" / "python.exe"
    cmd = [str(py), "-s", str(HERE / "keepcolor.py"), str(args.photo_path), str(image), str(image)]
    cmd += ["--strength", str(args.keep_color), "--bg-contrast", str(bg_contrast)]
    done = subprocess.run(cmd, capture_output=True, text=True)
    if done.returncode != 0:
        log(f"  sem os tons da foto: {(done.stderr or done.stdout).strip()[-400:]}")


def blur(args, image: Path) -> None:
    """O desfoque das splashes (o blur.py, sem IA) por cima da imagem; a sem desfoque fica ao lado, como
    `-sharp`."""
    sharp = image.with_name(f"{image.stem}-sharp{image.suffix}")
    image.replace(sharp)
    py = COMFY_DIR / "python_embeded" / "python.exe"
    cmd = [str(py), "-s", str(HERE / "blur.py"), str(sharp), str(image)]
    cmd += ["--center", args.blur_center, "--inner", str(args.blur_inner), "--outer", str(args.blur_outer)]
    cmd += ["--strength", str(args.blur_strength), "--darken", str(args.blur_darken)]
    done = subprocess.run(cmd, capture_output=True, text=True)
    if done.returncode != 0:
        sharp.replace(image)
        log(f"  sem o desfoque: {(done.stderr or done.stdout).strip()[-400:]}")


if __name__ == "__main__":
    main()
