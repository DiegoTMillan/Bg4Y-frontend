import { useState, useEffect, Fragment, useRef } from "react";
import { Spinner } from "../../Components/spinner/Spinner";
import { CardFriend } from "../../Components/CardFriend/CardFriend";
import classes from "./Friends.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFriends } from "../../Components/store/loginSlice";

export const Friends = () => {
  // const user = useSelector((state) => state.login.login.data.data.info[0]);
  //   db.users.find({"game_name":{$in:["Maracaibo", "K2"]}}, {"first_name":1, "last_name":1, "phone":1, "city":1, "district":1, "game_name":1, "photo":1, "_id":0})
  // const token = useSelector((state) => state.login.login.data.data?.token);
  const searchInputRef = useRef();
  const [usersDetails, setUsersDetails] = useState();
  const [usersCard, setUsersCard] = useState();
  const [searchInput, setSearchInput] = useState();

  // useEffect(() => {
  //   dispatch(getFriends()).then();
  // }, []);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.login.login.data.data);
  // const users = useSelector((state) => state.login.login.data.data.info[0]);
  // const loading = useSelector((state) => state.login.login.loading);
  // const status = useSelector((state) => state.login.status);
  console.log(users)
  

  // useEffect(()=>{
  //   dispatch(getFriends(usersDetails)).then()
  //   setUsersDetails({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     city: "",
  //     district: "",
  //     role: "user",
  //     photo: "",
  //     game_name:[],
  //   });
  //   console.log(usersDetails)
  // },[])

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
  //   getInfo();
  // }, []);

  if (!users) {
    return (
      <div className={classes.spinner}>
        <Spinner />
      </div>
    );
  }
  return (
    <Fragment>
      <h1 className={classes.friends}>Check out your friends</h1>
      {/* <form className={classes.formInput}>
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
      </form> */}
      <div ref={searchInputRef} className={classes.bigContainer}>
        {users.data.map((user, index) => {
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
