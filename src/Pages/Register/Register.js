//import components, tools, and css
import { Fragment } from "react";
import classes from "./Register.module.css";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
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
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //submit data
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("127.0.0.1:8000/users", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/dashboard", { replace: true });
      });
  };
  return (
    <Fragment>
      <div className={classes.center}>
        <div className={classes.card1}>
          <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
          <h1>Bg4U</h1>
          <h2>Sign up here</h2>
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
                  placeholder="First Name"
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
                  placeholder="Last Name"
                  required
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Write a valid email</label>
                <input
                  id="email"
                  className={classes.input3}
                  type="email"
                  name="email"
                  value={formValues.email}
                  placeholder="Email"
                  required
                  onChange={handleInputChange}
                />
                <label htmlFor="password">Write your password</label>
                <input
                  id="password"
                  className={classes.input4}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleInputChange}
                  value={formValues.password}
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
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
                <label htmlFor="city">Write the name of your city</label>
                <input
                  id="city"
                  className={classes.input6}
                  type="text"
                  name="city"
                  placeholder="City Name"
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
                  placeholder="District Name"
                  required
                  onChange={handleInputChange}
                  value={formValues.district}
                />
                <label htmlFor="photo">Select a photo</label>
                <input
                  id="photo"
                  className={classes.input8}
                  type="file"
                  name="photo"
                  placeholder="Select a file"
                  onChange={handleInputChange}
                  value={formValues.photo}
                />
              </div>
            </div>
            <div className={classes.button}>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
