import Modal from "../Modal/Modal.jsx";
import classes from './newpost.module.css'
import {useState} from "react";

const NewPost = ({onCancle, onNewPostFormSubmit}) => {
  const [body, setBody] = useState('')
  const [name, setName] = useState('')

  const handleBody = event => {
    setBody(event.target.value)
  }

  const handleName = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onNewPostFormSubmit(name, body)
    onCancle()
  }

  return (
    <Modal onClose={onCancle}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" onChange={handleBody} value={body} required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" value={name} onChange={handleName} required/>
        </p>
        <p className={classes.actions}>
          <button onClick={onCancle} type="button">
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  )
}

export default NewPost;