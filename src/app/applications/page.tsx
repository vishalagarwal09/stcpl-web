import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ApplicationsSection from '@/components/sections/ApplicationsSection'
import CTABanner from '@/components/ui/CTABanner'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Fabric Applications | Shree Texfab',
  description:
    'Woven fabrics for corporate, school, hospitality, industrial, healthcare, defence and fashion applications.',
}

const applicationDetails = [
  {
    sector: 'Corporate & Office Wear',
    icon: '🏢',
    fabrics: ['Suiting Fabrics', 'Shirting Fabrics', 'Corporate Fabrics'],
    note: 'Consistent shade and specification across bulk orders for office uniforms.',
  },
  {
    sector: 'School & Educational Uniforms',
    icon: '🏫',
    fabrics: ['Uniform Fabrics', 'Suiting Fabrics', 'Shirting Fabrics'],
    note: 'Durable, easy-care fabrics with shade consistency for institutional supply.',
  },
  {
    sector: 'Hospitality & Hotels',
    icon: '🏨',
    fabrics: ['Suiting Fabrics', 'Shirting Fabrics', 'Specialty Fabrics'],
    note: 'Smart-appearance fabrics for front-of-house and back-of-house uniforms.',
  },
  {
    sector: 'Industrial & Workwear',
    icon: '🏭',
    fabrics: ['Uniform Fabrics', 'Specialty Fabrics'],
    note: 'Heavy-weight constructions with durability and easy-care properties.',
  },
  {
    sector: 'Healthcare & Paramedical',
    icon: '🏥',
    fabrics: ['Uniform Fabrics', 'Specialty Fabrics'],
    note: 'Easy-care, hygienic fabric solutions for healthcare environments.',
  },
  {
    sector: 'Defence & Security',
    icon: '🛡️',
    fabrics: ['Uniform Fabrics', 'Specialty Fabrics'],
    note: 'Structured fabrics with consistent shade and durability for uniform-grade applications.',
  },
  {
    sector: 'Fashion Apparel',
    icon: '👗',
    fabrics: ['Printed Fabrics', 'Shirting Fabrics', 'Specialty Fabrics'],
    note: 'On-trend constructions and printed designs for apparel brands and designers.',
  },
  {
    sector: 'Retail & Garment Export',
    icon: '🌍',
    fabrics: ['Suiting Fabrics', 'Shirting Fabrics', 'Printed Fabrics', 'Uniform Fabrics'],
    note: 'Export-ready fabrics with full documentation for garment manufacturers and exporters.',
  },
]

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        label="Applications"
        title="Fabric for Every Application"
        subtitle="Our woven fabric range serves diverse end-use sectors — from corporate office wear to technical workwear and fashion apparel."
        breadcrumbs={[{ label: 'Applications' }]}
      />

      <ApplicationsSection />

      <section className={styles.detail}>
        <div className="container">
          <h2 className={`section-title ${styles.detailTitle}`}>Applications by Sector</h2>
          <div className={styles.detailGrid}>
            {applicationDetails.map((a) => (
              <div key={a.sector} className={styles.detailCard}>
                <span className={styles.detailIcon}>{a.icon}</span>
                <h3 className={styles.detailSector}>{a.sector}</h3>
                <p className={styles.detailNote}>{a.note}</p>
                <div className={styles.detailFabrics}>
                  {a.fabrics.map((f) => (
                    <span key={f} className="tag-gold-border">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Fabric for a <span>Specific Application?</span>"
        subtitle="Share your end-use requirement and our team will recommend the right fabric solution."
        buttons={[
          { label: 'Send an Enquiry', href: '/contact', variant: 'gold' },
          { label: 'View Products', href: '/products', variant: 'outline-white' },
        ]}
      />
    </>
  )
}
