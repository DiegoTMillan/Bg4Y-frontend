//import components, tools, and css
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, signIn} from "../../Components/store/loginSlice";
import { Spinner } from "../../Components/spinner/Spinner";
import {Alert} from "../../Components/alert/Alert"
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Register = (props) => {
  // const navigate = useNavigate();
  // const [formValues, setFormValues] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   city: "",
  //   district: "",
  //   role: "user",
  //   photo: "",
  // });
  // const handleInputChange = (e) => {
  //   setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // //submit data
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("127.0.0.1:8000/users", {
  //     method: "POST",
  //     body: JSON.stringify(formValues),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       navigate("/dashboard", { replace: true });
  //     });
  // };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    district: "",
    role: "user",
    photo: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.action === "Register") {
      dispatch(addNewUser(data)).then(() => {
        setData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone: "",
          city: "",
          district: "",
          role: "user",
          photo: "",
        });
      });
    } else {
      dispatch(signIn(data)).then(() => {
        setData({
          email: "",
          password: "",
        });
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // import for select
  // const [gamesDetails, setGamesDetails] = useState();

  // useEffect(() => {
  //   //getting all games
  //   fetch(`http://127.0.0.1:8000/boardgames/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       return setGamesDetails(data);
  //     });
  // }, []);
  return (
    <div className={classes.center}>
      {loading && <Spinner />}
      {status === "succeeded" &&
        user.status === "failed" &&
        props.type === "Register" && (
          <Alert type="error" message={user.error} />
        )}
      {status === "succeeded" &&
        user.status === "succeeded" &&
        props.type === "Register" && (
          <Alert type="success" message={user.data.info} />
        )}
      {!loading && (
        <div className={classes.card1}>
          <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
          <h1>Bg4U</h1>
          <h2>Sign up here</h2>
          <form onSubmit={handleSubmit}>
            <div className={classes.columns}>
              <div className={classes.column1}>
                <label htmlFor="first_name">Write your name</label>
                <input
                  id="first_name"
                  className={classes.input1}
                  type="text"
                  name="first_name"
                  value={data.first_name}
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="last_name">Write your surname</label>
                <input
                  id="last_name"
                  className={classes.input2}
                  type="text"
                  name="last_name"
                  value={data.last_name}
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="email">Write a valid email</label>
                <input
                  id="email"
                  className={classes.input3}
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <label htmlFor="password">Write your password</label>
                <input
                  id="password"
                  className={classes.input4}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  value={data.password}
                />
              </div>
              <div className={classes.column2}>
                <label htmlFor="phone">Write your phone</label>
                <input
                  id="phone"
                  className={classes.input5}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={data.phone}
                />
                <label htmlFor="city">Write the name of your city</label>
                <input
                  id="city"
                  className={classes.input6}
                  type="text"
                  name="city"
                  placeholder="City Name"
                  required
                  onChange={handleChange}
                  value={data.city}
                />
                <label htmlFor="district">
                  Write the name of your district
                </label>
                <input
                  id="district"
                  className={classes.input7}
                  type="text"
                  name="district"
                  placeholder="District Name"
                  required
                  onChange={handleChange}
                  value={data.district}
                />
                <label htmlFor="games">Select your games</label>
                <select
                  id="games"
                  className={classes.input8}
                  type="select"
                  multiple
                  name="game_name"
                  placeholder="Select a file"
                  onChange={handleChange}
                  value={data.games}
                >
                  {/* {gamesDetails.data.map((game, i) => {
                    return (
                      <option key={i} value={game.name}>
                        {game.name}
                      </option>
                    );
                  })} */}
                </select>
                <label htmlFor="photo">Select a photo</label>
                <input
                  id="photo"
                  className={classes.input9}
                  type="file"
                  name="photo"
                  placeholder="Select a file"
                  onChange={handleChange}
                  value={data.photo}
                />
              </div>
            </div>
            <div className={classes.button}>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
