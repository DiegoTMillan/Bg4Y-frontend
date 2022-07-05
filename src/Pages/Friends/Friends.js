import { useState, useEffect, Fragment } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import { CardFriend } from "../../Components/CardFriend/CardFriend";
import classes from "./Friends.module.css";
import axios from "axios";

export const Friends = () => {
  // const user = useSelector((state) => state.login.login.data.data.info[0]);
  //   db.users.find({"game_name":{$in:["Maracaibo", "K2"]}}, {"first_name":1, "last_name":1, "phone":1, "city":1, "district":1, "game_name":1, "photo":1, "_id":0})
  const [usersDetails, setUsersDetails] = useState();
  // const [usersCard, setUsersCard] = useState();
  const [searchInput, setSearchInput] = useState();

const getInfo = async()=>{
  await axios.get("http://127.0.0.1:8000/users/")
  .then(response=>{
    // setUsersCard(response.data);
    setUsersDetails(response.data);
  }).catch(error => {
    console.log(error)
  })
}
// console.log(usersDetails.data)


  const handleChange=e=>{
    setSearchInput(e.target.value)
    filter(e.target.value)
  }
  const filter=(text)=>{
    let textResult=usersDetails.data.filter((item)=>{
      if(item.email.toString().toLowerCase().includes(text.toLowerCase())){
        console.log(item)
        return item;
      }
    })
    setUsersDetails(textResult);
  }

  useEffect(()=>{
    getInfo();
  }, [])

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
      <div className={classes.formInput}>
        <input
          className={classes.inputControl}
          value={searchInput}
          placeholder="Search by games"
          type="search"
          onChange={handleChange}
        />
        <button className={classes.inputButton}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className={classes.bigContainer}>
        {usersDetails && usersDetails.data.map((user, index) => {
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
