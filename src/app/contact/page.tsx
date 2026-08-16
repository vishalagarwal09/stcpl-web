import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ContactForm from '@/components/ui/ContactForm'
import { CONTACT, BRAND } from '@/lib/constants'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact Us | Shree Texfab',
  description:
    'Get in touch with Shree Texfab Creations for fabric enquiries, sample requests and trade partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Send us your fabric requirement or enquiry. Our team will respond within one business day."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.layout}>

            {/* Info Column */}
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Our Office</h2>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Registered Name</span>
                <span className={styles.infoVal}>{BRAND.name}</span>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Address</span>
                <span className={styles.infoVal}>{CONTACT.address}</span>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Phone</span>
                <a href={`tel:${CONTACT.phone}`} className={styles.infoLink}>{CONTACT.phone}</a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${CONTACT.email}`} className={styles.infoLink}>{CONTACT.email}</a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>WhatsApp</span>
                <a
                  href={`https://wa.me/${CONTACT.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  {CONTACT.phone}
                </a>
              </div>

              <div className={styles.hours}>
                <span className={styles.infoLabel}>Business Hours</span>
                <span className={styles.infoVal}>Monday – Saturday, 10:00 AM – 6:00 PM IST</span>
              </div>

              <div className={styles.note}>
                Enquiries received outside business hours will be attended to on the next working day.
              </div>
            </div>

            {/* Form Column */}
            <div className={styles.formWrap}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
