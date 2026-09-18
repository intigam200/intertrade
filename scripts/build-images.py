# Подготовка изображений сайта: кадрирование, растушёвка краёв под тёмный фон
# секций и экспорт в AVIF + WebP в нескольких ширинах.
#
# Оригиналы в репозиторий не кладём — они тяжёлые. Путь к папке с ними
# задаётся переменной окружения ICG_SOURCES (по умолчанию ~/Downloads):
#
#     python scripts/build-images.py
#
# Результат — public/images/*.avif и *.webp. Разметка подставляет нужную
# ширину через srcset, поэтому телефон не качает версию для десктопа.
import os
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance

SOURCES = Path(os.environ.get('ICG_SOURCES', Path.home() / 'Downloads'))
OUT = Path(__file__).resolve().parent.parent / 'public' / 'images'
BG = np.array([0x0E, 0x13, 0x18], np.float32) / 255.0  # graphite-900


def tone(img, color=0.88, contrast=1.06, shadows=0.85, knee=0.30):
    """Лёгкая цветокоррекция: тени уводим к цвету фона секции."""
    img = ImageEnhance.Color(img).enhance(color)
    img = ImageEnhance.Contrast(img).enhance(contrast)
    a = np.asarray(img).astype(np.float32) / 255.0
    lum = a @ np.array([0.2126, 0.7152, 0.0722], np.float32)
    k = (np.clip((knee - lum) / knee, 0, 1)[..., None]) * shadows
    return np.clip(a * (1 - k) + BG * k, 0, 1)


def ramp(n, frac, power=1.5):
    f = max(1, int(n * frac))
    t = np.ones(n, np.float32)
    t[:f] = np.linspace(0, 1, f, dtype=np.float32) ** power
    return t


def feather(rgb, left, right, top, bottom, vignette=1.45):
    """Альфа-перо по краям: фото растворяется в фоне секции."""
    h, w = rgb.shape[:2]
    ax = ramp(w, left) * ramp(w, right)[::-1]
    ay = ramp(h, top) * ramp(h, bottom)[::-1]
    alpha = np.outer(ay, ax)
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    r = np.sqrt(((xx - w / 2) / (w / 2)) ** 2 + ((yy - h / 2) / (h / 2)) ** 2)
    alpha *= np.clip((vignette - r) / 0.70, 0, 1) ** 1.1
    return np.dstack([rgb, np.clip(alpha, 0, 1)])


def export(img, name, widths, avif_q=58, webp_q=80):
    for width in widths:
        height = round(width * img.height / img.width)
        frame = img.resize((width, height), Image.LANCZOS)
        suffix = '' if width == widths[0] else f'-{width}'
        for ext, params in (
            ('avif', dict(quality=avif_q, speed=4)),
            ('webp', dict(quality=webp_q, method=6)),
        ):
            path = OUT / f'{name}{suffix}.{ext}'
            frame.save(path, **params)
            print(f'{path.name:<28} {width:>5}px  {path.stat().st_size / 1024:>6.0f} KB')


def hero():
    src = Image.open(SOURCES / 'ind.png').convert('RGB')
    img = src.crop((100, 0, src.width, src.height))  # ≈1.40 — шире кадра 4:3
    rgb = tone(img)
    out = feather(rgb, left=0.22, right=0.07, top=0.13, bottom=0.17)
    img = Image.fromarray((out * 255).astype(np.uint8), 'RGBA')
    export(img, 'industry-hero', [1440, 760])


def capabilities():
    src = Image.open(SOURCES / 'возможности.jpeg').convert('RGB')
    img = src.resize((1600, round(1600 * src.height / src.width)), Image.LANCZOS)
    rgb = tone(img, shadows=0.88, knee=0.32, color=0.90, contrast=1.05)
    # справа перо шире — фото уходит к колонке «Возможности»
    out = feather(rgb, left=0.13, right=0.16, top=0.13, bottom=0.15)
    img = Image.fromarray((out * 255).astype(np.uint8), 'RGBA')
    export(img, 'capabilities', [1280, 700])


def kazakhstan():
    src = Image.open(SOURCES / 'kazakhstan.jpeg').convert('RGB')
    # Полоса 2.4:1 с башней и закатом; фото уходит под тёмный скрим секции,
    # поэтому правится только контраст.
    band = round(src.width / 2.4)
    top = round(src.height * 0.20)
    img = src.crop((0, top, src.width, min(src.height, top + band)))
    img = ImageEnhance.Contrast(img).enhance(1.04)
    export(img, 'kazakhstan', [1920, 1440, 800], avif_q=55, webp_q=78)


if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    hero()
    capabilities()
    kazakhstan()
