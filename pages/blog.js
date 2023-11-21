import React from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

const blog = () => {
  return (
    <div>
        <div className={styles.margin}>
            <div className={styles.center}>
                <Link href="/blogpost/dodo">
                    <h3 className={styles.heading3}>How to be a dodo?</h3>
                </Link>
            </div>
            <div className={styles.center}>
                <Link href="/blogpost/not-dodo">
                    <h3 className={styles.heading3}>How  not to be a dodo?</h3>
                </Link>
            </div>
            <div className={styles.center}>
                <Link href="/blogpost/dodo">
                    <h3 className={styles.heading3}>How to be a dodo?</h3>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default blog;