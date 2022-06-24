// import css
import classes from "./styles/Header.module.css";


export const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        {/* logo */}
        <div className={classes.logoNav}>
          <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
          <p>Bg4U</p>
        </div>
        {/* Navigation menu */}
        <div className={classes.menuNav}>
          <a href="/">Home</a>
          <a href="/boardgames">Boardgames</a>
          <a href="/dashboard">Profile</a>
        </div>
        <div
          // login button
          className={classes.loginNav}
          onClick={(event) => (window.location.href = "/login")}
        >
          <i
            className={`${classes.loginIcon} fa-solid fa-right-to-bracket`}
          ></i>
        </div>
      </div>
      {/* this navigation menu only appears under 565px */}
      <div className={classes.optionalNav}>
        <a href="/">Home</a>
        <a href="/boardgames">Boardgames</a>
        <a href="/dashboard">Profile</a>
      </div>
    </header>
  );
};
