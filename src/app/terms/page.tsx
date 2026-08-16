import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import { BRAND, CONTACT } from '@/lib/constants'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Shree Texfab',
  description: 'Terms and Conditions for Shree Texfab Creations Private Limited.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms &amp; Conditions"
        subtitle="Effective date: 1 January 2025"
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className={styles.legal}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.
            </p>

            <h2>2. Website Use</h2>
            <p>
              This website is operated by {BRAND.name}. The content is for general informational purposes about our products and services. All specifications, capacities and pricing mentioned are indicative only and subject to confirmation.
            </p>

            <h2>3. Product Information</h2>
            <p>
              Fabric specifications, GSM ranges, compositions and availability shown on this website are indicative. Confirmed specifications, pricing and minimum order quantities are communicated at the time of formal quotation. We reserve the right to modify product specifications without notice.
            </p>

            <h2>4. Enquiries and Orders</h2>
            <p>
              Submissions through our contact or enquiry forms do not constitute orders or binding agreements. Orders are subject to separate written confirmation, agreed terms and conditions of sale, and applicable payment terms.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos and design — is the property of {BRAND.name} and may not be reproduced without prior written permission.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              We do not warrant that this website will be uninterrupted or error-free. To the extent permitted by law, we exclude all liability for any damages arising from use of this website or reliance on its content.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions about these Terms, please contact us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>

            <p className={styles.updateNote}>
              These Terms and Conditions may be updated periodically. The effective date at the top indicates the most recent revision.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
