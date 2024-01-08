import { Link, Form, redirect } from 'react-router-dom'
import Modal from '../components/Modal'
import styles from './NewPost.module.css'


export default function NewPost() {
  return (
    <Modal>
      <Form method='post' className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name='body' rows={3} required/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type='text' name='author' id="name" required/>
        </p>
        <p className={styles.actions}>
          <Link type='button' to=".." >Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const postData = Object.fromEntries(formData) // Getting values from the form -> { body: '...', author: '...' }
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-type': 'application/json'
    }
  })

  return redirect('/')

}