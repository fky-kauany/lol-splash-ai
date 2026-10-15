"""Devolve à pintura os tons da foto da skin, sem IA: a cor e a luz de cada região vêm da foto, e o detalhe
fino (o traço, a textura, o brilho de splash) vem da pintura. Só dentro da personagem.

A pintura clareava as skins escuras: a pele da Ghostly Raven Soraka, quase preta na foto (brilho 17 de
255 no peito), saía cinza (55), e pedir no prompt não segurava. A conta é a da separação de frequências:
    resultado = pintura + (foto borrada - pintura borrada) x máscara x força
O borrado é a cor e a luz de cada região (um gaussiano de `--scale` da altura); o que sobra da pintura
quando se tira o borrado é o detalhe. O brilho que a foto tem (o dos seios, as linhas acesas) fica, porque
está na foto.

Roda no Python do ComfyUI (que tem o numpy e o OpenCV); o splash.py o chama sozinho no fim:
    python_embeded\\python.exe -s keepcolor.py <foto.png> <pintura.png> <saída.png> [--strength 1] [--scale 0.02]

Com `--bg-contrast`, o fundo (o que é transparente na foto) ganha contraste sem clarear: cada ponto se
afasta do brilho médio do fundo, vezes o valor, e o brilho geral fica parecido. Um cenário escuro saía
liso (o --bg4: brilho 11 a 32 de 255), e o desfoque do fim o achatava mais.

A foto precisa da transparência (o `--shot` do visualizador): ela é a máscara da personagem. A foto é
cortada no meio pra proporção da pintura e reduzida pro tamanho dela, como o splash faz.
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
    ap.add_argument("photo")
    ap.add_argument("painting")
    ap.add_argument("dest")
    ap.add_argument("--strength", type=float, default=1.0, help="quanto dos tons da foto volta (0 a 1)")
    ap.add_argument("--bg-contrast", type=float, default=1.0, help="o contraste do fundo (1 não muda; 4.5 no --bg4)")
    ap.add_argument("--scale", type=float, default=0.02, help="o tamanho do borrado, fração da altura (maior: mais da luz da pintura)")
    args = ap.parse_args()

    paint = imread(args.painting, cv2.IMREAD_UNCHANGED)
    photo = imread(args.photo, cv2.IMREAD_UNCHANGED)
    if paint is None or photo is None:
        raise SystemExit("não abri a foto ou a pintura")
    if photo.ndim != 3 or photo.shape[2] != 4:
        raise SystemExit("a foto não tem transparência (precisa ser a do --shot do visualizador)")
    h, w = paint.shape[:2]
    # A foto no enquadramento da pintura: o corte no meio pra mesma proporção e o tamanho dela.
    ph, pw = photo.shape[:2]
    if pw / ph > w / h:
        cw = round(ph * w / h)
        photo = photo[:, (pw - cw) // 2 : (pw - cw) // 2 + cw]
    else:
        ch = round(pw * h / w)
        photo = photo[(ph - ch) // 2 : (ph - ch) // 2 + ch]
    photo = cv2.resize(photo, (w, h), interpolation=cv2.INTER_LANCZOS4).astype(np.float32) / 255
    alpha = photo[:, :, 3]
    # Quase transparente (menos de 10%) é fundo, como no splash.py: um plano invisível de efeito da
    # skin não é a personagem.
    alpha = np.where(alpha < 0.1, 0, alpha)
    color = photo[:, :, :3]

    channels = paint.shape[2] if paint.ndim == 3 else 1
    out = paint.astype(np.float32) / 255
    rgb = out[:, :, :3]

    sigma = args.scale * h
    # O borrado da foto só com a personagem (a convolução normalizada: o fundo transparente não entra).
    weight = cv2.GaussianBlur(alpha, (0, 0), sigma)
    photo_low = cv2.GaussianBlur(color * alpha[:, :, None], (0, 0), sigma) / np.maximum(weight, 1e-4)[:, :, None]
    paint_low = cv2.GaussianBlur(rgb, (0, 0), sigma)
    # A máscara um pouco pra dentro e com a borda suave: na borda, a pintura passa um pouco do recorte.
    mask = cv2.erode(alpha, np.ones((3, 3), np.uint8), iterations=2)
    mask = cv2.GaussianBlur(mask, (0, 0), 2)
    rgb += (photo_low - paint_low) * (mask * args.strength)[:, :, None]
    if args.bg_contrast != 1:
        # O fundo: o que a foto tem de transparente, com a borda suave pra emenda não aparecer.
        bg = 1 - cv2.GaussianBlur(cv2.dilate(alpha, np.ones((3, 3), np.uint8), iterations=2), (0, 0), 2)
        luma = rgb @ np.array([0.114, 0.587, 0.299], np.float32)
        # Em volta do brilho médio do fundo: o escuro desce e o claro sobe, e o brilho geral fica o
        # mesmo (em volta do mais escuro, o fundo todo clareava).
        pivot = float(luma[bg > 0.9].mean()) if (bg > 0.9).any() else 0.0
        stretched = pivot + (rgb - pivot) * args.bg_contrast
        rgb[:] = rgb + (stretched - rgb) * bg[:, :, None]
    out[:, :, :3] = rgb
    if channels == 4:
        out[:, :, 3] = paint[:, :, 3].astype(np.float32) / 255
    imwrite(args.dest, np.clip(out * 255 + 0.5, 0, 255).astype(np.uint8))
    print(f"tons da foto: força {args.strength}, borrado {sigma:.0f} px, contraste do fundo {args.bg_contrast}")


if __name__ == "__main__":
    main()
