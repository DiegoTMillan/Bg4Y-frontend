//import components, tools and css
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, signIn } from "../../Components/store/loginSlice";
import { Spinner } from "../../Components/spinner/Spinner";
import {Alert} from "../../Components/alert/Alert"
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext";
import { useContext, useState } from "react";

export const Login = (props) => {
  // //navigate, usecontext and form tools
  // const navigate = useNavigate();
  // const { token, setToken } = useContext(AuthContext);
  // const [formValues, setFormValues] = useState({ email: "", password: "" });
  // const handleInputChange = (e) => {
  //   setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // //submit data
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://127.0.0.1:8000/login", {
  //     method: "POST",
  //     body: JSON.stringify(formValues),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToken(data.token);
  //       console.log(data.token)
  //       navigate("/dashboard", { replace: true });
  //     });
  // };
  // //token, or not token, that's the question
  // if (token) return <Navigate to="/dashboard" replace />;

    const dispatch = useDispatch();
    const user = useSelector((state) => state.login.login.data);
    const loading = useSelector((state) => state.login.login.loading);
    const status = useSelector((state) => state.login.status);
    const error = useSelector((state) => state.login.error);
    const [data, setData] = useState({
      email: "",
      password: "",
    });
    const handleSubmit = (event) => {
      event.preventDefault();
        dispatch(signIn(data)).then(() => {
          setData({
            email: "",
            password: "",
          });
        });
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value,
      });
    };

  return (
      <div className={classes.center}>
        {!loading && (
        <div className={classes.card1}>
          <i className={`${classes.iconDice} fa-solid fa-dice`}></i>
          <h1>Bg4U</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Write your email</label>
            <input
              id="email"
              className={classes.input2}
              type="email"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handleChange}
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
              onChange={handleChange}
              value={data.password}
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
        )}
      </div>
  );
};
