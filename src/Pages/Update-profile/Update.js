import classes from "./Update.module.css";
import { Spinner } from "../../Components/spinner/Spinner";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Components/store/loginSlice";
import { Navigate } from "react-router-dom";
import { Alert } from "../../Components/alert/Alert";
import { Modal } from "../../Components/modal/Modal";

export const Update = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const [updated, setUpdated] = useState(false);
  const token = useSelector((state) => state.login.login.data.data.token);
  console.log(token);

  const [formValues, setFormValues] = useState(
    (user.data && {
      _id: user.data.info[0]._id,
      first_name: user.data.info[0].first_name,
      last_name: user.data.info[0].last_name,
      password: user.data.info[0].password,
      phone: user.data.info[0].phone,
      city: user.data.info[0].city,
      district: user.data.info[0].district,
      photo: user.data.info[0].photo,
      role: "user",
      game_name: [],
      token: token,
    }) ||
      {}
  );
  const handleInputChange = (e) => {
    if (e.target.name === "game_name") {
      let value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormValues((prev) => ({ ...prev, [e.target.name]: value }));
    } else {
      setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  //submit data
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formValues)).then((result) => {
      setFormValues({
        _id: result.payload.data._id,
        first_name: result.payload.data.first_name,
        last_name: result.payload.data.last_name,
        password: result.payload.data.password,
        phone: result.payload.data.phone,
        city: result.payload.data.city,
        district: result.payload.data.district,
        photo: result.payload.data.photo,
        role: "user",
        game_name: [],
      });
      setUpdated(true);
      //EXPERIMENTO
      // dispatch((data)).then((result) => {
      //   setData({
      //     _id: result.payload.data._id,
      //     first_name: result.payload.data.first_name,
      //     last_name: result.payload.data.last_name,
      //     password: result.payload.data.password,
      //     phone: result.payload.data.phone,
      //     city: result.payload.data.city,
      //     district: result.payload.data.district,
      //     role: "user",
      //     photo: result.payload.data.district,
      //     game_name: [],
      //   });
      // });
      //EXPERIMENTO
    });
  };

  //EXPERIMENTO

  // const [data, setData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   city: "",
  //   district: "",
  //   role: "user",
  //   photo: "",
  //   game_name: [],
  // });
  return (
    <div className={classes.center}>
      {!user.data && <Navigate to="/login" replace={true} />}
      {loading && <Spinner />}
      {status === "succeeded" && user.status === "succeeded" && updated && (
        <Modal
          // show={show}
          text="Your profile has been correctly updated"
          route="/dashboard"
          link="Done"
        />
      )}

      {!loading && user.data && (
        <div className={classes.card1}>
          <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
          <h1>Bg4U</h1>
          <h2>Update your profile here</h2>
          <form onSubmit={handleOnSubmit}>
            <div className={classes.columns}>
              <div className={classes.column1}>
                <label htmlFor="first_name">Write your name</label>
                <input
                  id="first_name"
                  className={classes.input1}
                  type="text"
                  name="first_name"
                  value={formValues.first_name}
                  required
                  onChange={handleInputChange}
                />
                <label htmlFor="last_name">Write your surname</label>
                <input
                  id="last_name"
                  className={classes.input2}
                  type="text"
                  name="last_name"
                  value={formValues.last_name}
                  required
                  onChange={handleInputChange}
                />
                <label htmlFor="password">Write your password</label>
                <input
                  id="password"
                  className={classes.input4}
                  type="password"
                  name="password"
                  placeholder="New password"
                  required
                  onChange={handleInputChange}
                  value={formValues.password}
                />
                <label htmlFor="phone">Write your phone</label>
                <input
                  id="phone"
                  className={classes.input5}
                  type="text"
                  name="phone"
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
              </div>
              <div className={classes.column2}>
                <label htmlFor="city">Write the name of your city</label>
                <input
                  id="city"
                  className={classes.input6}
                  type="text"
                  name="city"
                  required
                  onChange={handleInputChange}
                  value={formValues.city}
                />
                <label htmlFor="district">
                  Write the name of your district
                </label>
                <input
                  id="district"
                  className={classes.input7}
                  type="text"
                  name="district"
                  required
                  onChange={handleInputChange}
                  value={formValues.district}
                />
                <label htmlFor="photo">Select a photo URL</label>
                <input
                  id="photo"
                  className={classes.input9}
                  type="text"
                  name="photo"
                  placeholder="Select a photo URL"
                  onChange={handleInputChange}
                  value={formValues.photo}
                />
                <label htmlFor="games">Select your games</label>
                <select
                  id="games"
                  className={classes.input8}
                  type="select"
                  multiple={true}
                  name="game_name"
                  placeholder="Select your games"
                  onChange={handleInputChange}
                  value={formValues.games}
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
                  {/* {gamesDetails.data.map((game, i) => { */}
                  {/* return (
                    <option key={i} value={game.name}>{game.name}</option>
                    )
                  })} */}
                </select>
              </div>
            </div>
            <div className={classes.button}>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
