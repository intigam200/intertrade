import { useEffect, useState } from 'react'
import { IconArrow } from '../components/Icons.jsx'
import { PageHero } from '../components/ui.jsx'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

// Эндпоинт формы задаётся переменной VITE_FORM_ENDPOINT (Formspree, почтовый
// шлюз или собственный обработчик). Без неё форма работает в режиме заглушки.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

function validate(values, messages) {
  const errors = {}
  if (!values.company.trim()) errors.company = messages.company
  if (!values.name.trim()) errors.name = messages.name
  if (!/^[\d\s+()-]{6,}$/.test(values.phone.trim())) errors.phone = messages.phone
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = messages.email
  if (values.message.trim().length < 10) errors.message = messages.message
  if (!values.consent) errors.consent = messages.consent
  return errors
}

export default function Contacts() {
  const { lang, t, d } = useI18n()

  const initial = {
    company: '',
    name: '',
    phone: '',
    email: '',
    subject: d.activities[0].title,
    message: '',
    consent: false,
  }

  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  // При смене языка подставляем направление на новом языке и убираем
  // сообщения об ошибках, написанные на прежнем.
  useEffect(() => {
    setValues((prev) => ({ ...prev, subject: d.activities[0].title }))
    setErrors({})
  }, [lang, d])

  const update = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values, t.contacts.errors)
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      if (ENDPOINT) {
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, lang }),
        })
        if (!response.ok) throw new Error('Request failed')
      } else {
        // Заглушка до подключения обработчика.
        await new Promise((resolve) => setTimeout(resolve, 600))
      }
      setStatus('sent')
      setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero code={t.contacts.code} title={t.contacts.title} lead={t.contacts.lead} />

      <section className="bg-white py-16 lg:py-24">
        <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* реквизиты и связь */}
          <div className="lg:col-span-4">
            <p className="tag">{t.contacts.tag}</p>
            <dl className="mt-6 border-t border-graphite-900">
              <div className="border-b border-steel-200 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                  {t.contacts.phone}
                </dt>
                <dd className="mt-2">
                  <a
                    href={contacts.phoneHref}
                    className="font-display text-[26px] font-bold tracking-tightest text-graphite-900 hover:text-ochre-600"
                  >
                    {contacts.phone}
                  </a>
                </dd>
              </div>
              <div className="border-b border-steel-200 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                  {t.contacts.email}
                </dt>
                <dd className="mt-2">
                  <a
                    href={contacts.emailHref}
                    className="text-[18px] text-graphite-900 hover:text-ochre-600"
                  >
                    {contacts.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-steel-200 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                  {t.contacts.legal}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-graphite-800">
                  {d.contacts.legalName}
                </dd>
              </div>
              <div className="border-b border-steel-200 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                  {t.contacts.region}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-graphite-800">
                  {d.contacts.country}
                </dd>
              </div>
              <div className="border-b border-steel-200 py-5">
                <dt className="font-mono text-[11px] uppercase tracking-wide2 text-steel-500">
                  {t.contacts.directions}
                </dt>
                <dd className="mt-2 space-y-1 text-[15px] text-graphite-800">
                  {d.activities.map((a) => (
                    <p key={a.slug}>{a.title}</p>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-8 border border-steel-200 bg-steel-50 p-6">
              <p className="tag">{t.contacts.hintTag}</p>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-steel-500">
                {t.contacts.hints.map((hint) => (
                  <li key={hint}>{hint}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* форма */}
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="tag">{t.contacts.formTag}</p>
            <h2 className="mt-4 text-[26px] font-bold uppercase leading-tight text-graphite-900 sm:text-[34px]">
              {t.contacts.formTitle}
            </h2>

            <form onSubmit={onSubmit} noValidate className="mt-9">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  id="company"
                  label={t.contacts.fields.company}
                  value={values.company}
                  onChange={update('company')}
                  error={errors.company}
                  placeholder={t.contacts.fields.companyPlaceholder}
                />
                <Field
                  id="name"
                  label={t.contacts.fields.name}
                  value={values.name}
                  onChange={update('name')}
                  error={errors.name}
                  placeholder={t.contacts.fields.namePlaceholder}
                />
                <Field
                  id="phone"
                  label={t.contacts.fields.phone}
                  type="tel"
                  value={values.phone}
                  onChange={update('phone')}
                  error={errors.phone}
                  placeholder={t.contacts.fields.phonePlaceholder}
                />
                <Field
                  id="email"
                  label={t.contacts.fields.email}
                  type="email"
                  value={values.email}
                  onChange={update('email')}
                  error={errors.email}
                  placeholder={t.contacts.fields.emailPlaceholder}
                />
              </div>

              <div className="mt-6">
                <label htmlFor="subject" className="label">
                  {t.contacts.fields.subject}
                </label>
                <select
                  id="subject"
                  value={values.subject}
                  onChange={update('subject')}
                  className="field"
                >
                  {d.activities.map((a) => (
                    <option key={a.slug}>{a.title}</option>
                  ))}
                  <option>{t.contacts.fields.subjectOutsourcing}</option>
                  <option>{t.contacts.fields.subjectOther}</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="label">
                  {t.contacts.fields.message}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={values.message}
                  onChange={update('message')}
                  placeholder={t.contacts.fields.messagePlaceholder}
                  className={`field resize-y ${errors.message ? 'field-error' : ''}`}
                />
                {errors.message && <Note>{errors.message}</Note>}
              </div>

              <label className="mt-6 flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-steel-500">
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={update('consent')}
                  className="mt-1 h-4 w-4 shrink-0 accent-ochre-500"
                />
                <span>
                  {t.contacts.fields.consent}
                  {errors.consent && <Note inline>{errors.consent}</Note>}
                </span>
              </label>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? t.contacts.sending : t.contacts.submit}
                  {status !== 'sending' && <IconArrow />}
                </button>
                {status === 'sent' && (
                  <p className="font-mono text-[12px] uppercase tracking-wide2 text-signal-green">
                    {t.contacts.sent}
                  </p>
                )}
                {status === 'error' && (
                  <p className="font-mono text-[12px] uppercase tracking-wide2 text-signal-red">
                    {t.contacts.error}
                    {contacts.email}
                  </p>
                )}
              </div>

              {!ENDPOINT && (
                <p className="mt-6 border-l-2 border-steel-300 pl-4 font-mono text-[11px] uppercase leading-relaxed tracking-wide2 text-steel-400">
                  {t.contacts.stub}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ id, label, error, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input id={id} className={`field ${error ? 'field-error' : ''}`} {...rest} />
      {error && <Note>{error}</Note>}
    </div>
  )
}

function Note({ children, inline = false }) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-wide2 text-signal-red ${
        inline ? 'ml-2' : 'mt-2 block'
      }`}
    >
      {children}
    </span>
  )
}
