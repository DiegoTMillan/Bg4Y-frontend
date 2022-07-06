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
          </div>
          <div className={classes.profile}>
            <div className={classes.photo}>
              <img alt="" className={classes.img} src={props.photo}></img>
            </div>
            <div className={classes.titleName}>
              <h2>
                {props.first_name} {props.last_name}
              </h2>
            </div>
            <div className={classes.columns}>
              <div className={classes.column1}>
                <div className={classes.email}>
                  <i className={"fa-solid fa-envelope"}></i>
                  <p>{props.email}</p>
                </div>
                <div className={classes.phone}>
                  <i className={"fa-solid fa-phone"}></i>
                  <p>{props.phone}</p>
                </div>
              </div>
              <div className={classes.column2}>
                <div className={classes.city}>
                  <i className={"fa-solid fa-city"}></i>{" "}
                  <p>{props.city}</p>
                </div>
                <div className={classes.district}>
                  <i className={"fa-solid fa-earth-oceania"}></i>
                  <p>{props.district}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.games}>
            <i className="fa-solid fa-dice-six"></i>
            <p>{props.game_name}</p>
          </div>
          <div className={classes.buttons}>
            <div className={classes.link}>
              <button className={classes.linkText}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
