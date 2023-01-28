import rocket from '../../assets/rocket.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Logo" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  )
}