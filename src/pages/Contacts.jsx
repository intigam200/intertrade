import { FiBriefcase, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { CheckList, ContactRow, PageHero, SectionIntro } from '../components/ui.jsx'
import { contacts } from '../data/company.js'
import { useI18n } from '../i18n/index.jsx'

export default function Contacts() {
  const { t, d } = useI18n()

  return (
    <>
      <PageHero label={t.contacts.label} title={t.contacts.title} lead={t.contacts.lead} />

      <section className="section bg-white">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionIntro label={t.contacts.infoLabel} title={t.contacts.infoTitle} />
            <Reveal className="mt-8 space-y-5">
              <ContactRow icon={FiPhone} label={t.contacts.phone} href={contacts.phoneHref} text={contacts.phone} />
              <ContactRow icon={FiMail} label={t.contacts.email} href={contacts.emailHref} text={contacts.email} />
              <ContactRow icon={FiMapPin} label={t.contacts.region} text={d.contacts.country} />
              <ContactRow icon={FiBriefcase} label={t.contacts.legal} text={d.contacts.legalName} />
            </Reveal>

            <Reveal className="mt-10 rounded-[10px] bg-mist p-6">
              <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-navy">{t.contacts.hintTitle}</p>
              <CheckList compact items={t.contacts.hints} />
            </Reveal>
          </div>

          <Reveal className="rounded-xl border border-line p-6 shadow-card sm:p-8">
            <p className="eyebrow">{t.contacts.formLabel}</p>
            <h2 className="mb-6 text-[24px] font-bold leading-tight text-navy">{t.contacts.formTitle}</h2>
            <ContactForm idPrefix="contacts" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
