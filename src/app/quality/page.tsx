import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import QualitySection from '@/components/sections/QualitySection'
import CTABanner from '@/components/ui/CTABanner'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Quality Assurance | Shree Texfab',
  description:
    'Multi-stage quality control from yarn to finished fabric — ensuring every delivery meets confirmed specifications.',
}

const commitments = [
  { label: 'Specification Adherence', desc: 'Yarn count, GSM, width and construction verified against approved specifications.' },
  { label: 'Consistent Shade', desc: 'Shade cards and dyeing batches controlled for consistency across the entire production run.' },
  { label: 'Dimensional Stability', desc: 'Shrinkage and width consistency tested to ensure garment-making performance.' },
  { label: 'Repeat Reliability', desc: 'Every repeat order produced to the same specification as the original approval.' },
]

export default function QualityPage() {
  return (
    <>
      <PageHero
        label="Quality Assurance"
        title="Quality at Every Stage"
        subtitle="Our quality system covers every step from yarn procurement through final inspection — so buyers can depend on consistent fabric performance."
        breadcrumbs={[{ label: 'Quality' }]}
      />

      <QualitySection />

      <section className={styles.commitments}>
        <div className="container">
          <div className={styles.commitGrid}>
            {commitments.map((c) => (
              <div key={c.label} className={styles.commitCard}>
                <h3 className={styles.commitLabel}>{c.label}</h3>
                <p className={styles.commitDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Quality You Can <span>Depend On</span>"
        subtitle="Share your specification requirements and we will confirm what we can deliver."
        buttons={[
          { label: 'Request Samples', href: '/contact', variant: 'gold' },
          { label: 'View Products', href: '/products', variant: 'outline-white' },
        ]}
      />
    </>
  )
}
