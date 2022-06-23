import classes from "./styles/Nav.module.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <div className={classes.logoNav}>
        <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
        <p>Bg4U</p>
      </div>
      <div className={classes.menuNav}>
        <a href="/">Home</a>
        <a href="/boardgames">Boardgames</a>
        <a href="/dashboard">Profile</a>
      </div>
      <div
        className={classes.loginNav}
        onClick={(event) => (window.location.href = "/login")}
      >
        <i className={`${classes.loginIcon} fa-solid fa-right-to-bracket`}></i>
      </div>
    </header>
  );
};
