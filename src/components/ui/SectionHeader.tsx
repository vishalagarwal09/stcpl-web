import styles from './SectionHeader.module.css'

interface Props {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, center, light }: Props) {
  return (
    <div className={`section-header${center ? ' center' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2
        className={`section-title${light ? ` ${styles.light}` : ''}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`section-sub${light ? ` ${styles.subLight}` : ''}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  )
}
