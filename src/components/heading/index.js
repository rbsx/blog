import React  from 'react'
import Link   from 'gatsby-link'
import styles from './heading.module.css'

export default () => 
    <header className={styles.header}>
        <Link to='/' className={styles.brand}>
            RBSX
        </Link>
    </header>