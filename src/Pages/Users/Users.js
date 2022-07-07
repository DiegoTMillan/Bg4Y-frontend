import { useState, useEffect, Fragment } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import { Card } from "../../Components/Card/Card";
import classes from "./Users.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

export const Users = () => {
  const token = useSelector((state) => state.login.login.data.data.token);
  const [usersDetails, setUsersDetails] = useState();

  // useEffect(() => {
  //   //getting all users
  //   fetch(`http://127.0.0.1:8000/users/`, {
  //     method: "GET",
  //     headers: {
  //       'authorization': "Bearer" + token,
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       return setUsersDetails(data);
  //     });
  // }, []);
  axios
    .get("http://127.0.0.1:8000/users/", {
      headers: {
        'authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      setUsersDetails(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  if (!usersDetails) {
    return (
      <div className={classes.spinner}>
        <Spinner />
      </div>
    );
  }
  return (
    <Fragment>
      <h1 className={classes.titles}>Users</h1>
      <div className={classes.bigContainer}>
        {usersDetails.data.map((user, index) => {
          return (
            <div className={classes.container}>
              <Card
                key={index}
                photo={user.photo}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
                phone={user.phone}
                city={user.city}
                district={user.district}
                game_name={user.game_name.join(", ")}
              />
              {/* <div className={classes.link}>
                <button className={classes.linkText} onClick={() => handleDelete(usersDetails.id)}>
                  Delete
                </button>
              </div> */}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
