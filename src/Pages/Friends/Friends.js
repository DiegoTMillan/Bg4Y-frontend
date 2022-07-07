import { useState, useEffect, Fragment, useRef } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import { CardFriend } from "../../Components/CardFriend/CardFriend";
import classes from "./Friends.module.css";
import { useSelector } from "react-redux";
import axios from "axios";

export const Friends = () => {
  // const user = useSelector((state) => state.login.login.data.data.info[0]);
  //   db.users.find({"game_name":{$in:["Maracaibo", "K2"]}}, {"first_name":1, "last_name":1, "phone":1, "city":1, "district":1, "game_name":1, "photo":1, "_id":0})
  const token = useSelector((state) => state.login.login.data.data?.token);
  const [usersDetails, setUsersDetails] = useState();
  const searchInputRef = useRef();
  const [usersCard, setUsersCard] = useState();
  const [searchInput, setSearchInput] = useState();

  console.log(usersDetails)

  const getInfo = async () => {
    await axios
      .get("http://127.0.0.1:8000/users/", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        // setUsersCard(response.data);
        setUsersDetails(response.data);
        setUsersCard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
}
  // console.log(usersDetails.data)

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filter(e.target.value);
  };
  const filter = (text) => {
    let textResult = usersCard.data.filter((item) => {
      if (item.game_name.toString().toLowerCase().includes(text.toLowerCase())) {
        return item;
      }
    });
    setUsersDetails(textResult);
    console.log(usersDetails)
  };
  

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/users/", {
  //     headers: {
  //       'authorization': 'Bearer ' + token,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setUsersDetails(data))
  //     .catch((error) => console.log(error));
  // }, []);

  // function handleChange(e) {
  //   e.preventDefault();

  //   setSearchInput(() =>
  //     searchInputRef.current.value
  //       ? usersDetails.filter((text) =>
  //           text.email.toLowerCase().includes(searchInputRef.current.value)
  //         )
  //       : []
  //   );
  // }

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
      <h1 className={classes.friends}>Check out your friends</h1>
      <form className={classes.formInput}>
        <input
          className={classes.inputControl}
          value={searchInput}
          placeholder="Search by games"
          // type="search"
          onChange={handleChange}
          ref={searchInputRef}
        />
        <button className={classes.inputButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div ref={searchInputRef} className={classes.bigContainer}>
        {usersDetails.data?.map((user, index) => {
          return (
            <div className={classes.container}>
              <CardFriend
               
                key={user.index}
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
