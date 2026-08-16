import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import ProductsGrid from '@/components/sections/ProductsGrid'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ApplicationsSection from '@/components/sections/ApplicationsSection'
import CustomDevSection from '@/components/sections/CustomDevSection'
import QualitySection from '@/components/sections/QualitySection'
import ExportsSection from '@/components/sections/ExportsSection'
import CTABanner from '@/components/ui/CTABanner'
import SectionHeader from '@/components/ui/SectionHeader'
import { values } from '@/data/values'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Shree Texfab Creations | Textile Manufacturer & Fabric Supplier India',
  description:
    'Shree Texfab Creations is an Indian textile company supplying suiting, shirting, uniform and specialty fabrics for domestic and international buyers.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Intro */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <span className="section-label">About Shree Texfab</span>
              <h2 className="section-title">Textile Expertise. Built Around Your Requirement.</h2>
              <blockquote className={styles.quote}>
                &ldquo;We don&apos;t just supply fabric. We solve fabric requirements.&rdquo;
              </blockquote>
              <p className="section-sub">
                Shree Texfab Creations Private Limited is an Indian textile company serving the evolving requirements of fabric buyers across domestic and international markets.
              </p>
              <p className="section-sub" style={{ marginTop: '1rem' }}>
                We specialize in the sourcing, manufacturing coordination, processing and supply of suiting, shirting, uniform and specialty fabrics across a wide range of fibre compositions, constructions, colours, weights and finishes.
              </p>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                About Shree Texfab
              </Link>
            </div>
            <div className={styles.introCards} aria-hidden="true">
              {[
                { icon: '🧵', title: 'Manufacturing Network', desc: 'Coordinated weaving, dyeing & processing ecosystem.' },
                { icon: '🌏', title: 'Export Ready', desc: 'Serving domestic & international B2B buyers.' },
                { icon: '🎨', title: 'Custom Development', desc: 'Fabrics built around your specification.' },
                { icon: '✅', title: 'Quality Focus', desc: 'Structured checks across every production stage.' },
              ].map((c) => (
                <div key={c.title} className={styles.introCard}>
                  <div className={styles.introCardIcon}>{c.icon}</div>
                  <div className={styles.introCardTitle}>{c.title}</div>
                  <p className={styles.introCardDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductsGrid showViewAll />
      <WhyUsSection />
      <ProcessSection />
      <ApplicationsSection />
      <CustomDevSection />
      <QualitySection compact />

      {/* Values strip */}
      <section className={styles.valuesStrip}>
        <div className="container">
          <SectionHeader label="Our Values" title="What Guides Everything We Do" center />
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={`${styles.valueCard}${v.fullWidth ? ` ${styles.fullWidth}` : ''}`}>
                <p className={styles.valueTitle}>{v.title}</p>
                <p className={styles.valueDesc}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExportsSection compact />

      <CTABanner
        title="Let&apos;s Build the <span>Right Fabric</span><br />for Your Business."
        subtitle="Whether you are looking for an established fabric quality or developing something new, our team is ready to understand your requirement."
        buttons={[
          { label: 'Send an Enquiry', href: '/contact', variant: 'gold' },
          { label: 'Contact Our Team', href: '/contact', variant: 'outline-white' },
        ]}
      />
    </>
  )
}
