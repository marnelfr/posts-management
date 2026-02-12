
import classes from './components/style.module.css'
import Header from "./components/header/Header";
import NewPost from "./components/post/NewPost.jsx";
import Card from "./components/Message/Card.jsx";
import Post from "./components/post/Post.jsx";
import {useState} from "react";

function App() {
  const [isNewPostModalOpen, setNewPostFormOpen] = useState(false)
  let isLoadedAndHavePost = true
  let isLoadedAndDontHavePost = false
  let isFetching = false

  const handleShowNewPostForm = () => {
    setNewPostFormOpen(!isNewPostModalOpen)
  }

  return (
    <>
      <Header onNewPostClick={handleShowNewPostForm} />
      <main>
        {isNewPostModalOpen && <NewPost onCancle={handleShowNewPostForm} />}
        {isLoadedAndHavePost && (
          <ul className={classes.posts}>
            <Post author={'Author name'} body="The post content body" />
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
