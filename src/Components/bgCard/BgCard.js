import { Fragment } from "react";
import classes from "./BgCard.module.css";

export const BgCard = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.card1}>
          <div className={classes.bgCard}>
            <div className={classes.photo}>
              <img alt="" className={classes.img} src={require(`../../assets/${props.photo}.jpeg`)}></img>
            </div>
            <div className={classes.titleName}>
              <h1>
                {props.name}
              </h1>
            </div>
            <div className={classes.columns}>
              <div className={classes.column1}>
                <div className={classes.editorial}>
                  <i className={"fa-solid fa-book-bookmark"}></i>
                  <p>{props.editorial}</p>
                </div>
                <div className={classes.author}>
                  <i className={"fa-solid fa-pen-nib"}></i>
                  <p>{props.author}</p>
                </div>
                <div className={classes.numPlayers}>
                  <i className={"fa-solid fa-people-group"}/>
                  <p>{props.numPlayers}</p>
                </div>
              </div>
              <div className={classes.column2}>
                <div className={classes.duration}>
                  <i className={"fa-solid fa-clock"}></i>
                  <p>{props.duration}</p>
                </div>
                <div className={classes.ageRecommended}>
                  <i className={"fa-solid fa-address-card"}></i>
                  <p>{props.ageRecommended}</p>
                </div>
                <div className={classes.expansions}>
                  <i className={"fa-solid fa-boxes-stacked"}></i>
                  <p>{props.expansions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};