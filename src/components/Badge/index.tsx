import styles from './Badge.module.css'

interface BadgeProps {
  content: string
}

export function Badge({ content }: BadgeProps) {
  return (
    <div className={styles.badge}>
      {content}
    </div>
  )
}