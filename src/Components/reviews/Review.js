//import components, tools, and css
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Review.module.css";

export const Review = (props) => {
    return (
        <Fragment>
            <div className={classes.container} >
                <div>
                <img alt="not found, sorry" className={classes.revImg} src={props.url}></img>
                <Link className={classes.link} to={props.link}>{props.text}</Link>
                <p>{props.author} | {props.date}</p>
                </div>
            </div>
        </Fragment>
    )
}