"""Ler e gravar imagens com o OpenCV em qualquer caminho: no Windows, o `cv2.imread` e o `cv2.imwrite` não
abrem um caminho com acento ("Sem título.png" dava "can't open/read file"). Os bytes vão pelo numpy, e
o OpenCV só decodifica e codifica.
"""

from pathlib import Path

import cv2
import numpy as np


def imread(path: str, flags: int = cv2.IMREAD_UNCHANGED):
    """A imagem, ou None se não abriu (como o cv2.imread)."""
    try:
        data = np.fromfile(path, dtype=np.uint8)
    except OSError:
        return None
    return cv2.imdecode(data, flags) if data.size else None


def imwrite(path: str, image) -> bool:
    """Grava pela extensão do caminho (como o cv2.imwrite)."""
    ok, buf = cv2.imencode(Path(path).suffix or ".png", image)
    if ok:
        buf.tofile(path)
    return bool(ok)
