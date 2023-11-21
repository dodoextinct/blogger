import React from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

const blog = () => {
  return (
    <div className={styles.center} >
        <h2 className={styles.heading2}>Popular Blogs</h2>
        <Link href="/blogpost/dodo">
            <h3 className={styles.heading3}>How to be a dodo?</h3>
        </Link>
        <Link href="/blogpost/not-dodo">
            <h3 className={styles.heading3}>How  not to be a dodo?</h3>
        </Link>
        <Link href="/blogpost/dodo">
            <h3 className={styles.heading3}>How to be a dodo?</h3>
        </Link>
    </div>
  )
}

export default blog;