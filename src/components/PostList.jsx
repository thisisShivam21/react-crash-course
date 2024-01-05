import React, { useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'

export default function PostList() {
    const [enteredBody, setEnteredBody] = useState('')


    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                <Post author="Shivam" body={enteredBody} />
                <Post author="Harsh" body={enteredBody} />
            </ul>
        </>
    )
}
