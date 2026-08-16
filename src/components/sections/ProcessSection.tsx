import SectionHeader from '@/components/ui/SectionHeader'
import { processSteps } from '@/data/values'
import styles from './ProcessSection.module.css'

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Our Coordinated Textile Manufacturing Ecosystem"
          title="From Yarn to Finished Fabric"
          center
        />
        <div className={styles.flow} role="list">
          {processSteps.map((step, i) => (
            <div key={step.label} className={styles.stepWrap} role="listitem">
              <div className={styles.step}>
                <div className={styles.dot}>{step.icon}</div>
                <span className={styles.label}>{step.label}</span>
              </div>
              {i < processSteps.length - 1 && (
                <span className={styles.arrow} aria-hidden="true">›</span>
              )}
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Our manufacturing and processing ecosystem brings together specialized weaving, dyeing, finishing and processing partners under coordinated quality and production management.
        </p>
      </div>
    </section>
  )
}
