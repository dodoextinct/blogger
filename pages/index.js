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
      <div>
        <nav className={styles.mainnav}>
          <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/about"><li>About</li></Link>
          </ul>
        </nav>
      </div>
      <div className={styles.center}>
        <h1 className={styles.heading}>Welcome to Blogger Dodo!!</h1>
        <p className={styles.text}> Where dodo flies!!</p>
      </div>
      <div className={styles.center} >
        <h2 className={styles.heading2}>Popular Blogs!!</h2>
            <h3 className={styles.heading3}>How to be a dodo?</h3>
            <h3 className={styles.heading3}>How  not to be a dodo?</h3>
            <h3 className={styles.heading3}>How to be a dodo?</h3>
      </div>
    </div>
  )
}
