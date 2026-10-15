r"""Converte as imagens do fim do splash.py (o `-final` e o `-final-sharp`) de PNG pra WebP, ao lado, e
apaga o PNG: o WebP com qualidade 92 tem uns 10% do tamanho, sem diferença que se veja numa splash.

Roda no Python do ComfyUI (que tem o OpenCV); o splash.py o chama sozinho:
    python_embeded\python.exe -s webp.py <imagem.png>... [--quality 92]

Uma imagem com transparência (o --enhance sem cenário) continua com ela: o WebP guarda o canal alfa.
Cada uma é gravada num temporário e trocada de nome no fim; se a conversão falha, o PNG fica.
"""

import argparse
import os
import sys as _sys
from pathlib import Path as _Path

import cv2

# O Python do ComfyUI (o embutido) não procura módulos na pasta do script: o cvio.py está ao lado.
_sys.path.insert(0, str(_Path(__file__).resolve().parent))
from cvio import imread  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("images", nargs="+")
    ap.add_argument("--quality", type=int, default=92, help="a qualidade do WebP, de 1 a 100 (92)")
    args = ap.parse_args()
    failed = False
    for src in args.images:
        image = imread(src, cv2.IMREAD_UNCHANGED)
        ok, buf = (False, None) if image is None else cv2.imencode(".webp", image, [cv2.IMWRITE_WEBP_QUALITY, args.quality])
        if not ok:
            print(f"não converti {src}", file=_sys.stderr)
            failed = True
            continue
        dest = os.path.splitext(src)[0] + ".webp"
        buf.tofile(dest + ".tmp")
        os.replace(dest + ".tmp", dest)
        before = os.path.getsize(src)
        os.remove(src)
        print(f"{os.path.basename(dest)}: {before // 1024} KB -> {os.path.getsize(dest) // 1024} KB")
    raise SystemExit(1 if failed else 0)


if __name__ == "__main__":
    main()
