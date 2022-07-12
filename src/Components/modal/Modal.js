import classes from "./Modal.module.css"
import { Link } from "react-router-dom"

export const Modal = (props) =>{

    return(
        <div className={`${classes.modal}`}>
            <div className={classes.modalContent}>
                <div className={classes.modalBody}>
                    {props.text}
                </div>
                <div className={classes.modalFooter}>
                    <div className={classes.linkButton}>
                        <Link to={props.route}>{props.link}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}