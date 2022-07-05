import { Fragment } from "react";
import classes from "./Banner.module.css"

export const Banner = () => {
    return(
        <div className={classes.container}>
            <div className={classes.banner}>
                <div className={classes.text1}>
                    <p>I <span><i className={`${classes.heartIcon} fa-solid fa-heart fa-beat`} /></span> Boardgames</p>
                </div>
                {/* <div className={classes.text2}>
                    <p>BOARDGAMES 4 YOU</p>
                </div> */}
            </div>
        </div>
    )
}