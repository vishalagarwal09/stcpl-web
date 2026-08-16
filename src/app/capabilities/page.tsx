import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ProcessSection from '@/components/sections/ProcessSection'
import CustomDevSection from '@/components/sections/CustomDevSection'
import CTABanner from '@/components/ui/CTABanner'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Manufacturing Capabilities | Shree Texfab',
  description:
    'Yarn procurement to final delivery — our end-to-end fabric manufacturing capabilities for woven suiting, shirting and uniform fabrics.',
}

const capabilities = [
  {
    icon: '🧵',
    title: 'Yarn Procurement & Sourcing',
    desc: 'Sourcing across multiple fibre types — polyester, viscose, cotton, blends and specialty fibres — from established supply chains.',
  },
  {
    icon: '🔄',
    title: 'Weaving',
    desc: 'Woven fabric production in plain, twill, dobby, herringbone and other structured constructions across varied widths.',
  },
  {
    icon: '🎨',
    title: 'Dyeing',
    desc: 'Piece dyeing and yarn dyeing capability with consistent shade matching for bulk production and repeat orders.',
  },
  {
    icon: '⚙️',
    title: 'Processing & Finishing',
    desc: 'A range of finishing options including soft finish, stiff finish, anti-pilling, shrinkage control, wrinkle-resistance and easy-care treatments.',
  },
  {
    icon: '🖨️',
    title: 'Printing',
    desc: 'Custom and stock design printing capability for fashion, promotional and institutional applications.',
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    desc: 'Multi-stage inspection — yarn, greige and finished fabric — to ensure specifications are met at every stage.',
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        label="Our Capabilities"
        title="End-to-End Fabric Manufacturing"
        subtitle="From yarn sourcing to finished fabric — we manage the complete production chain for consistent quality and reliable supply."
        breadcrumbs={[{ label: 'Capabilities' }]}
      />

      <section className={styles.capCards}>
        <div className="container">
          <div className={styles.grid}>
            {capabilities.map((c) => (
              <div key={c.title} className={styles.card}>
                <span className={styles.cardIcon}>{c.icon}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CustomDevSection />

      <CTABanner
        title="Ready to <span>Partner</span> With Us?"
        subtitle="Tell us your fabric requirement and our team will identify the right manufacturing solution."
        buttons={[
          { label: 'Send an Enquiry', href: '/contact', variant: 'gold' },
          { label: 'View Products', href: '/products', variant: 'outline-white' },
        ]}
      />
    </>
  )
}
