import { Spinner } from "../../Components/spinner/Spinner";
import classes from "./Dashboard.module.css";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginActions } from "../../Components/store/loginSlice";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch();
const [isUpdated,setIsUpdated] = useState(false)
  const user = useSelector((state) => state.login.login.data);
  const updated = useSelector((state) => state.login.login.updated);
  console.log(user);
  // console.log(updated);
  const loading = useSelector((state) => state.login.login.loading);
  // console.log(token)
  if (updated) {
    console.log(isUpdated);
    setIsUpdated(updated)
    dispatch(loginActions.resetUpdate());
    console.log(updated);
    console.log(isUpdated);
    setIsUpdated(false)
  }
  useEffect(() => {
    console.log("render()");
    console.log(user.data.info[0].phone);
  }, [user.data,isUpdated]);
  const handleLogOut = () => {
    dispatch(loginActions.logOut());
  };
  return (
    <div className={classes.container}>
      {!user.data && <Navigate to="/login" replace={true} />}
      {loading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      {!loading && user.data && (
        <div className={classes.card1}>
          <div className={classes.icons}>
            <div className={classes.logo}>
              <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
              <h1>Bg4U</h1>
            </div>
            {user.data.info[0].role === "admin" && (
              <div className={` ${classes.modLogo}`}>
                <Link className={classes.linkText1} to={"/users"}>
                  <i className={`${classes.iconTools} fa-solid fa-toolbox`}></i>
                  <h1>ADMIN</h1>
                </Link>
              </div>
            )}
          </div>
          <div className={classes.profile}>
            <div className={classes.photo}>
              <img
                alt="sorry, something is broken"
                src={user.data.info[0].photo}
              ></img>
            </div>
            <div className={classes.titleName}>
              <h1>
                {user.data.info[0].first_name} {user.data.info[0].last_name}
              </h1>
            </div>
            <div className={classes.columns}>
              <div className={classes.column1}>
                <div className={classes.email}>
                  <i className={"fa-solid fa-envelope"}></i>
                  <p>{user.data.info[0].email}</p>
                </div>
                <div className={classes.phone}>
                  <i className={"fa-solid fa-phone"}></i>
                  <p>{user.data.info[0].phone}</p>
                </div>
              </div>
              <div className={classes.column2}>
                <div className={classes.city}>
                  <i className={"fa-solid fa-city"}></i> <p>{user.data.info[0].city}</p>
                </div>
                <div className={classes.district}>
                  <i className={"fa-solid fa-earth-oceania"}></i>
                  <p>{user.data.info[0].district}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.games}>
            <i className="fa-solid fa-dice-six"></i>
            <p>{user.data.info[0].game_name.join("/ ")}</p>
          </div>
          <div className={classes.buttons}>
            <div className={classes.link}>
              <Link className={classes.linkText} to={"/update-profile"}>
                Update profile
              </Link>
            </div>
            <div className={classes.link}>
              <Link className={classes.linkText} to={"/friends"}>
                Look for friends
              </Link>
            </div>
            <div className={classes.link}>
              <Link
                className={classes.linkText}
                onClick={handleLogOut}
                to={"/login"}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
