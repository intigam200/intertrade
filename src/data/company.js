import { useEffect, useState } from 'react'

// Данные, не зависящие от языка. Тексты обеих версий — в src/i18n/ru.js и en.js.
export const contacts = {
  phone: '+7 702 201 23 33',
  phoneHref: 'tel:+77022012333',
  email: 'request.icg@gmail.com',
  emailHref: 'mailto:request.icg@gmail.com',
}

// Профиль компании в PDF. Достаточно положить файл в public/ под этим именем —
// кнопка «Скачать профиль компании» появится на первом экране сама.
export const PROFILE_PDF = '/icg-profile.pdf'

// Проверяем, что по адресу лежит именно PDF: на Vercel любой адрес
// без файла отдаёт index.html с кодом 200.
export function useProfilePdf() {
  const [href, setHref] = useState(null)
  useEffect(() => {
    let alive = true
    fetch(PROFILE_PDF, { method: 'HEAD' })
      .then((r) => alive && r.ok && (r.headers.get('content-type') || '').includes('pdf') && setHref(PROFILE_PDF))
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])
  return href
}

// Плейсхолдеры под ленту брендов. Заменяются на реальные логотипы
// (SVG/PNG в public/images/brands/) без изменения разметки.
export const brands = [
  'Rotork',
  'Emerson',
  'Flowserve',
  'Cameron',
  'Velan',
  'Auma',
  'KSB',
  'Sulzer',
  'Weir Minerals',
  'Metso',
  'FLSmidth',
  'Warman',
  'Yokogawa',
  'Endress+Hauser',
  'Honeywell',
  'Siemens',
  'Atlas Copco',
  'Parker',
  'Swagelok',
  'Samson',
  'Bettis',
  'Fisher',
]
