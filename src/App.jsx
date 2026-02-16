import Header from "./components/header/Header";
import NewPost from "./components/post/NewPost.jsx";
import Posts from "./components/post/Posts.jsx";
import Card from "./components/Message/Card.jsx";
import {useEffect, useReducer, useState} from "react";
import {PostReducer} from "./utils/reducer/PostReducer.jsx";

function App() {
  const [isNewPostModalOpen, setNewPostFormOpen] = useState(false)
  const [posts, dispatch] = useReducer(PostReducer, [])
  const [isFetching, setIsFetching] = useState(true)
  const [postForUpdate, setPostForUpdate] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isFetching) {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts')
          if (!response.ok) {
            throw new Error('Could not load posts data')
          }
          const payload = await response.json()
          dispatch({type: 'load', payload})
          setError(null)
        } catch(e) {
          setError(e.message)
        } finally {
          setIsFetching(false)
        }
      }
      fetchData()
    }
  }, [isFetching])

  const handleShowNewPostForm = () => {
    setPostForUpdate(null)
    setNewPostFormOpen(!isNewPostModalOpen)
  }

  const handleSubmitNewPost = (post) => {
    if(post.id > 0) {
      dispatch({type: 'update', payload: post})
    } else {
      dispatch({type: 'add', payload: post})
    }
  }

  const handleUpdatePost = (post) => {
    setPostForUpdate(post)
    setNewPostFormOpen(true)
  }

  const handleDeletePost = postId => {
    if(window.confirm('Do you really want to delete the post?')) {
      dispatch({type: 'delete', payload: postId})
    }
  }

  return (
    <>
      <Header onNewPostClick={handleShowNewPostForm} />
      <main>
        {isNewPostModalOpen && <NewPost
          post={postForUpdate}
          onNewPostFormSubmit={handleSubmitNewPost}
          onCancel={handleShowNewPostForm}
        />}
        {(!isFetching && posts.length > 0) && <Posts
          data={posts}
          onDeletePost={handleDeletePost}
          onUpdatePost={handleUpdatePost}
        />}
        {(!isFetching && posts.length === 0 && error !== null) && (
          <Card>
            <h2>{error}</h2>
            <p>Please fresh the page or try to add new post!</p>
          </Card>
        )}
        {(!isFetching && posts.length === 0 && error === null) && (
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