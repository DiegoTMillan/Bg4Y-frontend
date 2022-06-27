import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { News } from "../../Components/news/News";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { useContext, useState } from "react";

export const Home = () => {
  return (
    <Fragment>
      <div className={classes.center}>
        <News
          url="https://images.pexels.com/photos/8111367/pexels-photo-8111367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          text="All the latest news about Essen 2022"
          author="Diego Tapia"
          date="27/06/22"
        />
        <News
          url="https://images.pexels.com/photos/8111328/pexels-photo-8111328.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8111328.jpg&fm=jpg"
          text="Abstract games, are they here to stay?"
          author="Diego Tapia"
          date="25/06/22"
        />
        <News
          url="https://ksr-ugc.imgix.net/assets/024/933/912/046573ee55d8eeaae3c33f9660149d28_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1556465339&auto=format&frame=1&q=92&s=9b6bb3518eeb1b8d7f9b58b89a967646"
          text="On Mars, a deep review about Vital Lacerda's last game"
          author="Diego Tapia"
          date="20/06/22"
        />
      </div>
    </Fragment>
  );
};
