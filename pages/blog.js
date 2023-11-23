import React, { useState, useEffect } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

const blog = (props) => {

    const [blogs, setBlogs] = useState(props.data);
    
    return (
        <div>
            {blogs.map((blogitem, index) => {
                blogitem = JSON.parse(blogitem);
                return <div key={blogitem.slug || index} className={styles.margin}>
                    <div className={styles.center}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                        <h3 className={styles.heading2}>{blogitem.heading}</h3></Link></div>
                    <div><p className={styles.heading3}>{blogitem.content.substr(0,114)}</p></div>
                </div>
            })}
        </div>
    )
}

export default blog;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/blog')
    const data = await res.json()
    return { props: { data } }
  }