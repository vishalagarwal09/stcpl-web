import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { qualitySteps, qualityParams } from '@/data/values'
import styles from './QualitySection.module.css'

interface Props {
  compact?: boolean
}

export default function QualitySection({ compact }: Props) {
  const steps = compact ? qualitySteps.slice(0, 4) : qualitySteps
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Quality Assurance"
          title="Quality is Built Into Every Metre."
          subtitle="Our quality approach focuses on consistency in construction, colour, weight, width, finish and overall fabric performance — from first specification to final dispatch."
          center
        />
        <div className={styles.flow} role="list">
          {steps.map((s, i) => (
            <div key={s.num} className={styles.step} role="listitem">
              <span className={styles.num}>{s.num}</span>
              <div className={styles.stepTitle}>{s.title}</div>
              <p className={styles.stepDesc}>{s.description}</p>
              {i < steps.length - 1 && <span className={styles.arrow} aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <div className={styles.params}>
          <p className={styles.paramsLabel}>Quality Parameters Monitored</p>
          <div className={styles.paramsList}>
            {qualityParams.map((p) => (
              <span key={p} className="tag-navy">{p}</span>
            ))}
          </div>
        </div>
        {compact && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/quality" className="btn btn-primary">Our Quality Approach</Link>
          </div>
        )}
      </div>
    </section>
  )
}
