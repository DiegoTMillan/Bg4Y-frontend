// import css
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  let isLogged = false;
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
          <Link to={`/`}>Home</Link>
          <Link to="/boardgames">Boardgames</Link>
          <Link to="/dashboard">Profile</Link>
        </div>
        {isLogged && (
          <div
            // login button
            className={classes.loginNav}
            onClick={(event) => (window.location.href = "/login")}
          >
            <i
              className={`${classes.loginIcon} fa-solid fa-right-from-bracket`}
            ></i>
          </div>
        )}
        {!isLogged && (
          <div
            // login button
            className={classes.loginNav}
            onClick={(event) => (window.location.href = "/login")}
          >
            <i
              className={`${classes.loginIcon} fa-solid fa-right-to-bracket`}
            ></i>
          </div>
        )}
        {/* <div
          // login button
          className={classes.loginNav}
          onClick={(event) => (window.location.href = "/login")}
        >
          <i
            className={`${classes.loginIcon} fa-solid fa-right-to-bracket`}
          ></i>
        </div> */}
      </div>
      {/* this navigation menu only appears under 565px */}
      <div className={classes.optionalNav}>
        <Link to={`/`}>Home</Link>
        <Link to="/boardgames">Boardgames</Link>
        <Link to="/dashboard">Profile</Link>
      </div>
    </header>
  );
};
