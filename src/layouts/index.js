import React from 'react'
import Link from 'gatsby-link'
import styles from "./index.module.css"

import Heading from '../components/heading'
import Nav from '../components/navigation'

export default ({ children }) => 
    <section className={styles.wrap}>
        <Heading />
        <section className={styles.page}>
            <main className={styles.main}>
                { children() }
            </main>
            <Nav />
        </section>
    </section>