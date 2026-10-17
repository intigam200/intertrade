import { useCallback, useEffect, useRef, useState } from 'react'
import { Photo } from './ui.jsx'

// Ролики медиакарточки. Файлы готовит scripts/build-videos.py:
// по 10 секунд, без звука, MP4/H.264.
export const clips = ['manufacturing', 'energy', 'sea']

const FADE = 1200 // мс, столько же стоит в transition-duration
const LEAD = 1.3 // за сколько секунд до конца начинать следующий ролик

/* Медиакарточка с роликами в светлой секции. Видео включается только
   когда карточка видна, на экране шире 800 px, при обычных настройках
   анимации и без режима экономии трафика — иначе остаётся постер-кадр,
   и телефон не качает ни одного мегабайта. */
export default function SectorVideo({ posterAlt, labels, className = '' }) {
  const box = useRef(null)
  const videos = useRef([])
  const [enabled, setEnabled] = useState(false)
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(() => new Set([0])) // какие ролики уже подгружаем

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 801px)').matches
    const motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection?.saveData === true
    if (!wide || !motion || saveData || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' },
    )
    if (box.current) observer.observe(box.current)
    return () => observer.disconnect()
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

  // Смена до конца ролика: оба кадра в этот момент ещё движутся.
  const onProgress = (i) => (event) => {
    if (i !== index) return
    const el = event.currentTarget
    if (!el.duration) return
    if (el.duration - el.currentTime <= LEAD) show((i + 1) % clips.length)
  }

  return (
    <figure
      ref={box}
      className={`relative overflow-hidden rounded-[14px] bg-navy shadow-media [transform:translateZ(0)] ${className}`}
    >
      <Photo
        name="hero-poster"
        widths={[600, 1000]}
        sizes="570px"
        alt={posterAlt}
        width="1000"
        height="563"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {enabled &&
        clips.map((name, i) =>
          loading.has(i) ? (
            <video
              key={name}
              ref={(el) => {
                videos.current[i] = el
              }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-linear ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              muted
              playsInline
              preload="auto"
              tabIndex={-1}
              aria-hidden
              disablePictureInPicture
              onTimeUpdate={onProgress(i)}
              onEnded={() => show((i + 1) % clips.length)}
            >
              <source src={`/video/${name}.mp4`} type="video/mp4" />
            </video>
          ) : null,
        )}

      {enabled && (
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-navy/85 to-transparent px-5 pb-4 pt-10">
          <span className="text-[13px] font-semibold text-white">{labels[index]}</span>
          <span className="flex items-center gap-1.5">
            {clips.map((name, i) => (
              <button
                key={name}
                type="button"
                onClick={() => show(i)}
                aria-label={labels[i]}
                aria-pressed={i === index}
                className="flex h-6 items-center"
              >
                <span
                  className={`block h-1 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-white' : 'w-3 bg-white/45 hover:bg-white/80'
                  }`}
                />
              </button>
            ))}
          </span>
        </figcaption>
      )}
    </figure>
  )
}
