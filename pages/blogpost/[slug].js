import { useRouter } from 'next/router';
import React, {useState,useEffect} from 'react';
import styles from '../../styles/blogpost.module.css';

const slug= () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  console.log(router.query);
  const {slug} = router.query || {};

  useEffect(() => {
      if (!router.isReady) return;
      console.log("useeffect is running");
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
          return a.json();
      })
      .then((parsed) => {
          setBlogs(parsed)
      })
    }, [router.isReady])

  return (
    <div>
      <div className={styles.title}>
        <h2>{blogs && blogs.heading}</h2>
      </div>
      <hr className={styles.container}></hr>
      <div className={styles.container}>
      <p>
        {blogs && blogs.content}
      </p>
      </div>
    </div>
  )
}

export default slug;