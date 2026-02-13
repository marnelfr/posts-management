import classes from "./posts.module.css";
import Post from "./Post.jsx";

const Posts = ({data, onUpdatePost, onDeletePost}) => {
  return (
    <ul className={classes.posts}>
      {data.map(post => <Post onDeletePost={onDeletePost} onUpdatePost={onUpdatePost} key={post.id} post={post} />)}
    </ul>
  )
}

export default Posts;