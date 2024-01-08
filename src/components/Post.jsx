import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export default function Post({ id, author, body }) {

  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.desc}>{body}</p>
      </Link>
    </li>
  )
}

// export default Post;