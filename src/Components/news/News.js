//import components, tools, and css
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./News.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { useContext, useState } from "react";

export const News = (props) => {
    return (
        <Fragment>
            <div className={classes.container} >
                <div>
                <img src={props.url}></img>
                <Link className={classes.link} to="/new1">{props.text}</Link>
                <p>{props.author} | {props.date}</p>
                </div>
            </div>
        </Fragment>
    )
}