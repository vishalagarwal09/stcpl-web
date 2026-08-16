import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import { BRAND, CONTACT } from '@/lib/constants'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shree Texfab',
  description: 'Privacy Policy for Shree Texfab Creations Private Limited.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle={`Effective date: 1 January 2025`}
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className={styles.legal}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Overview</h2>
            <p>
              {BRAND.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates this website. This Privacy Policy describes how we collect, use and protect information submitted through our website contact and enquiry forms.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect information you voluntarily submit via our contact and enquiry forms, including your name, company name, phone number, email address and product enquiry details. We do not collect any information automatically beyond standard web server logs.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              Information you submit is used solely to respond to your enquiry and facilitate business communication. We do not sell, rent or share your personal information with third parties for marketing purposes.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              Enquiry and contact information is retained only as long as required to fulfil the purpose for which it was submitted or as required by applicable law.
            </p>

            <h2>5. Cookies</h2>
            <p>
              This website may use minimal cookies for essential functionality. We do not use tracking or advertising cookies.
            </p>

            <h2>6. Security</h2>
            <p>
              We take reasonable precautions to protect information you submit. However, no transmission over the internet is completely secure, and we cannot guarantee the security of information transmitted to our website.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              You may contact us to request access to, correction of, or deletion of personal information you have submitted to us.
            </p>

            <h2>8. Contact</h2>
            <p>
              For any privacy-related queries, please contact us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>

            <p className={styles.updateNote}>
              This Privacy Policy may be updated periodically. The effective date at the top of this page indicates the most recent revision.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
