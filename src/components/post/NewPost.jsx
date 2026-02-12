import Modal from "../Modal/Modal.jsx";
import classes from './newpost.module.css'

const NewPost = ({onCancle}) => {
  return (
    <Modal onClose={onCancle}>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required/>
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