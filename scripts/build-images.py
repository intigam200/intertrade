# Подготовка изображений сайта: кадрирование и экспорт в AVIF + WebP
# в нескольких ширинах. Затемнение и растворение фото в фоне делаются в CSS.
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

from PIL import Image, ImageEnhance

SOURCES = Path(os.environ.get('ICG_SOURCES', Path.home() / 'Downloads'))
OUT = Path(__file__).resolve().parent.parent / 'public' / 'images'


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


def kazakhstan():
    src = Image.open(SOURCES / 'kazakhstan.jpeg').convert('RGB')
    # Полоса 2.4:1 с башней и закатом; фото уходит под тёмно-синий скрим
    # секции, поэтому правится только контраст.
    band = round(src.width / 2.4)
    top = round(src.height * 0.20)
    img = src.crop((0, top, src.width, min(src.height, top + band)))
    img = ImageEnhance.Contrast(img).enhance(1.04)
    export(img, 'kazakhstan', [1920, 1440, 800], avif_q=55, webp_q=78)


def cover(img, ratio):
    """Центральная обрезка под заданное соотношение сторон."""
    w, h = img.size
    if w / h > ratio:
        nw = round(h * ratio)
        return img.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    nh = round(w / ratio)
    return img.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))


def frame(video, second):
    """Кадр из исходного ролика в полном разрешении."""
    import subprocess
    import tempfile

    import imageio_ffmpeg

    path = Path(tempfile.gettempdir()) / f'icg-frame-{video.stem}.png'
    subprocess.run(
        [imageio_ffmpeg.get_ffmpeg_exe(), '-hide_banner', '-loglevel', 'error', '-y',
         '-ss', str(second), '-i', str(video), '-frames:v', '1', str(path)],
        check=True,
    )
    return Image.open(path).convert('RGB')


def slides():
    # Слайды первого экрана и фоны тёмных секций. Без растушёвки и тонировки:
    # затемнение и маска делаются в CSS, поэтому фото подходит к любому фону.
    sources = {
        'slide-refinery': Image.open(SOURCES / 'ind.png').convert('RGB'),
        'slide-welding': Image.open(SOURCES / 'возможности.jpeg').convert('RGB'),
        'slide-assembly': frame(SOURCES / 'manufacturing.mp4', 3),
    }
    for name, img in sources.items():
        img = cover(img, 16 / 9)
        width = min(1600, img.width)
        img = img.resize((width, round(width * 9 / 16)), Image.LANCZOS)
        export(img, name, [width, 800], avif_q=52, webp_q=74)


if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    slides()
    kazakhstan()
