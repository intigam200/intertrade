// Маршруты в двух языках. Русский — корень сайта, английский — префикс /en.
// Ключ маршрута общий для обоих языков: по нему строятся ссылки и переключение.
export const languages = ['ru', 'en']
export const defaultLang = 'ru'

export const routes = {
  home: { ru: '/', en: '/en' },
  about: { ru: '/o-kompanii', en: '/en/about' },
  services: { ru: '/uslugi', en: '/en/services' },
  products: { ru: '/produkciya', en: '/en/products' },
  contacts: { ru: '/kontakty', en: '/en/contacts' },
}

export const routeKeys = Object.keys(routes)

export function langFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ru'
}

// Ключ текущего маршрута — нужен, чтобы переключение языка оставляло
// пользователя на той же странице, а не отправляло на главную.
export function routeKeyFromPath(pathname) {
  const lang = langFromPath(pathname)
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return routeKeys.find((key) => routes[key][lang] === clean) || null
}

export function pathFor(key, lang, hash = '') {
  const path = routes[key]?.[lang] || routes.home[lang]
  return `${path}${hash}`
}

// Тот же экран на другом языке; неизвестный маршрут (404) ведёт на главную.
export function switchLangPath(pathname, hash, lang) {
  const key = routeKeyFromPath(pathname)
  return key ? pathFor(key, lang, hash) : pathFor('home', lang)
}
