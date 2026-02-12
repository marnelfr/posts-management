import classes from './components/style.module.css'
import Header from "./components/header/Header";
import NewPost from "./components/post/NewPost.jsx";
import Card from "./components/Message/Card.jsx";
import Post from "./components/post/Post.jsx";
import {useEffect, useReducer, useState} from "react";
import {PostReducer} from "./utils/reducer/PostReducer.jsx";

function App() {
  const [isNewPostModalOpen, setNewPostFormOpen] = useState(false)
  const [posts, dispatch] = useReducer(PostReducer, [])
  const [isFetching, setIsFetching] = useState(true)
  let isLoadedAndHavePost = true
  let isLoadedAndDontHavePost = false

  useEffect(() => {
    if (isFetching) {
      setTimeout(() => {
        if(Math.random() > 0.5) {
          const post = {
            author: 'Nel Gnac',
            body: 'This is a example of post with a fake body content'
          }
          dispatch({type: 'load', payload: [post]})
        } else {
          dispatch({type: 'load', payload: []})
        }
        setIsFetching(false)
      }, 1000)
    }
  }, [isFetching])

  const handleShowNewPostForm = () => {
    setNewPostFormOpen(!isNewPostModalOpen)
  }

  return (
    <>
      <Header onClick={handleShowNewPostForm} />
      <main>
        {isNewPostModalOpen && <NewPost onCancle={handleShowNewPostForm} />}
        {isLoadedAndHavePost && (
          <ul className={classes.posts}>
            {posts.map(post => <Post key={post.id} author={post.author} body={post.body} />)}
          </ul>
        )}
        {isLoadedAndDontHavePost && (
          <Card>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </Card>
        )}
        {isFetching && (<Card><p>Loading posts...</p></Card>)}
      </main>
    </>
  )
}

export default App