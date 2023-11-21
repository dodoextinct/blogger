import { useRouter } from 'next/router';
import React from 'react'

const blogid= () => {
    const router = useRouter();
    console.log(router.query);
    const {blogid} = router.query || {};

  return (
    <div>{blogid}</div>
  )
}

export default blogid;