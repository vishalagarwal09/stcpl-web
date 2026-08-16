import Link from 'next/link'
import styles from './HeroSection.module.css'

const stats = [
  { num: '40+', label: 'Years Combined Experience' },
  { num: '6+', label: 'Fabric Categories' },
  { num: 'B2B', label: 'Domestic & Export' },
  { num: 'Custom', label: 'Fabric Development' },
]

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.accentCircle} aria-hidden="true" />

      <div className="container">
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Indian Textile Expertise &nbsp;·&nbsp; Reliable Fabric Solutions</span>
          </div>

          <h1 className={styles.heading}>
            Fabrics That<br /><span>Perform.</span><br />Partnerships That Last.
          </h1>

          <p className={styles.sub}>
            Indian textile expertise delivering dependable fabric solutions for suiting, shirting, uniforms and specialty applications — domestic and international.
          </p>

          <div className={styles.btns}>
            <Link href="/products" className="btn btn-gold">Explore Products</Link>
            <Link href="/contact" className="btn btn-outline-white">Send an Enquiry</Link>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
