# Подготовка фоновых роликов первого экрана: вырезаем по 10 секунд и
# ужимаем до веб-веса. Формат один — MP4/H.264: на этих съёмках VP9 при
# сопоставимом качестве давал файл вдвое тяжелее, а H.264 понимают все
# браузеры, включая Safari.
#
# Оригиналы в репозиторий не кладём. Путь к папке с ними задаётся
# переменной ICG_SOURCES (по умолчанию ~/Downloads):
#
#     python scripts/build-videos.py
#
# Результат — public/video/*.mp4 и постер-кадр в public/images.
# Звуковой дорожки в роликах нет, но -an оставлен намеренно: фон должен
# быть немым в любом случае.
import os
import subprocess
from pathlib import Path

import imageio_ffmpeg
from PIL import Image

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
SOURCES = Path(os.environ.get('ICG_SOURCES', Path.home() / 'Downloads'))
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'video'
IMAGES = ROOT / 'public' / 'images'

WIDTH = 1600
CRF = '28'            # по умолчанию; для насыщенных деталями съёмок задаётся у клипа
DURATION = 10
GOP = '50'            # ключевой кадр раз в ~2 секунды

# Файл, момент начала и кадр для постера. Отрезки выбраны по ровному
# движению камеры, без склеек и затемнений.
# Порядок тот же, что на сайте: постер снимается с первого ролика.
CLIPS = [
    {'name': 'energy', 'src': 'energy.mov', 'start': 7, 'poster': 2, 'crf': '30'},
    # аэросъёмка с дымкой и мелкой фактурой — самый тяжёлый материал
    {'name': 'industrial', 'src': 'industrial.mp4', 'start': 40, 'poster': None, 'crf': '31'},
    {'name': 'sea', 'src': 'sea.mp4', 'start': 20, 'poster': None},
]


def run(args):
    subprocess.run([FFMPEG, '-hide_banner', '-loglevel', 'error', '-y', *args], check=True)


def size(path):
    return f'{path.stat().st_size / 1024 / 1024:.2f} MB'


def encode(clip):
    src = SOURCES / clip['src']
    # Частоту кадров не трогаем: пересчёт 29.97 → 25 давал рваное движение.
    # Шумодав слабый — только чтобы снять зерно съёмки, не смазывая детали.
    vf = f'scale={WIDTH}:-2:flags=lanczos,hqdn3d=1.5:1.5:6:6'
    common = ['-ss', str(clip['start']), '-t', str(DURATION), '-i', str(src), '-an', '-vf', vf]

    mp4 = OUT / f"{clip['name']}.mp4"
    run([*common, '-c:v', 'libx264', '-preset', 'veryslow', '-crf', clip.get('crf', CRF),
         '-profile:v', 'high', '-level', '4.1', '-pix_fmt', 'yuv420p',
         '-g', GOP, '-movflags', '+faststart', str(mp4)])

    print(f"{clip['name']:<12} mp4 {size(mp4):>9}")


def poster(clip):
    """Постер — первый кадр ролика: его видят мобильные и те, у кого
    включено «уменьшение движения», поэтому он же служит статичным фоном."""
    src = SOURCES / clip['src']
    raw = IMAGES / 'hero-poster-src.png'
    run(['-ss', str(clip['start'] + (clip['poster'] or 0)), '-i', str(src),
         '-frames:v', '1', '-vf', f'scale={WIDTH}:-2:flags=lanczos', str(raw)])

    img = Image.open(raw).convert('RGB')
    for width in (WIDTH, 800):
        suffix = '' if width == WIDTH else f'-{width}'
        frame = img.resize((width, round(width * img.height / img.width)), Image.LANCZOS)
        for ext, params in (('avif', dict(quality=55, speed=4)), ('webp', dict(quality=78, method=6))):
            path = IMAGES / f'hero-poster{suffix}.{ext}'
            frame.save(path, **params)
            print(f'{path.name:<24} {width:>5}px  {path.stat().st_size / 1024:>6.0f} KB')
    raw.unlink()


if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    for clip in CLIPS:
        encode(clip)
        if clip['poster'] is not None:
            poster(clip)
