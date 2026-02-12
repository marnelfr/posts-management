import classes from "./header.module.css";

const Header = ({onNewPostClick}) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        🟧
        React Poster
      </h1>
      <p>
        <button onClick={onNewPostClick} className={classes.button}>
          🟧
          New Post
        </button>
      </p>
    </header>
  )
}

export default Header;