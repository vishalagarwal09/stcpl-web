import styles from './LeaderCard.module.css'

interface Props {
  initials: string
  name: string
  role: string
  description: string
}

export default function LeaderCard({ initials, name, role, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>{initials}</div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.desc}>{description}</p>
    </div>
  )
}
