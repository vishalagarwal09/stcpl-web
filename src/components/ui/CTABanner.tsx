import Link from 'next/link'
import styles from './CTABanner.module.css'

interface CTAButton {
  label: string
  href: string
  variant: 'gold' | 'outline-white'
}

interface Props {
  title: string
  subtitle?: string
  buttons: CTAButton[]
}

export default function CTABanner({ title, subtitle, buttons }: Props) {
  return (
    <section className={styles.banner}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className="container">
        <div className={styles.content}>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {subtitle && <p className={styles.sub}>{subtitle}</p>}
          <div className={styles.btns}>
            {buttons.map((btn) => (
              <Link key={btn.href + btn.label} href={btn.href} className={`btn btn-${btn.variant}`}>
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
