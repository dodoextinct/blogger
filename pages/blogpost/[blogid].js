import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/blogpost.module.css';

const blogid= () => {
    const router = useRouter();
    console.log(router.query);
    const {blogid} = router.query || {};

  return (
    <div>
      <div className={styles.title}>
        <h2>Let us discuss {blogid}</h2>
      </div>
      <hr className={styles.container}></hr>
      <div className={styles.container}>
      <p>
      The term "dodo" is often used metaphorically, typically referring to someone acting in a foolish or outdated manner. However, if you're referring to the extinct bird, the dodo, being a dodo isn't something one can literally become, as it was a unique species native to Mauritius. The dodo became a symbol for obsolescence and extinction due to its disappearance in the late 17th century, often attributed to human activity.
If you're using the term in a metaphorical sense and want to avoid being seen as a "dodo," it generally means staying informed, adaptable, and open to new ideas, avoiding outdated or ineffective practices.
      </p>
      </div>
    </div>
  )
}

export default blogid;