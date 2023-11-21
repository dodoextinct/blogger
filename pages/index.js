import Head from 'next/head';
import styles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Blogger Dodo!!
        </title>
      </Head>
      <div className={styles.center}>
        <h1 className={styles.heading}>Welcome to Blogger Dodo!!</h1>
        <p className={styles.text}> where dodo flies</p>
      </div>
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
    </div>
  )
}
