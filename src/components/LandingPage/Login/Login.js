import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Login.module.css";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleEmailInput = (value) => {
    setEmail(value);
  };

  const handlePasswordInput = (value) => {
    setPassword(value);
  };
  const handleValidation = () => {
    console.log(email, password);
    console.log(validator.isEmail(email));
    console.log(validator.isStrongPassword(password));
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
          />
          <input
            label="password"
            type="password"
            placeholder="Password"
            onChange={(event) => handlePasswordInput(event.target.value)}
          />
          <button
            onClick={handleValidation}
            style={
              password.length >= 8
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
