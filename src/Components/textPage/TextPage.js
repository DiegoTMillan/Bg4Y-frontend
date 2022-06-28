//import components, tools, and css
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./TextPage.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { useContext, useState } from "react";

export const TextPage = (props) => {
    return (
        <Fragment>
            <div className={classes.container}>
                <h2>{props.addTitle}</h2>
                <img src={props.url} ></img>
                <p>{props.author}|{props.date}</p>
                <h1>{props.mainTitle}</h1>
                <h3>{props.subTitle}</h3>
                <p className={classes.bigText}>{props.text}</p>
            </div>
        </Fragment>
    )
}