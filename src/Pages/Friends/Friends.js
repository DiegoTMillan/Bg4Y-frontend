import { useState, useEffect, Fragment } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import { CardFriend } from "../../Components/CardFriend/CardFriend";
import classes from "./Friends.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

export const Friends = () => {
  const [usersDetails, setUsersDetails] = useState();
  const [usersCard, setUsersCard] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const token = useSelector((state) => state.login.login.data.data.token);

  const getInfo = async () => {
    await axios
      .get("http://127.0.0.1:8000/users/", {
        headers: {
          "authorization": "Bearer " + token,
        },
      })
      .then((response) => {
        setUsersDetails(response.data.data);
        setUsersCard(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filter(e.target.value);
  };
  const filter = (text) => {
    let textResult = usersCard.filter((item) => {
      if (
        item.game_name.toString().toLowerCase().includes(text.toLowerCase())
        || item.city.toString().toLowerCase().includes(text.toLowerCase())
      ) {
        return item;
      }
    });
    setUsersDetails(textResult);
  };

  useEffect(() => {
    getInfo();
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
      <h1 className={classes.friends}>Find new friends and enjoy!</h1>
      <div className={classes.formInput}>
        <input
          className={classes.inputControl}
          value={searchInput}
          placeholder="Search by boardgame or city"
          onChange={handleChange}
        />
        <button className={classes.inputButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className={classes.bigContainer}>
        {usersDetails.map((user, index) => {
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
