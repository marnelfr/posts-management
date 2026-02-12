import classes from './components/style.module.css'

function App() {
  let isOpen = false
  let isLoadedAndHavePost = true
  let isLoadedAndDontHavePost = false
  let isFetching = false

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          🟧
          React Poster
        </h1>
        <p>
          <button className={classes.button}>
            🟧
            New Post
          </button>
        </p>
      </header>
      <main>
        {isOpen && (
          <div>
            <div className={classes.backdrop} />
            <dialog open className={classes.modal}>
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
                  <button type="button">
                    Cancel
                  </button>
                  <button>Submit</button>
                </p>
              </form>
            </dialog>
          </div>
        )}
        {isLoadedAndHavePost && (
          <ul className={classes.posts}>
            <li className={classes.post}>
              <p className={classes.author}>Author name</p>
              <p className={classes.text}>This is the body of the post.</p>
            </li>
          </ul>
        )}
        {isLoadedAndDontHavePost && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        )}
        {isFetching && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <p>Loading posts...</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
