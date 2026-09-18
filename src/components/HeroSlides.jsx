import { useCallback, useEffect, useRef, useState } from 'react'
import { Photo } from './ui.jsx'

// Порядок слайдов первого экрана. Файлы готовит scripts/build-videos.py:
// по 10 секунд, без звука, MP4/H.264.
export const clips = ['sea', 'industrial', 'energy']

const FADE = 900 // мс, столько же стоит в transition-duration
const LEAD = 1.1 // за сколько секунд до конца начинать следующий ролик

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
    setIndex((current) => {
      if (current === next) return current
      setLoading((prev) => (prev.has(next) ? prev : new Set(prev).add(next)))
      return next
    })
  }, [])

  // следующий ролик начинаем тянуть заранее, чтобы к смене он был готов
  useEffect(() => {
    if (!enabled) return undefined
    const next = (index + 1) % clips.length
    const timer = setTimeout(
      () => setLoading((prev) => (prev.has(next) ? prev : new Set(prev).add(next))),
      2000,
    )
    return () => clearTimeout(timer)
  }, [enabled, index])

  // Активный ролик запускается сразу, предыдущий доигрывает кроссфейд и
  // только потом встаёт на паузу — иначе кадр замирает на время перехода.
  // В зависимостях намеренно нет loading: подгрузка следующего ролика не
  // должна перезапускать текущий.
  useEffect(() => {
    if (!enabled) return undefined
    const active = videos.current[index]
    if (active) {
      active.muted = true
      active.currentTime = 0
      active.play().catch(() => {})
    }
    const timer = setTimeout(() => {
      videos.current.forEach((el, i) => {
        if (el && i !== index) el.pause()
      })
    }, FADE + 100)
    return () => clearTimeout(timer)
  }, [enabled, index])

  // Смена за секунду до конца: оба кадра в этот момент ещё движутся.
  const onProgress = (i) => (event) => {
    if (i !== index) return
    const el = event.currentTarget
    if (!el.duration) return
    if (el.duration - el.currentTime <= LEAD) show((i + 1) % clips.length)
  }

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Photo
        name="hero-poster"
        widths={[800, 1600]}
        sizes="100vw"
        alt={posterAlt}
        width="1600"
        height="900"
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
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-linear ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              playsInline
              preload="auto"
              tabIndex={-1}
              disablePictureInPicture
              onTimeUpdate={onProgress(i)}
              onEnded={() => show((i + 1) % clips.length)}
            >
              <source src={`/video/${name}.mp4`} type="video/mp4" />
            </video>
          ) : null,
        )}

      {/* затемнение: слева плотное — под заголовок, справа кадр открыт */}
      <div className="absolute inset-0 bg-graphite-950/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/90 via-graphite-950/60 to-graphite-950/75 lg:bg-gradient-to-r lg:from-graphite-950 lg:via-graphite-950/65 lg:to-transparent" />
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-15" />

      {/* маркировка слайдов */}
      {enabled && (
        <div className="pointer-events-auto absolute right-5 top-7 hidden items-center gap-4 sm:right-8 lg:right-12 lg:flex">
          <span className="font-mono text-[11px] uppercase tracking-wide2 text-white/80">
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
                  i === index ? 'bg-ochre-500' : 'bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </span>
        </div>
      )}
    </div>
  )
}
