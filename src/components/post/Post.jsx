import classes from "./post.module.css";

const Post = ({post, onUpdatePost, onDeletePost}) => {
  const handleUpdate = event => {
    event.preventDefault()
    onUpdatePost(post)
  }

  const handleDelete = event => {
    event.stopPropagation()
    onDeletePost(post.id)
  }

  return (
    <li onClick={handleUpdate} className={classes.post}>
      <span onClick={handleDelete}>Ⓧ</span>
      <p className={classes.author}>{post.author}</p>
      <p className={classes.text}>{post.body}</p>
    </li>
  )
}

export default Post;