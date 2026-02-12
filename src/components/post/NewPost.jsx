import Modal from "../Modal/Modal.jsx";
import classes from './newpost.module.css'
import {useState} from "react";

const NewPost = ({post, onCancel, onNewPostFormSubmit}) => {
  const [body, setBody] = useState(post?.body ?? '')
  const [author, setAuthor] = useState(post?.author ?? '')

  const handleBody = event => {
    setBody(event.target.value)
  }

  const handleAuthor = event => {
    setAuthor(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onNewPostFormSubmit({...post, author, body})
    onCancel()
  }

  return (
    <Modal onClose={onCancel}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" onChange={handleBody} value={body} required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" value={author} onChange={handleAuthor} required/>
        </p>
        <p className={classes.actions}>
          <button onClick={onCancel} type="button">
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  )
}

export default NewPost;