import React from 'react'
import styles from './Post.module.css'

export default function Post({ author, body }) {

  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.desc}>{body}</p>
    </li>
  )
}

// export default Post;