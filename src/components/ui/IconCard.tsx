import styles from './IconCard.module.css'

interface Props {
  icon: string
  title: string
  description: string
  variant?: 'default' | 'dark' | 'bordered'
  center?: boolean
}

export default function IconCard({ icon, title, description, variant = 'default', center }: Props) {
  return (
    <div className={`${styles.card} ${styles[variant]}${center ? ` ${styles.center}` : ''}`}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  )
}
