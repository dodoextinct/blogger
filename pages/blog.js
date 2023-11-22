import React, { useState, useEffect } from 'react'
import styles from '../styles/blog.module.css'
import Link from 'next/link'

const blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        console.log("useeffect is running");
        fetch('http://localhost:3000/api/blog').then((a) => {
            return a.json();
        })
        .then((parsed) => {
            console.log(parsed)
            setBlogs(parsed)
        })
        }, [])
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