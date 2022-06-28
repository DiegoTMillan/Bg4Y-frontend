//import components, tools, and css
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./News.module.css";

export const News = (props) => {
    return (
        <Fragment>
            <div className={classes.container} >
                <div>
                <img alt="not found, sorry" className={classes.newImg} src={props.url}></img>
                <Link className={classes.link} to={props.link}>{props.text}</Link>
                <p>{props.author} | {props.date}</p>
                </div>
            </div>
        </Fragment>
    )
}