"use client"
import React, { useEffect } from 'react'
import styles from './singleLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SingleLink = ({ item }) => {
    const pathName = usePathname();
    return (
        <Link href={item.path} className={` ${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
    )
}

export default SingleLink