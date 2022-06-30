import { Fragment } from "react";
import classes from "./Card.module.css";

export const Card = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.card1}>
          <div className={classes.logo}>
            <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
            <h1>Bg4U</h1>
            <h2>Welcome {props.name}</h2>;
          </div>
        </div>
      </div>
    </Fragment>
  );
};
