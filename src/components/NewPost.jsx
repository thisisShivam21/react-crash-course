import React, { useState } from 'react'

import styles from './NewPost.module.css'

export default function NewPost() {
    const [enteredBody, setEnteredBody] = useState('')

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value)
    }

  return (
    <form className={styles.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" rows={3} required onChange={changeBodyHandler} />
        </p>
        <p>{enteredBody}</p>
        <p>
            <label htmlFor="name">Your name</label>
            <input type='text' id="name" required/>
        </p>
    </form>
  )
}
