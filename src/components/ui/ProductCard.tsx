import Link from 'next/link'
import styles from './ProductCard.module.css'

interface Props {
  slug: string
  icon: string
  category: string
  title: string
  description: string
  gradient: string
}

export default function ProductCard({ slug, icon, category, title, description, gradient }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrap} style={{ background: gradient }}>
        <div className={styles.imgIcon}>{icon}</div>
        <div className={styles.overlay}>
          <span className={styles.cat}>{category}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.desc}>{description}</p>
        <Link href={`/products/${slug}`} className={styles.link}>
          Enquire About This Fabric &rarr;
        </Link>
      </div>
    </article>
  )
}
