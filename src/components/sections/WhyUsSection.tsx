import SectionHeader from '@/components/ui/SectionHeader'
import IconCard from '@/components/ui/IconCard'
import { whyUsPoints } from '@/data/values'
import styles from './WhyUsSection.module.css'

export default function WhyUsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Why Partner With Us"
          title="One Partner. Multiple Fabric Solutions."
          subtitle="Access multiple fabric categories through a single coordinated textile partner with deep industry expertise."
          center
          light
        />
        <div className={styles.grid}>
          {whyUsPoints.map((p) => (
            <IconCard key={p.title} icon={p.icon} title={p.title} description={p.description} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  )
}
