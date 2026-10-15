"""Separa os brilhos de uma foto da skin (as linhas acesas da armadura, as runas, os detalhes neon) numa
camada à parte, pra o splash.py devolvê-los à pintura: a IA os apaga (a Igris Yi perdia as linhas roxas
e ganhava reflexos brancos no lugar), e pedir no prompt não traz um desenho tão fino de volta.

Roda no Python do ComfyUI (que tem o numpy e o OpenCV); o splash.py o chama sozinho:
    python_embeded\\python.exe -s glow.py <foto.png> <saída.png>

Um brilho é um ponto saturado e claro que é mais claro que o que está em volta (o "top-hat" do brilho
numa janela de 15 px): as linhas finas passam, e as áreas grandes e claras (a capa lilás) não. A saída
é a cor da foto nesses pontos (só os da cor de brilho que mais aparece), sobre preto, com um halo
borrado (o "bloom"), do tamanho da foto.
"""

import sys

import cv2
import numpy as np
import sys as _sys
from pathlib import Path as _Path

# O Python do ComfyUI (o embutido) não procura módulos na pasta do script: o cvio.py está ao lado.
_sys.path.insert(0, str(_Path(__file__).resolve().parent))
from cvio import imread, imwrite  # noqa: E402


def main() -> None:
    src, dest = sys.argv[1], sys.argv[2]
    image = imread(src, cv2.IMREAD_UNCHANGED)
    if image is None:
        sys.exit(f"não abri {src}")
    if image.shape[2] == 4:
        alpha = image[:, :, 3:4].astype(np.float32) / 255
        image = (image[:, :, :3].astype(np.float32) * alpha).astype(np.uint8)
    hsv8 = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    hsv = hsv8.astype(np.float32) / 255
    sat, val = hsv[:, :, 1], hsv[:, :, 2]
    # Mais claro que a vizinhança: o brilho menos a abertura dele (o que sobra são as coisas finas).
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
    tophat = val - cv2.morphologyEx(val, cv2.MORPH_OPEN, kernel)
    mask = (sat > 0.35) & (val > 0.35) & (tophat > 0.12)
    # Só a cor de brilho dominante (o roxo da Igris Yi): o cabelo vermelho também é fino, saturado e
    # claro, mas não brilha. A cor que mais aparece nos candidatos (o matiz, numa roda de 180 passos),
    # com uma folga de 25 passos (50 graus) de cada lado.
    # O OpenCV já guarda o matiz de 0 a 179 (meio grau por passo).
    hue = hsv8[:, :, 0].astype(np.int32)
    main = -1
    if mask.any():
        counts = np.bincount(hue[mask], minlength=180).astype(np.float32)
        counts = np.convolve(np.concatenate([counts[-12:], counts, counts[:12]]), np.ones(25), "valid")
        main = int(np.argmax(counts))
        distance = np.abs(((hue - main + 90) % 180) - 90)
        mask &= distance <= 25
    mask = mask.astype(np.float32)
    # Sem os pontos soltos (ruído da textura): só o que tem uns pixels juntos.
    count, labels, stats, _ = cv2.connectedComponentsWithStats((mask > 0).astype(np.uint8), connectivity=8)
    keep = np.zeros(count, dtype=bool)
    keep[1:] = stats[1:, cv2.CC_STAT_AREA] >= 12
    mask = keep[labels].astype(np.float32)
    mask = cv2.GaussianBlur(mask, (0, 0), 0.8)
    # A cor da foto nas linhas, um pouco mais forte, e o halo em volta.
    color = image.astype(np.float32) / 255
    lines = color * mask[:, :, None] * 1.3
    halo = cv2.GaussianBlur(lines, (0, 0), 6) * 0.9
    out = np.clip(lines + halo, 0, 1)
    imwrite(dest, (out * 255).astype(np.uint8))
    # A cor do brilho, pro prompt (o splash.py a lê da última palavra): o matiz em graus.
    print(f"{int((mask > 0.5).sum())} pixels, matiz {main * 2 if main >= 0 else -1}")


if __name__ == "__main__":
    main()
