import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Login.module.css";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleEmailInput = (value) => {
    setEmail(value);
  };

  const handlePasswordInput = (value) => {
    setPassword(value);
  };
  const handleEmailFocus = () => setEmailFocus(!emailFocus);
  const handlePasswordFocus = () => setPasswordFocus(!passwordFocus);

  const handleSubmit = () => {
    console.log(email, password);
    console.log(validator.isEmail(email));
    console.log(validator.isStrongPassword(password));
  };

  let errorMessage;

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
