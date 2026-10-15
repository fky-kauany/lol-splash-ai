"""Repinta só um pedaço de uma splash pronta (uma mão com seis dedos, um rosto torto), no ComfyUI local.

O pedaço é recortado, aumentado pra 1024 (o tamanho em que o SDXL desenha bem), repintado com o mesmo
modelo e o LoRA da splash e colado de volta com a borda esfumada. Com `--ref`, a forma vem do contorno
(canny) do mesmo pedaço de outra imagem do mesmo tamanho: numa splash feita sobre a composição de
outra, a mão certa da original guia os dedos (a original vai sozinha pro tamanho da splash, como
na primeira passada).

Uso (com o ComfyUI aberto):
    python fix_region.py out/<splash>-final.png --box 512,622,320,320 --ref ref.png \
        --prompt "open hand, five fingers, blue lightning around hand"
"""

import argparse
import random
import time
from pathlib import Path

import splash

SIZE = 1024


def graph(image: str, ref: str | None, box: tuple[int, int, int, int], prompt: str, seed: int, args) -> dict:
    x, y, w, h = box
    g = {
        "ckpt": {"class_type": "CheckpointLoaderSimple", "inputs": {"ckpt_name": splash.CHECKPOINT}},
        "lora": {
            "class_type": "LoraLoader",
            "inputs": {
                "model": ["ckpt", 0],
                "clip": ["ckpt", 1],
                "lora_name": splash.LORA,
                "strength_model": 0.9,
                "strength_clip": 0.9,
            },
        },
        "pos": {"class_type": "CLIPTextEncode", "inputs": {"clip": ["lora", 1], "text": f"{splash.POSITIVE_HEAD}, {prompt}"}},
        "neg": {
            "class_type": "CLIPTextEncode",
            "inputs": {
                "clip": ["lora", 1],
                "text": f"{splash.NEGATIVE}, {args.negative}" if args.negative else splash.NEGATIVE,
            },
        },
        "load": {"class_type": "LoadImage", "inputs": {"image": image}},
        "crop": {"class_type": "ImageCrop", "inputs": {"image": ["load", 0], "width": w, "height": h, "x": x, "y": y}},
        "big": {"class_type": "ImageScale", "inputs": {"image": ["crop", 0], "upscale_method": "lanczos", "width": SIZE, "height": round(SIZE * h / w), "crop": "disabled"}},
        "latent": {"class_type": "VAEEncode", "inputs": {"pixels": ["big", 0], "vae": ["ckpt", 2]}},
    }
    positive, negative = ["pos", 0], ["neg", 0]
    if ref:
        g.update(
            {
                "ref_load": {"class_type": "LoadImage", "inputs": {"image": ref}},
                # A referência passa pelo mesmo caminho da primeira passada do splash.py (corte no meio
                # pra proporção de 1344x768) e vai pro tamanho da splash pronta: o retângulo cai no
                # mesmo lugar das duas.
                "ref_base": {
                    "class_type": "ImageScale",
                    "inputs": {"image": ["ref_load", 0], "upscale_method": "lanczos", "width": splash.BASE_W, "height": splash.BASE_H, "crop": "center"},
                },
                "ref_full": {
                    "class_type": "ImageScale",
                    "inputs": {"image": ["ref_base", 0], "upscale_method": "lanczos", "width": splash.HIRES_W, "height": splash.HIRES_H, "crop": "disabled"},
                },
                "ref_crop": {"class_type": "ImageCrop", "inputs": {"image": ["ref_full", 0], "width": w, "height": h, "x": x, "y": y}},
                "ref_big": {
                    "class_type": "ImageScale",
                    "inputs": {"image": ["ref_crop", 0], "upscale_method": "lanczos", "width": SIZE, "height": round(SIZE * h / w), "crop": "disabled"},
                },
                "edges": {"class_type": "Canny", "inputs": {"image": ["ref_big", 0], "low_threshold": 0.2, "high_threshold": 0.5}},
                "cn": {"class_type": "ControlNetLoader", "inputs": {"control_net_name": splash.CONTROLNET}},
                "cn_type": {"class_type": "SetUnionControlNetType", "inputs": {"control_net": ["cn", 0], "type": "canny/lineart/anime_lineart/mlsd"}},
                "guided": {
                    "class_type": "ControlNetApplyAdvanced",
                    "inputs": {
                        "positive": positive,
                        "negative": negative,
                        "control_net": ["cn_type", 0],
                        "image": ["edges", 0],
                        "strength": args.control,
                        "start_percent": 0.0,
                        "end_percent": 0.8,
                        "vae": ["ckpt", 2],
                    },
                },
            }
        )
        positive, negative = ["guided", 0], ["guided", 1]
    g.update(
        {
            "paint": {
                "class_type": "KSampler",
                "inputs": {
                    "model": ["lora", 0],
                    "seed": seed,
                    "steps": 30,
                    "cfg": 6.5,
                    "sampler_name": "dpmpp_2m",
                    "scheduler": "karras",
                    "positive": positive,
                    "negative": negative,
                    "latent_image": ["latent", 0],
                    "denoise": args.denoise,
                },
            },
            "painted": {"class_type": "VAEDecode", "inputs": {"samples": ["paint", 0], "vae": ["ckpt", 2]}},
            "small": {"class_type": "ImageScale", "inputs": {"image": ["painted", 0], "upscale_method": "lanczos", "width": w, "height": h, "crop": "disabled"}},
            # A borda esfumada: o meio é o pedaço novo, e um quarto de cada lado mistura com o de antes.
            "mask": {"class_type": "SolidMask", "inputs": {"value": 1.0, "width": w, "height": h}},
            "soft": {"class_type": "FeatherMask", "inputs": {"mask": ["mask", 0], "left": w // 4, "top": h // 4, "right": w // 4, "bottom": h // 4}},
            "paste": {
                "class_type": "ImageCompositeMasked",
                "inputs": {"destination": ["load", 0], "source": ["small", 0], "x": x, "y": y, "resize_source": False, "mask": ["soft", 0]},
            },
            "save": {"class_type": "SaveImage", "inputs": {"images": ["paste", 0], "filename_prefix": "splash/fixed"}},
            "client": {"class_type": "ImageScale", "inputs": {"image": ["paste", 0], "upscale_method": "lanczos", "width": 1215, "height": 717, "crop": "center"}},
            "save_client": {"class_type": "SaveImage", "inputs": {"images": ["client", 0], "filename_prefix": "splash/fixed-client"}},
        }
    )
    return g


def main() -> None:
    ap = argparse.ArgumentParser(description="Repinta um pedaço de uma splash pronta.")
    ap.add_argument("image", help="a splash (o -final.png, 2016x1152)")
    ap.add_argument("--box", required=True, help="x,y,largura,altura do pedaço, em pixels da splash")
    ap.add_argument("--ref", help="a imagem que guiou a splash (a mesma do --image do splash.py): o contorno dela guia o pedaço")
    ap.add_argument("--prompt", required=True, help="o que o pedaço deve ser (ex.: open hand, five fingers)")
    ap.add_argument("--negative", default="", help="o que tirar, além do negativo de sempre")
    ap.add_argument("--denoise", type=float, default=0.6, help="quanto repinta o pedaço")
    ap.add_argument("--control", type=float, default=0.7, help="força do contorno da --ref")
    ap.add_argument("--count", type=int, default=1)
    ap.add_argument("--seed", type=int)
    ap.add_argument("--comfy", default="http://127.0.0.1:8188")
    args = ap.parse_args()

    box = tuple(int(v) for v in args.box.split(","))
    if len(box) != 4:
        raise SystemExit("--box é x,y,largura,altura")
    src = Path(args.image)
    if not splash.comfy_up(args.comfy):
        raise SystemExit(f"O ComfyUI não está aberto em {args.comfy}.")
    image = splash.upload(args.comfy, src)
    ref = splash.upload(args.comfy, Path(args.ref)) if args.ref else None
    stamp = time.strftime("%Y%m%d-%H%M%S")
    for i in range(args.count):
        seed = args.seed + i if args.seed is not None else random.randrange(2**32)
        print(f"Repintando ({i + 1}/{args.count}, semente {seed})...", flush=True)
        outputs = splash.run(args.comfy, graph(image, ref, box, args.prompt, seed, args))
        for node, label in (("save", "fixed"), ("save_client", "fixed-client")):
            for img in outputs.get(node, {}).get("images", []):
                dest = src.with_name(f"{src.stem.removesuffix('-final')}-{stamp}-{seed}-{label}.png")
                splash.fetch(args.comfy, img, dest)
                print(f"  {label}: {dest}", flush=True)


if __name__ == "__main__":
    main()
