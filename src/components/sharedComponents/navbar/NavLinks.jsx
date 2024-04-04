import Link from 'next/link'
import React from 'react'
import styles from './navlinks.module.css'
import SingleLink from './SingleLink'

const NavLinks = () => {
    const links = [
        {
            title: "HomePage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]
    return (
        <div className={styles.links}>
            {links.map((link, index) => (
                <SingleLink key={index} item={link}/>
            ))}
        </div>
    )
}

export default NavLinks