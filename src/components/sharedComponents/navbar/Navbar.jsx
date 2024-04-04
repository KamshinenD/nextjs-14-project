import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import styles from './navbar.module.css'

const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className="">
                <NavLinks />
            </div>
        </div>
    )
}

export default Navbar