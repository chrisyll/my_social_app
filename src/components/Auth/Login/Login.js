import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import classes from "./Login.module.css";
import validator from "validator";
import { authLogin, authGetUserInfo } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const stateError = useSelector((state) => state.error);

  const handleEmailInput = (value) => {
    setEmail(value);
  };

  const handlePasswordInput = (value) => {
    setPassword(value);
  };
  const handleEmailFocus = () => setEmailFocus(!emailFocus);
  const handlePasswordFocus = () => setPasswordFocus(!passwordFocus);

  const handleSubmit = () => {
    if (validator.isEmail(email) && validator.isStrongPassword(password)) {
      const info = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
      dispatch(authLogin(info))
        .then(() => {
          if (stateError === false) {
            dispatch(authGetUserInfo(email)).then(() => navigate("/"));
          }
        })
        .catch((error) =>
          console.log("An error occured while logging in", error)
        );
    }
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.LoginContainer}>
        <NavLink className={classes.LoginTitle} to="/">
          Instaclone
        </NavLink>
        <div className={classes.LoginForm}>
          <input
            label="username"
            type="email"
            placeholder="Email"
            onChange={(event) => handleEmailInput(event.target.value)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailFocus}
            style={
              emailFocus
                ? { border: "1px solid #a7a7a7" }
                : { border: "1px solid #dbdbdb" }
            }
          />
          <input
            label="password"
            type="password"
            placeholder="Password"
            onChange={(event) => handlePasswordInput(event.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordFocus}
            style={
              passwordFocus
                ? { border: "1px solid #a7a7a7" }
                : { border: "1px solid #dbdbdb" }
            }
          />
          <button
            onClick={handleSubmit}
            style={
              password.length >= 8 && email.length > 0
                ? { backgroundColor: "#0095f6", cursor: "pointer" }
                : { backgroundColor: "#b2dffc", cursor: "default" }
            }
          >
            Log In
          </button>
        </div>
        <p style={{ marginTop: "48px", fontSize: "14px" }}>
          Don't have an account?{" "}
          <NavLink
            to="/signup"
            style={{
              textDecoration: "none",
              color: "rgb(18 142 221)",
              fontWeight: "600",
            }}
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
