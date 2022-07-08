//import components, tools, and css
import { useDispatch, useSelector } from "react-redux";
import { addNewUser} from "../../Components/store/loginSlice";
import { Spinner } from "../../Components/spinner/Spinner";
import {Alert} from "../../Components/alert/Alert"
import classes from "./Register.module.css";
import { useState } from "react";

export const Register = (props) => {;
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
    game_name:[],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
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
          game_name:[],
        });
      });
  };
  const handleChange = (e) => {
    if (e.target.name === "game_name") {
      let value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setData((prev) => ({ ...prev, [e.target.name]: value }));
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className={classes.center}>
      {loading && <Spinner />}
      {status === "succeeded" &&
        user.status === "failed" && (
        // props.type === "Register" && (
          <Alert type="error" message="Sorry, something wrong has happened, please try again in a few minutes" />
        )}
      {status === "succeeded" &&
        user.status === "succeeded" && (
          <Alert type="success" message="You have been successfully registered. Now yo can login and enjoy!" />
          // <Navigate to="/dashboard" replace />
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
              </div>
              <div className={classes.column2}>
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
                <label htmlFor="photo">Select a photo URL</label>
                <input
                  id="photo"
                  className={classes.input9}
                  type="text"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={data.photo}
                />
                <label htmlFor="games">Select your games</label>
                <select
                  id="games"
                  className={classes.input8}
                  type="select"
                  multiple={true}
                  name="game_name"
                  placeholder="Select your games"
                  onChange={handleChange}
                  value={data.games}
                >
                  <option value="Maracaibo">Maracaibo</option>
                  <option value="Settlers of Catan">Settlers of Catan</option>
                  <option value="Through the ages">Through the ages</option>
                  <option value="Clash of cultures">Clash of cultures</option>
                  <option value="Agricola">Agricola</option>
                  <option value="K2">K2</option>
                  <option value="7Wonders">7Wonders</option>
                  <option value="Dead of winter">Dead of winter</option>
                  <option value="Scythe">Scythe</option>
                  <option value="Secret code">Secret code</option>
                  <option value="Civilization">Civilization</option>
                  <option value="Junta">Junta</option>
                  {/* {gamesDetails.data.map((game, i) => {
                    return (
                      <option key={i} value={game.name}>
                        {game.name}
                      </option>
                    );
                  })} */}
                </select>
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
