import { useEffect, useState } from 'react'
import { Photo } from './ui.jsx'

// Фото первого экрана. Готовит scripts/build-images.py (slides()).
const slides = ['slide-refinery', 'slide-assembly', 'slide-welding']
const SLIDE_MS = 6000

/* Стопка фото со сменой через затухание. Размер, маску и затемнение
   задаёт родитель. Остальные кадры начинают грузиться только после
   полной загрузки страницы и по одному вперёд — первый кадр не делит
   канал ни с кем. */
export default function HeroSlideshow() {
  const [slide, setSlide] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setReady(true)
      return undefined
    }
    const onLoad = () => setReady(true)
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  useEffect(() => {
    if (!ready) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [ready])

  return slides.map((name, i) => {
    const load = i === 0 || (ready && i <= slide + 1)
    return (
      <div
        key={name}
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
          i === slide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {load && (
          <Photo
            name={name}
            widths={[800, name === 'slide-refinery' ? 1536 : 1600]}
            sizes="(min-width: 768px) 80vw, 100vw"
            className="h-full w-full object-cover"
            priority={i === 0}
          />
        )}
      </div>
    )
  })
}
