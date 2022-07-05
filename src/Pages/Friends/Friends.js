import { useState, useEffect, Fragment } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import { CardFriend } from "../../Components/CardFriend/CardFriend";
import classes from "./Friends.module.css";

export const Friends = () => {
  // const user = useSelector((state) => state.login.login.data.data.info[0]);
//   db.users.find({"game_name":{$in:["Maracaibo", "K2"]}}, {"first_name":1, "last_name":1, "phone":1, "city":1, "district":1, "game_name":1, "photo":1, "_id":0})
  const [usersDetails, setUsersDetails] = useState();

  useEffect(() => {
    //getting all users
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
      <h1 className={classes.friends}>Contact Friends</h1>
      <div className={classes.bigContainer}>
      {usersDetails.data.map((user, index) => {
        return (
          <div className={classes.container}>
            <CardFriend
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
      </div>
    </Fragment>
  );
};