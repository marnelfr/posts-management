import classes from "./posts.module.css";
import Post from "./Post.jsx";

const Posts = ({data}) => {
  return (
    <ul className={classes.posts}>
      {data.map(post => <Post key={post.id} author={post.author} body={post.body} />)}
    </ul>
  )
}

export default Posts;