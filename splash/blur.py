"""O desfoque das splashes do League, sem IA: um círculo nítido um pouco acima do meio, e o resto
desfocando aos poucos até as bordas, como uma lente com pouca profundidade de campo.

Roda no Python do ComfyUI (que tem o numpy e o OpenCV); o splash.py o chama sozinho no fim:
    python_embeded\\python.exe -s blur.py <entrada.png> <saída.png> [--center 0.5,0.39] [--inner 0.21]
        [--outer 0.5] [--strength 0.005] [--darken 0.3]

As medidas vêm de uma splash da Caitlyn (1280x720), pela nitidez de cada pedaço (a energia do Laplaciano):
o centro do foco fica a 39% da altura (na largura, o meio; a medida deu 46%, puxada pelo rosto, que
está à esquerda); até uns 21% da altura do centro tudo é nítido, e o desfoque fica completo a 50%; o
desfoque das bordas tira a mesma nitidez que um gaussiano de 0,5% da altura (3,5 px em 720). Tudo é
proporcional à altura, então vale pra qualquer tamanho. O que desfoca também escurece (`--darken`, a
fração que as bordas perdem de brilho, na mesma curva do desfoque), pra o olho ir pro foco. Numa imagem
com transparência, o desfoque vai na cor pré-multiplicada e na transparência junto.
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
    ap.add_argument("--center", default="0.5,0.39", help="o centro do foco, em frações da largura e da altura")
    ap.add_argument("--inner", type=float, default=0.21, help="até onde tudo é nítido (fração da altura)")
    ap.add_argument("--outer", type=float, default=0.5, help="onde o desfoque fica completo (fração da altura)")
    ap.add_argument("--strength", type=float, default=0.005, help="o desfoque máximo: o sigma do gaussiano (fração da altura)")
    ap.add_argument("--darken", type=float, default=0.3, help="quanto as bordas escurecem (0 a 1; 0 não escurece)")
    args = ap.parse_args()

    image = imread(args.src, cv2.IMREAD_UNCHANGED)
    if image is None:
        raise SystemExit(f"não abri {args.src}")
    h, w = image.shape[:2]
    data = image.astype(np.float32) / 255
    alpha = data.shape[2] == 4
    if alpha:
        data[:, :, :3] *= data[:, :, 3:4]

    # Quanto cada ponto desfoca (0 a 1): a distância do centro, entre o `inner` e o `outer`, numa curva
    # suave (smoothstep), pra emenda não aparecer.
    cx, cy = (float(v) for v in args.center.split(","))
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    d = np.hypot(xx - cx * w, yy - cy * h) / h
    t = np.clip((d - args.inner) / max(args.outer - args.inner, 1e-6), 0, 1)
    t = t * t * (3 - 2 * t)

    # O desfoque variável: a imagem em alguns níveis de desfoque, e cada ponto misturando os dois níveis
    # do valor dele.
    sigma = args.strength * h
    levels = [data] + [cv2.GaussianBlur(data, (0, 0), sigma * k / 4) for k in range(1, 5)]
    pos = t * 4
    low = np.clip(np.floor(pos).astype(np.int32), 0, 3)
    frac = (pos - low)[:, :, None]
    out = np.zeros_like(data)
    for k in range(4):
        sel = (low == k)[:, :, None]
        out += np.where(sel, levels[k] * (1 - frac) + levels[k + 1] * frac, 0)

    # O escurecimento, na mesma curva do desfoque (só a cor: a transparência fica).
    out[:, :, :3] *= (1 - args.darken * t)[:, :, None]

    if alpha:
        a = out[:, :, 3:4]
        out[:, :, :3] = np.where(a > 1e-6, out[:, :, :3] / np.maximum(a, 1e-6), 0)
    imwrite(args.dest, np.clip(out * 255 + 0.5, 0, 255).astype(np.uint8))
    print(f"desfoque: sigma {sigma:.1f} px, foco em ({cx * w:.0f}, {cy * h:.0f}), bordas {args.darken:.0%} mais escuras")


if __name__ == "__main__":
    main()
