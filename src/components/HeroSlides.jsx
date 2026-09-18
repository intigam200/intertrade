import { useCallback, useEffect, useRef, useState } from 'react'
import { Photo } from './ui.jsx'

// Порядок слайдов первого экрана. Файлы готовит scripts/build-videos.py:
// по 10 секунд, без звука, MP4/H.264.
export const clips = ['sea', 'industrial', 'energy']

/* Фон первого экрана: постер-кадр снизу, поверх — ролики со сменой по
   очереди. Видео включается только на широком экране, при обычных
   настройках анимации и без режима экономии трафика — иначе остаётся
   один постер, и телефон не качает ни одного мегабайта. */
export default function HeroSlides({ posterAlt, labels }) {
  const [enabled, setEnabled] = useState(false)
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(() => new Set([0])) // какие ролики уже подгружаем
  const videos = useRef([])

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)').matches
    const motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection?.saveData === true
    setEnabled(wide && motion && !saveData)
  }, [])

  const show = useCallback((next) => {
    setIndex(next)
    setLoading((prev) => (prev.has(next) ? prev : new Set(prev).add(next)))
  }, [])

  // следующий ролик начинаем тянуть заранее, чтобы переход был без паузы
  useEffect(() => {
    if (!enabled) return undefined
    const next = (index + 1) % clips.length
    const timer = setTimeout(
      () => setLoading((prev) => (prev.has(next) ? prev : new Set(prev).add(next))),
      4000,
    )
    return () => clearTimeout(timer)
  }, [enabled, index])

  // Играет только активный ролик, остальные стоят на паузе. В зависимостях
  // намеренно нет loading: подгрузка следующего ролика не должна
  // перезапускать текущий с начала.
  useEffect(() => {
    if (!enabled) return
    videos.current.forEach((el, i) => {
      if (!el) return
      el.muted = true
      if (i === index) {
        el.currentTime = 0
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  }, [enabled, index])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Photo
        name="hero-poster"
        widths={[800, 1440]}
        sizes="100vw"
        alt={posterAlt}
        width="1440"
        height="810"
        className="absolute inset-0 h-full w-full object-cover"
        priority
      />

      {enabled &&
        clips.map((name, i) =>
          loading.has(i) ? (
            <video
              key={name}
              ref={(el) => {
                videos.current[i] = el
              }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              playsInline
              preload="auto"
              tabIndex={-1}
              disablePictureInPicture
              onEnded={() => show((i + 1) % clips.length)}
            >
              <source src={`/video/${name}.mp4`} type="video/mp4" />
            </video>
          ) : null,
        )}

      {/* затемнение: слева плотнее — под заголовок и лид */}
      <div className="absolute inset-0 bg-graphite-950/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/90 via-graphite-950/70 to-graphite-950/80 lg:bg-gradient-to-r lg:from-graphite-950 lg:via-graphite-950/80 lg:to-graphite-950/45" />
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-25" />

      {/* маркировка слайдов */}
      {enabled && (
        <div className="pointer-events-auto absolute right-5 top-7 hidden items-center gap-4 sm:right-8 lg:right-12 lg:flex">
          <span className="font-mono text-[11px] uppercase tracking-wide2 text-steel-300">
            {labels[index]}
          </span>
          <span className="flex items-center gap-2">
            {clips.map((name, i) => (
              <button
                key={name}
                type="button"
                onClick={() => show(i)}
                aria-label={labels[i]}
                className={`h-px w-8 transition-colors duration-300 ${
                  i === index ? 'bg-ochre-500' : 'bg-steel-500 hover:bg-steel-300'
                }`}
              />
            ))}
          </span>
        </div>
      )}
    </div>
  )
}
