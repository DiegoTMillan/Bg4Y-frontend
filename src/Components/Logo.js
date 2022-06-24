import classes from "./styles/Logo.module.css";

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
      <p>Bg4U</p>
    </div>
  );
};
