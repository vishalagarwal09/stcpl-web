import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { customSpecItems } from '@/data/values'
import styles from './CustomDevSection.module.css'

export default function CustomDevSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <SectionHeader
              label="Custom Fabric Development"
              title="Have a Fabric Requirement?"
              subtitle="Tell us your required composition, construction, GSM, width, colour, finish and end application. Our team will work with you to develop a suitable fabric solution through our textile manufacturing network."
              light
            />
            <Link href="/contact" className="btn btn-gold">Start a Development</Link>
          </div>
          <div>
            <p className={styles.specLabel}>You can provide:</p>
            <div className={styles.specGrid}>
              {customSpecItems.map((item) => (
                <div key={item.label} className={styles.specItem}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
