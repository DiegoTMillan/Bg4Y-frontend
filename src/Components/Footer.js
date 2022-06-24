// import css
import classes from "./styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      {/* container for all elements elements */}
      <div className={classes.container}>
        {/* container for first group of elements */}
        <div className={classes.mainFooter}>
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
              <i className={`${classes.instaIcon} fa-brands fa-instagram`}></i>
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
          <div className={classes.credits}>
            <p>created by</p>
            <i className={`${classes.brush} fa-solid fa-brush`}></i>
            <a className={classes.personalLink} href="https://github.com/DiegoTMillan">
              Diego Tapia Millán
            </a>
          </div>
        </div>
        {/* container for second group of elements. In first breakpoint is dissapeared */}
        <div className={classes.asideFooter}>
          <div className={classes.group1} >
            <a href="/">Home</a>
            <a href="/boardgames">Boardgames</a>
            <a href="/dashboard">Profile</a>
          </div>
          <div className={classes.group2} >
            <a href="/register">Register</a>
            <a href="/login">Login</a>
          </div>
        </div>
        {/* container for last group of items. Only appears with the last breakpoint */}
        <div className={classes.declaration}>
          <h3>
            Boardgames 4 you
          </h3>
          <i class={`${classes.heartIcon} fa-solid fa-heart fa-beat`}/>
          <p>
          This project was born with the aim of uniting all board game lovers around the world.
          </p>
        </div>
      </div>
    </footer>
  );
};
