// import css
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const isLogged = useSelector((state) => state.login.login.isLogged);
  const handleLogOut = () => {
    dispatch(loginActions.logOut());
  };
  return (
    <header>
      <div className={classes.container}>
        {/* logo */}
        <div className={classes.logos1}>
          <i className={`${classes.logo} fa-solid fa-dice`}></i>
          <Link to="/">Bg4U</Link>
        </div>
        {/* Navigation menu */}
        <div className={classes.menuNav}>
          <Link to="/boardgames">Boardgames</Link>
          <Link to="/new1">Last news</Link>
          <Link to="/review1">Last review</Link>
        </div>
        {isLogged && user.status === "succeeded" && (
          <div className={classes.rightIcons}>
            <div className={classes.logos2}>
              <i className={`${classes.logo} fa-solid fa-address-card`}></i>
              <Link to="/dashboard">Profile</Link>
            </div>
            <div className={classes.logos2}>
              <i
                className={`${classes.logo} fa-solid fa-right-from-bracket`}
              ></i>
              <Link onClick={handleLogOut} to={"/login"}>
                Logout
              </Link>
            </div>
          </div>
        )}
        {!isLogged ||
          (isLogged && user.status === "failed" && (
              <div
                // login button
                className={classes.loginNav}
                onClick={(event) => (window.location.href = "/login")}
              >
                <i
                  className={`${classes.loginIcon} fa-solid fa-right-to-bracket`}
                ></i>
              </div>
          ))}
        {!isLogged && user.status === undefined && (
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
        <Link to="/boardgames">Boardgames</Link>
        <Link to="/new1">Last news</Link>
        <Link to="/review1">Last review</Link>
      </div>
    </header>
  );
};
