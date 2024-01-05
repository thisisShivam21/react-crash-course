import React from 'react'
import styles from './Post.module.css'

export default function Post(props) {

  return (
    <li className={styles.post}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.desc}>{props.body}</p>
    </li>
  )
}

// export default Post;