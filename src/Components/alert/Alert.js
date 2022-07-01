import { Fragment } from "react";
import classes from "./Alert.module.css";

export const Alert = (props) => {
  return (
    <Fragment>
      <div className={`${classes.alert} ${classes[props.type]}`}>
        <input type="checkbox" id="alert1"/>
        <label className={classes.close} title="close" htmlFor="alert1">
            <strong>&times;</strong>
        </label>
        <p className={classes.inner}>{props.message}</p>
      </div>
    </Fragment>
  );
};
