//import components, tools and css
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { useContext, useState } from "react";

export const Login = () => {
  //navigate, usecontext and form tools
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //submit data
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        console.log(data.token)
        navigate("/dashboard", { replace: true });
      });
  };
  //token, or not token, that's the question
  if (token) return <Navigate to="/dashboard" replace />;
  return (
    <Fragment>
      <div className={classes.center}>
        <div className={classes.card1}>
          <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
          <h1>Bg4U</h1>
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="email">Write your email</label>
            <input
              id="email"
              className={classes.input2}
              type="email"
              name="email"
              value={formValues.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            <label htmlFor="password" className={classes.password}>
              Write your password
            </label>
            <input
              id="password"
              className={classes.input2}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={formValues.password}
            />
            <div className={classes.registeredLog}>
              <p>¿Are you not registered?</p>
              <Link className={classes.link} to="/register">Click here</Link>
            </div>
            <div className={classes.button}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
