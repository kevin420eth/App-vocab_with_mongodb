import React from 'react'
import styles from './styles.module.css'
import { ImStatsBars } from 'react-icons/im'

export default function page() {
  return (
    <main className={styles.main_section}>
      <nav className={styles.side_navbar}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <a href="/dashboard/myvocab">My Vocabulary</a>
          </li>
          <li className={styles.menu_item}>
            <a href="/dashboard/myvocab">Review</a>
          </li>
          <li className={styles.menu_item}>
            <a href="/dashboard/myvocab">
              <ImStatsBars />
              Stat
            </a>
          </li>
          <li className={styles.menu_item}>
            <a href="/dashboard/myvocab">Payment</a>
          </li>
        </ul>
      </nav>
    </main>

  )
}
