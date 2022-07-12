//import components, tools and css
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../Components/store/loginSlice";
import { Spinner } from "../../Components/spinner/Spinner";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../../Components/modal/Modal";

export const Login = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
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
      {loading && <Spinner />}
      {status === "succeeded" && user.status === "failed" && (
        <Modal
        text="Sorry, email or password are wrong"
        route="/"
        link="try again"
        />
      )}
      {status === "succeeded" && user.status === "succeeded" && (
        <Navigate to='/dashboard' replace={true} />
      )}
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
              <p>Are you new around here?</p>
              <Link className={classes.link} to="/register">
                Sign up!
              </Link>
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
