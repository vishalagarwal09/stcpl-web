import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import LeaderCard from '@/components/ui/LeaderCard'
import CTABanner from '@/components/ui/CTABanner'
import SectionHeader from '@/components/ui/SectionHeader'
import { team } from '@/data/team'
import { values } from '@/data/values'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About Shree Texfab Creations | Indian Textile Company',
  description:
    'Learn about Shree Texfab Creations — an Indian textile company combining textile expertise, sourcing capabilities and coordinated manufacturing for B2B fabric buyers.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Rooted in Textiles.<br /><span>Built for the Future.</span>"
        subtitle="An Indian textile company focused on supplying dependable fabric solutions to customers across domestic and international markets."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Story */}
      <section className={styles.story}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Textile Experience. Customer Focus. Modern Business.</h2>
              <p className="section-sub" style={{ marginBottom: '1rem' }}>
                Shree Texfab Creations Private Limited is an Indian textile company focused on supplying dependable fabric solutions to customers across domestic and international markets.
              </p>
              <p className="section-sub" style={{ marginBottom: '1rem' }}>
                Our business combines textile experience, market understanding, sourcing capabilities and coordinated manufacturing to serve a diverse range of fabric requirements — from everyday commercial fabrics to customized institutional and premium textile developments.
              </p>
              <p className="section-sub" style={{ marginBottom: '1rem' }}>
                Shree Texfab&apos;s journey has been shaped by extensive experience in the Indian textile industry and a practical understanding of what fabric buyers actually need — consistency, quality, competitive value and dependable supply.
              </p>
              <p className="section-sub">
                With the next generation bringing professional financial, technical and marketing capabilities into the business, the company is focused on building a modern textile organization capable of serving both domestic and international customers.
              </p>
            </div>
            <div className={styles.storyHighlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightNum}>40+</span>
                <span className={styles.highlightLabel}>Years Combined Textile Experience</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNum}>6+</span>
                <span className={styles.highlightLabel}>Fabric Product Categories</span>
              </div>
              <div className={styles.highlight} style={{ gridColumn: '1 / -1' }}>
                <span className={styles.highlightNum}>B2B</span>
                <span className={styles.highlightLabel}>Domestic & International Supply</span>
              </div>
              <div className={styles.missionBox}>
                <p className={styles.missionLabel}>Our Mission</p>
                <p className={styles.missionText}>
                  To deliver dependable fabric solutions by combining textile expertise, efficient sourcing, coordinated manufacturing, rigorous quality focus and responsive customer service.
                </p>
              </div>
              <div className={styles.missionBox}>
                <p className={styles.missionLabel}>Our Vision</p>
                <p className={styles.missionText}>
                  To build a trusted Indian textile enterprise known for quality, reliability, innovation and long-term customer partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <SectionHeader label="Company Values" title="What Guides Everything We Do" center />
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

      {/* Leadership */}
      <section className={styles.leadership}>
        <div className="container">
          <SectionHeader label="Leadership" title="The Team Behind Shree Texfab" center />
          <div className={styles.leaderGrid}>
            {team.map((m) => (
              <LeaderCard key={m.name} initials={m.initials} name={m.name} role={m.role} description={m.description} />
            ))}
          </div>
          <p className={styles.leaderNote}>
            * Exact years of experience to be confirmed by management before publishing.
          </p>
        </div>
      </section>

      <CTABanner
        title="Let&apos;s Build <span>Long-Term</span> Fabric Partnerships."
        subtitle="We believe in building relationships beyond individual transactions. Tell us your requirement."
        buttons={[
          { label: 'Send an Enquiry', href: '/contact', variant: 'gold' },
          { label: 'Our Products', href: '/products', variant: 'outline-white' },
        ]}
      />
    </>
  )
}
