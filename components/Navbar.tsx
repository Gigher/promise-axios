import Link from 'next/link'
import React from 'react'

import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
            <li className={styles.li}><Link href="/locations">Locaitions</Link></li>
            <li className={styles.li}><Link href="/episodes">Episodes</Link></li>
            <li className={styles.li}><Link href="/characters">Characters</Link></li>
            <li className={styles.li}><Link href="/requests">Requests</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar