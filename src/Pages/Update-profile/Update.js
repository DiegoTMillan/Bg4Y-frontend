import { Fragment } from "react";
import classes from "./Update.module.css";
import { Spinner } from "../../Components/spinner/Spinner";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../Components/store/loginSlice";
import { Navigate } from "react-router-dom";

export const Update = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  // const status = useSelector((state) => state.login.status);
  console.log(user.data.token)
  // const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    _id: user.data.info[0]._id,
    first_name: user.data.info[0].first_name,
    last_name: user.data.info[0].last_name,
    password: user.data.info[0].password,
    phone: user.data.info[0].phone,
    city: user.data.info[0].city,
    district: user.data.info[0].district,
    role: "user",
    // photo: "",
    game_name: [],
  });
  const handleInputChange = (e) => {
    // console.log(e.target.selectedOptions);
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
    console.log(formValues);
    dispatch(updateProfile(formValues)).then(() => {
      setFormValues({
        _id: user.data.info[0]._id,
        first_name: user.data.info[0].first_name,
        last_name: user.data.info[0].last_name,
        password: user.data.info[0].password,
        phone: user.data.info[0].phone,
        city: user.data.info[0].city,
        district: user.data.info[0].district,
        role: "user",
        // photo: "",
        game_name: [],
      });
    });
    //   fetch(`http://127.0.0.1:8000/users/${userId}`, {
    //     method: "PATCH",
    //     body: JSON.stringify(formValues),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       navigate("/dashboard", { replace: true });
    //     });
  };

  //getting info about user
  // const [profileDetails, setProfileDetails] = useState();

  // useEffect(() => {
  //   //getting all details
  //   fetch(`http://127.0.0.1:8000/users/${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return setProfileDetails(data);
  //     });
  // }, []);

  if (!user) {
    return (
      <div className={classes.spinner}>
        <Spinner />
      </div>
    );
  }
  return (
    <Fragment>
      <div className={classes.center}>
      {/* {status === "succeeded" && user.status === "succeeded" && (
        <Navigate to='/dashboard' replace={true} />
      )} */}
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
                  // placeholder={profileDetails.data.first_name}
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
                  // placeholder={profileDetails.data.last_name}
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
                  // placeholder={profileDetails.data.phone}
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
                  // placeholder={profileDetails.data.city}
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
                  // placeholder={profileDetails.data.district}
                  required
                  onChange={handleInputChange}
                  value={formValues.district}
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
                {/* <label htmlFor="photo">Select a photo</label>
                <input
                  id="photo"
                  className={classes.input9}
                  type="text"
                  name="photo"
                  placeholder="Select a photo URL"
                  onChange={handleInputChange}
                  value={formValues.photo}
                /> */}
              </div>
            </div>
            <div className={classes.button}>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
