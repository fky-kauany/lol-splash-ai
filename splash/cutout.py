"""Tira o fundo de um print do campeão e o põe numa foto do jeito que o splash.py espera.

Roda no Python do ComfyUI (que tem o rembg e o Pillow); o splash.py o chama sozinho com o --photo:
    python_embeded\\python.exe -s cutout.py <print.png | clipboard> <saída.png> <cor do fundo, hex>

Com "clipboard", o print é a imagem copiada (o Win+Shift+S copia o recorte).

O campeão vai pro meio de uma imagem 1344x768 com o fundo de uma cor só (a máscara do fundo do
splash.py acha essa cor), ocupando 85% da altura.
"""

import sys

from PIL import Image, ImageGrab
from rembg import new_session, remove

W, H = 1344, 768


def main() -> None:
    src, dest, color = sys.argv[1], sys.argv[2], sys.argv[3]
    if src == "clipboard":
        grabbed = ImageGrab.grabclipboard()
        if not isinstance(grabbed, Image.Image):
            sys.exit("o clipboard não tem uma imagem (recorte o campeão com Win+Shift+S antes)")
        image = grabbed.convert("RGB")
    else:
        image = Image.open(src).convert("RGB")
    cut = remove(image, session=new_session("isnet-general-use"))
    # Corta o que sobrou (o campeão) e o aumenta pra 85% da altura, sem passar da largura.
    box = cut.getchannel("A").point(lambda a: 255 if a > 24 else 0).getbbox()
    if not box:
        sys.exit("não achei o campeão no print")
    cut = cut.crop(box)
    scale = min(H * 0.85 / cut.height, W * 0.9 / cut.width)
    cut = cut.resize((max(1, round(cut.width * scale)), max(1, round(cut.height * scale))), Image.LANCZOS)
    rgb = tuple(int(color[i : i + 2], 16) for i in (0, 2, 4))
    out = Image.new("RGBA", (W, H), (*rgb, 255))
    out.alpha_composite(cut, ((W - cut.width) // 2, (H - cut.height) // 2))
    out.convert("RGB").save(dest)


if __name__ == "__main__":
    main()
