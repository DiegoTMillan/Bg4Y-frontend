import { useContext } from "react";
import { Fragment } from "react";
import { Card } from "../../Components/Card/Card";
import { useState, useEffect } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import classes from "./Dashboard.module.css";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  // import for select
  const [profileDetails, setProfileDetails] = useState();

  useEffect(() => {
    //getting all classes
    fetch(`http://127.0.0.1:8000/users/62b1ef42ab8614a1c0db096e`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setProfileDetails(data);
      });
  }, []);

  // const {token, setToken} = useContext(AuthContext);
  // if (!token) return <Navigate to="/login" replace/>;
  if (!profileDetails) {
    return (
      <div className={classes.spinner}>
        <Spinner />
      </div>
    );
  }
  let isAdmin = true;
  return (
    <Fragment>
      {/* <Card key={profileDetails.name} name={detail.first_name} />; */}
      <div className={classes.container}>
        <div className={classes.card1}>
          <div className={classes.icons}>
            <div className={classes.logo}>
              <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
              <h1>Bg4U</h1>
            </div>
            {isAdmin && (
              <div
                className={` ${classes.modLogo}`}
                onClick={(event) => (window.location.href = "/users")}
              >
                <i className={`${classes.iconTools} fa-solid fa-toolbox`}></i>
                <h1>ADMIN</h1>
              </div>
            )}
          </div>
          <div className={classes.profile}>
            <div className={classes.photo}>
              <img
                alt="sorry, something is broken"
                className={classes.img}
                src={profileDetails.data.photo}
              ></img>
            </div>
            <div className={classes.titleName}>
              <h2>
                {profileDetails.data.first_name} {profileDetails.data.last_name}
              </h2>
            </div>
            <div className={classes.columns}>
              <div className={classes.column1}>
                <div className={classes.email}>
                  <i className={"fa-solid fa-envelope"}></i>
                  <p>{profileDetails.data.email}</p>
                </div>
                <div className={classes.phone}>
                  <i className={"fa-solid fa-phone"}></i>
                  <p>{profileDetails.data.phone}</p>
                </div>
              </div>
              <div className={classes.column2}>
                <div className={classes.city}>
                  <i className={"fa-solid fa-city"}></i>{" "}
                  <p>{profileDetails.data.city}</p>
                </div>
                <div className={classes.district}>
                  <i className={"fa-solid fa-earth-oceania"}></i>
                  <p>{profileDetails.data.district}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.games}>
            <i className="fa-solid fa-dice-six"></i>
            <p>{profileDetails.data.game_name.join("/ ")}</p>
          </div>
          <div className={classes.buttons}>
            <div className={classes.link}>
              <Link className={classes.linkText} to={"/update-profile"}>
                Update profile
              </Link>
            </div>
            <div className={classes.link}>
              <Link className={classes.linkText} to={"/update-profile"}>
                Look for friends
              </Link>
            </div>
            <div className={classes.link}>
              <Link className={classes.linkText} to={"/update-profile"}>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={()=>setToken(undefined)}>Log out</button> */}
    </Fragment>
  );
};
