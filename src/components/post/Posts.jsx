import classes from "./posts.module.css";
import Post from "./Post.jsx";

const Posts = ({data, onUpdatePost}) => {
  return (
    <ul className={classes.posts}>
      {data.map(post => <Post onUpdatePost={onUpdatePost} key={post.id} post={post} />)}
    </ul>
  )
}

export default Posts;