//import components, tools, and css
import { Fragment } from "react";
import classes from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <Fragment>
      <div className={classes.spinner}></div>
    </Fragment>
  );
};
