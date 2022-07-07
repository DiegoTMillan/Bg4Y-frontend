//import components, tools, and css
import { Fragment } from "react";
import classes from "./TextPage.module.css";

export const TextPage = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <img alt="not found, sorry" src={props.url}></img>
        <div className={classes.textContainer}>
          <p>
            {props.author}|{props.date}
          </p>
          <h1 className={classes.bigAbstract}>{props.mainTitle}</h1>
          <h3  className={classes.resume}>{props.subTitle}</h3>
          <p className={classes.bigText}>{props.text}</p>
        </div>
      </div>
    </Fragment>
  );
};
