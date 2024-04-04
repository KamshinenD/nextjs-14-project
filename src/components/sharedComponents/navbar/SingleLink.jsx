import React from 'react'
import styles from './singleLink.module.css'
import Link from 'next/link'

const SingleLink = ({ item }) => {
    return (
        <div className={styles.container}>
            <Link href={item.path}>{item.title}</Link>
        </div>
    )
}

export default SingleLink