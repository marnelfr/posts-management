import classes from "../style.module.css";

const Post = ({post, onUpdatePost}) => {
  const handleUpdate = event => {
    event.preventDefault()
    onUpdatePost(post)
  }
  return (
    <li onClick={handleUpdate} className={classes.post}>
      <p className={classes.author}>{post.author}</p>
      <p className={classes.text}>{post.body}</p>
    </li>
  )
}

export default Post;