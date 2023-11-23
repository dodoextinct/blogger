import React, {useState,useEffect} from 'react';
import styles from '../../styles/blogpost.module.css';

const slug= (props) => {
  const [blogs, setBlogs] = useState(props.data);

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

export async function getServerSideProps(context) {

  const slug = context.query.slug;
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const data = await res.json();
 
  return { props: { data } }
}