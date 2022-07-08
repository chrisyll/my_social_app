import * as actionsTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionsTypes.AUTH_START,
  };
};

export const authSuccess = (token, username) => {
  return {
    type: actionsTypes.AUTH_SUCCESS,
    token: token,
    username: username,
  };
};

export const authFail = (error) => {
  return {
    type: actionsTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("username");
  return {
    type: actionsTypes.AUTH_LOGOUT,
  };
};

export const setAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (user) => {
  return (dispatch) => {
    dispatch(authStart);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmr-1tBKfKAgz2XVyarN0hvMShO9-zITU",
        {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        axios
          .post(
            "https://instaclone-43fee-default-rtdb.europe-west1.firebasedatabase.app/user.json",
            user
          )
          .then((response) => {
            const expirationDate = new Date(
              new Date().getTime() + response.data.expiresIn * 1000
            );
            localStorage.setItem("token", response.data.idToken);
            localStorage.setItem("username", user.username);
            localStorage.setItem("expirationDate", expirationDate);
            dispatch(authSuccess(response.data.idToken, user.username));
            dispatch(setAuthTimeout(response.data.expiresIn));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(authFail(error.response.data.error));
      });
  };
};
