import Link from 'next/link'
import styles from './PageHero.module.css'

interface Breadcrumb {
  label: string
  href?: string
}

interface Props {
  label?: string
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageHero({ label, title, subtitle, breadcrumbs }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className="container">
        {breadcrumbs && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i}>
                <span className={styles.sep}>/</span>
                {b.href ? <Link href={b.href}>{b.label}</Link> : <span>{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {label && <span className="section-label">{label}</span>}
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className={styles.sub}>{subtitle}</p>}
      </div>
    </section>
  )
}
