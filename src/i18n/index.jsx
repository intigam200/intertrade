import { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import ru from './ru.js'
import en from './en.js'
import { langFromPath, languages, pathFor, switchLangPath } from './routes.js'

const bundles = { ru, en }

// canonical и hreflang: поисковик должен видеть, что это две версии одной
// страницы, и какая из них соответствует языку пользователя.
function setLink(rel, hreflang, href) {
  const selector = hreflang
    ? `link[rel="alternate"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`
  let link = document.head.querySelector(selector)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    if (hreflang) link.setAttribute('hreflang', hreflang)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

const I18nContext = createContext(null)

// Язык определяется адресом страницы, а не состоянием: ссылку на английскую
// версию можно отправить, и она откроется на английском.
export function I18nProvider({ children }) {
  const { pathname, hash } = useLocation()
  const lang = langFromPath(pathname)
  const bundle = bundles[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = bundle.meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', bundle.meta.description)

    const origin = window.location.origin
    setLink('canonical', null, origin + pathname)
    languages.forEach((code) => setLink('alternate', code, origin + switchLangPath(pathname, '', code)))
    setLink('alternate', 'x-default', origin + switchLangPath(pathname, '', 'ru'))
  }, [lang, bundle, pathname])

  const value = useMemo(
    () => ({
      lang,
      t: bundle.ui,
      d: bundle.data,
      path: (key, anchor = '') => pathFor(key, lang, anchor),
      altPath: (target) => switchLangPath(pathname, hash, target),
    }),
    [lang, bundle, pathname, hash],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n используется вне I18nProvider')
  return value
}
