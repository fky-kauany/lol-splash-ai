"""A máscara do céu de uma imagem de mapa (o `--map` do splash.py): onde não tem céu, pra ele ser pintado.

Uma imagem do mapa (do visualizador, de um print) não tem céu: em cima fica transparente, ou uma cor lisa
(o preto do fundo, um cinza). O céu é o transparente (menos de 10% de opacidade) e, sem transparência,
a região de cor parecida com a da borda de cima encostada nela (um preenchimento a partir de cada ponto
da borda, com uma tolerância em relação à cor dele), fechada (sem buracos pequenos) e com a borda suave.

Roda no Python do ComfyUI (que tem o numpy e o OpenCV); o splash.py o chama sozinho:
    python_embeded\\python.exe -s skymask.py <mapa.png> <máscara.png> [--tolerance 18]

A saída é branca no céu e preta no resto, do tamanho da imagem.
"""

import argparse

import cv2
import numpy as np
import sys as _sys
from pathlib import Path as _Path

# O Python do ComfyUI (o embutido) não procura módulos na pasta do script: o cvio.py está ao lado.
_sys.path.insert(0, str(_Path(__file__).resolve().parent))
from cvio import imread, imwrite  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("dest")
    ap.add_argument("--tolerance", type=int, default=18, help="o quanto a cor pode variar dentro do céu vazio (0 a 255)")
    args = ap.parse_args()

    image = imread(args.src, cv2.IMREAD_UNCHANGED)
    if image is None:
        raise SystemExit(f"não abri {args.src}")
    h, w = image.shape[:2]
    sky = np.zeros((h, w), np.uint8)
    if image.ndim == 3 and image.shape[2] == 4:
        sky[image[:, :, 3] < 26] = 255
        color = image[:, :, :3].copy()
    else:
        color = image if image.ndim == 3 else cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)
        color = color.copy()
    if not sky.any():
        # O preenchimento a partir da borda de cima, de 8 em 8 pontos: cada ponto ainda fora da máscara
        # abre uma região da cor dele (a tolerância em relação à cor do ponto de partida, e não à do
        # vizinho: com a do vizinho, ele escorria pelos degradês e pegava a imagem toda).
        mask = np.zeros((h + 2, w + 2), np.uint8)
        tol = (args.tolerance,) * 3
        flags = 4 | cv2.FLOODFILL_MASK_ONLY | cv2.FLOODFILL_FIXED_RANGE | (255 << 8)
        for x in range(0, w, 8):
            if mask[1, x + 1] == 0:
                cv2.floodFill(color, mask, (x, 0), (0, 0, 0), tol, tol, flags)
        sky = mask[1:-1, 1:-1]
    # Fecha os buracos pequenos (estrelas, ruído) e suaviza a borda.
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9))
    sky = cv2.morphologyEx(sky, cv2.MORPH_CLOSE, kernel)
    sky = cv2.GaussianBlur(sky, (0, 0), 2)
    imwrite(args.dest, sky)
    print(f"céu: {(sky > 127).mean():.0%} da imagem")


if __name__ == "__main__":
    main()
