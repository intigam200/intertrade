import { useEffect, useState } from 'react'
import { FiAlertCircle, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
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

/* idPrefix — чтобы на одной странице не было двух полей с одинаковым id */
export default function ContactForm({ idPrefix = 'form' }) {
  const { lang, t, d } = useI18n()
  const f = t.contacts.fields
  const id = (name) => `${idPrefix}-${name}`

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
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(id(first))?.focus()
      return
    }

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

  if (status === 'sent') {
    return (
      <div className="rounded bg-mist px-8 py-12 text-center" role="status">
        <FiCheckCircle className="mx-auto h-10 w-10 text-success" aria-hidden />
        <p className="mt-4 text-[20px] font-bold text-navy">{t.contacts.sentTitle}</p>
        <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted">{t.contacts.sent}</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-outline mt-6">
          {t.contacts.again}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <p className="mb-5 text-[13px] text-muted">{t.contacts.required}</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={id('company')} label={f.company} value={values.company} onChange={update('company')} error={errors.company} placeholder={f.companyPlaceholder} autoComplete="organization" />
        <Field id={id('name')} label={f.name} value={values.name} onChange={update('name')} error={errors.name} placeholder={f.namePlaceholder} autoComplete="name" />
        <Field id={id('phone')} label={f.phone} type="tel" value={values.phone} onChange={update('phone')} error={errors.phone} placeholder={f.phonePlaceholder} autoComplete="tel" inputMode="tel" />
        <Field id={id('email')} label={f.email} type="email" value={values.email} onChange={update('email')} error={errors.email} placeholder={f.emailPlaceholder} autoComplete="email" />
      </div>

      <div className="mt-5">
        <label htmlFor={id('subject')} className="label">
          {f.subject}
        </label>
        <select id={id('subject')} value={values.subject} onChange={update('subject')} className="field-select">
          {d.activities.map((a) => (
            <option key={a.slug}>{a.title}</option>
          ))}
          <option>{f.subjectOther}</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor={id('message')} className="label">
          {f.message}
        </label>
        <textarea
          id={id('message')}
          rows={5}
          value={values.message}
          onChange={update('message')}
          placeholder={f.messagePlaceholder}
          className={`field resize-y ${errors.message ? 'field-error' : ''}`}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? id('message-error') : undefined}
        />
        {errors.message && <Note id={id('message-error')}>{errors.message}</Note>}
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-muted">
          <input
            id={id('consent')}
            type="checkbox"
            checked={values.consent}
            onChange={update('consent')}
            className="mt-1 h-[18px] w-[18px] shrink-0 cursor-pointer accent-accent"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? id('consent-error') : undefined}
          />
          <span>{f.consent}</span>
        </label>
        {errors.consent && <Note id={id('consent-error')}>{errors.consent}</Note>}
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <p className="mt-6 flex items-start gap-2 rounded bg-danger-bg px-4 py-3 text-[14px] text-danger">
            <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              {t.contacts.error}
              <a href={contacts.emailHref} className="font-semibold underline underline-offset-2">
                {contacts.email}
              </a>
            </span>
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? t.contacts.sending : t.contacts.submit}
        {status !== 'sending' && <FiArrowRight className="h-[18px] w-[18px]" aria-hidden />}
      </button>

      {!ENDPOINT && import.meta.env.DEV && (
        <p className="mt-5 border-l-2 border-line pl-3 text-[12px] text-muted">{t.contacts.stub}</p>
      )}
    </form>
  )
}

function Field({ id, label, error, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        className={`field ${error ? 'field-error' : ''}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && <Note id={`${id}-error`}>{error}</Note>}
    </div>
  )
}

function Note({ children, id }) {
  return (
    <span id={id} className="mt-1.5 flex items-center gap-1.5 text-[12px] font-medium text-danger">
      <FiAlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {children}
    </span>
  )
}
