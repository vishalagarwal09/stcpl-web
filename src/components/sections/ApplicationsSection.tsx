import SectionHeader from '@/components/ui/SectionHeader'
import IconCard from '@/components/ui/IconCard'
import { applications } from '@/data/values'
import styles from './ApplicationsSection.module.css'

export default function ApplicationsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          label="Industries Served"
          title="Fabrics for Every Requirement"
          subtitle="From formal offices to industrial floors — our fabric solutions are built around the end application and the customer&apos;s performance requirements."
          center
        />
        <div className={styles.grid}>
          {applications.map((a) => (
            <IconCard key={a.title} icon={a.icon} title={a.title} description={a.description} center />
          ))}
        </div>
      </div>
    </section>
  )
}
