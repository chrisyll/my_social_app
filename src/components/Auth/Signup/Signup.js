import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import validator from "validator";
import classes from "./Signup.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../../store/authSlice";

const Signup = () => {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState("");
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const [emailFocus, setEmailFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.error);

  const handleEmailInput = (value) => {
    setEmail(value);
  };

  const handleNameInput = (value) => {
    setName(value);
  };

  const handleUsernameInput = (value) => {
    setUsername(value);
  };

  const handlePasswordInput = (value) => {
    setPassword(value);
  };

  const handleEmailFocus = () => setEmailFocus(!emailFocus);
  const handleNameFocus = () => setNameFocus(!nameFocus);
  const handleUsernameFocus = () => setUsernameFocus(!usernameFocus);
  const handlePasswordFocus = () => setPasswordFocus(!passwordFocus);

  const handleValidation = () => {
    if (
      validator.isEmail(email) &&
      validator.isAlpha(name) &&
      validator.isAlphanumeric(username) &&
      validator.isStrongPassword(password)
    ) {
      const user = {
        email: email,
        name: name,
        username: username,
        password: password,
      };

      const queryParams = `?orderBy="username"&equalTo="${username}"`;

      axios
        .get(
          "https://instaclone-43fee-default-rtdb.europe-west1.firebasedatabase.app/user.json" +
            queryParams
        )
        .then((response) => {
          if (Object.keys(response.data).length === 0) {
            handleSubmit(user);
          } else {
            console.log("username already in use!");
          }
        })
        .catch((error) => {});
    }
  };

  const handleSubmit = (user) => {
    dispatch(authSignUp(user))
      .unwrap()
      .then(() => {
        if (error === false) {
          navigate("/");
        }
      })
      .catch((error) =>
        console.log("An error occured while signing up", error)
      );
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div className={classes.SignupContainer}>
        <NavLink className={classes.SignupTitle} to="/">
          Instaclone
        </NavLink>
        <div className={classes.SignupForm}>
          <input
            placeholder="Email"
            type="email"
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
            placeholder="Full Name"
            type="text"
            onChange={(event) => handleNameInput(event.target.value)}
            onFocus={handleNameFocus}
            onBlur={handleNameFocus}
            style={
              nameFocus
                ? { border: "1px solid #a7a7a7" }
                : { border: "1px solid #dbdbdb" }
            }
          />
          <input
            placeholder="Username"
            type="text"
            onChange={(event) => handleUsernameInput(event.target.value)}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameFocus}
            style={
              usernameFocus
                ? { border: "1px solid #a7a7a7" }
                : { border: "1px solid #dbdbdb" }
            }
          />
          <input
            placeholder="Password"
            type="password"
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
            style={
              email.length > 0 &&
              name.length > 0 &&
              username.length > 0 &&
              password.length >= 8
                ? { backgroundColor: "#0095f6", cursor: "pointer" }
                : { backgroundColor: "#b2dffc", cursor: "default" }
            }
            onClick={handleValidation}
          >
            Sign up
          </button>
        </div>
        <p style={{ marginTop: "48px", fontSize: "14px" }}>
          Already have an account?{" "}
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "rgb(18 142 221)",
              fontWeight: "600",
            }}
          >
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
