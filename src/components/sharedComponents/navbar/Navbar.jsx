import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import styles from './navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div className="">
                <NavLinks />
            </div>
        </div>
    )
}

export default Navbar