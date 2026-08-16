import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { exportServices, exportMarkets, exportBuyerProcess } from '@/data/values'
import styles from './ExportsSection.module.css'

interface Props {
  compact?: boolean
}

export default function ExportsSection({ compact }: Props) {
  return (
    <section className={styles.section}>
      <div className="container">
        {!compact && (
          <SectionHeader
            label="Global Textile Sourcing"
            title="From India to the World"
            subtitle="India is one of the world&apos;s leading textile manufacturing ecosystems. Shree Texfab combines access to this ecosystem with customer-focused sourcing and production coordination to serve international buyers."
          />
        )}
        <div className={styles.grid}>
          <div className={styles.services}>
            {!compact && <SectionHeader label="Export Services" title="What We Offer" />}
            <div className={styles.serviceGrid}>
              {exportServices.map((s) => (
                <div key={s.title} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>{s.icon}</span>
                  <div>
                    <p className={styles.serviceTitle}>{s.title}</p>
                    <p className={styles.serviceDesc}>{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.worldPanel}>
            <span className={styles.globe} aria-hidden="true">🌐</span>
            <h3>Export-Ready Textile Partner</h3>
            <p>We support international customers with product development, production coordination, quality inspection, documentation and shipment coordination — from enquiry to delivery.</p>

            <div className={styles.markets}>
              {exportMarkets.map((m) => (
                <span key={m} className="tag-gold-border">{m}</span>
              ))}
            </div>

            <p className={styles.processLabel}>Export Buyer Process</p>
            <div className={styles.process}>
              {exportBuyerProcess.map((step, i) => (
                <span key={step} className={styles.processWrap}>
                  <span className={styles.processStep}>{step}</span>
                  {i < exportBuyerProcess.length - 1 && <span className={styles.processArrow}>›</span>}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn btn-gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
              Become a Buyer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
