// import css
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

export const Header = () => {
  const user = useSelector((state) => state.login.login.data);
  const isLogged = useSelector((state) => state.login.login.isLogged);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(loginActions.logOut());
  };
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
          <Link to="/new1">Last news</Link>
          <Link to="/review1">Last review</Link>
        </div>
        {isLogged && (
          <div
            // login button
            className={classes.loginOut}
            // onClick={handleLogOut}
            // to={"/login"}
          >
            <i
              className={`${classes.loginIconOut} fa-solid fa-address-card`}
            ></i>
            <Link to="/dashboard">Profile</Link>
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
