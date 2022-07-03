import { useState, useEffect, Fragment } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import { Card } from "../../Components/Card/Card";
import classes from "./Users.module.css";

export const Users = () => {
  const [usersDetails, setUsersDetails] = useState();

  useEffect(() => {
    //getting all classes
    fetch(`http://127.0.0.1:8000/users/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setUsersDetails(data);
      });
  }, []);

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
          </div>
        );
      })}
    </Fragment>
  );
};
