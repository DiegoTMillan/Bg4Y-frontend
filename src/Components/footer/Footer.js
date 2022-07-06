// import css
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



export const Footer = () => {
  const isLogged = useSelector((state) => state.login.login.isLogged);
  return (
    <footer>
      {/* container for all elements elements */}
      <div className={classes.container}>
        {/* container for first group of elements */}
        <div className={classes.mainFooter}>
          <div className={classes.iconSocial}>
            <div className={classes.logo}>
              <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
              <p>Bg4U</p>
            </div>
            <div className={classes.socialMedia}>
              <div
                className={classes.fb}
                onClick={(event) =>
                  (window.location.href = "https://es-es.facebook.com/")
                }
              >
                <i className={`${classes.fbIcon} fa-brands fa-facebook`}></i>
              </div>
              <div
                className={classes.insta}
                onClick={(event) =>
                  (window.location.href = "https://www.instagram.com/")
                }
              >
                <i
                  className={`${classes.instaIcon} fa-brands fa-instagram`}
                ></i>
              </div>
              <div
                className={classes.linkedin}
                onClick={(event) =>
                  (window.location.href = "https://www.linkedin.com/")
                }
              >
                <i className={`${classes.inIcon} fa-brands fa-linkedin-in`}></i>
              </div>
            </div>
          </div>
          <div className={classes.credits}>
            <p>created by</p>
            <i className={`${classes.brush} fa-solid fa-brush`}></i>
            <a
              className={classes.personalLink}
              href="https://github.com/DiegoTMillan"
            >
              Diego Tapia Millán
            </a>
          </div>
        </div>
        {/* container for second group of elements. In first breakpoint is dissapeared */}
        <div className={classes.asideFooter}>
          <div className={classes.group1}>
            <Link to={`/`}>Home</Link>
            <Link to="/boardgames">Boardgames</Link>
          </div>
          <div className={classes.group2}>
            <Link to="/register">Sign Up</Link>
            {(!isLogged && <Link to="/login">Login</Link>)}
            {(isLogged && <Link to="/dashboard">Profile</Link>)}
          </div>
        </div>
        {/* container for last group of items. Only appears with the last breakpoint */}
        <div className={classes.declaration}>
          <h3>Boardgames 4 you</h3>
          <i className={`${classes.heartIcon} fa-solid fa-heart fa-beat`} />
          <p>
            This project was born with the aim of uniting all board game lovers
            around the world.
          </p>
        </div>
      </div>
    </footer>
  );
};
