import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  username: null,
  error: false,
  loading: false,
};

export const authSignUp = createAsyncThunk("singUp", async (user, thunkAPI) => {
  let payload;
  await axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmr-1tBKfKAgz2XVyarN0hvMShO9-zITU",
      {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      }
    )
    .then((response) => {
      thunkAPI.dispatch(authPostUserInfo(user));
      //removed expiration date
      payload = {
        token: response.data.idToken,
        username: user.username,
      };
      thunkAPI.dispatch(authTimeOut(response.data.expiresIn));
    });
  return payload;
});

export const authPostUserInfo = createAsyncThunk(
  "saveUserInfo",
  async (user, thunkAPI) => {
    const userInfo = user;
    delete userInfo.password;
    userInfo.profilePictureURL = "null";
    userInfo.followers = "[]";
    userInfo.following = "[]";
    userInfo.posts = "0";

    await axios.post(
      "https://instaclone-43fee-default-rtdb.europe-west1.firebasedatabase.app/user.json",
      userInfo
    );
  }
);

export const authTimeOut = createAsyncThunk(
  "authTimeOut",
  async (expirationTime, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(authLogout());
    }, expirationTime * 1000);
  }
);

export const authLogin = createAsyncThunk(
  "authLogin",
  async (info, thunkAPI) => {
    let payload;
    await axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmr-1tBKfKAgz2XVyarN0hvMShO9-zITU",
        info
      )
      .then((response) => {
        payload = {
          token: response.data.idToken,
        };
      });
    return payload;
  }
);

export const authGetUserInfo = createAsyncThunk(
  "authGetUserInfo",
  async (email, thunkAPI) => {
    let payload;
    let queryParams = `?orderBy="email"&equalTo="${email}"`;
    await axios
      .get(
        "https://instaclone-43fee-default-rtdb.europe-west1.firebasedatabase.app/user.json" +
          queryParams
      )
      .then((response) => {
        for (const prop in response.data) {
          payload = { username: response.data[prop].username };
        }
      });
    return payload;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogout: (state, action) => {
      state.token = null;
      state.username = null;
      state.error = false;
      state.loading = false;
    },
  },
  extraReducers: {
    [authSignUp.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [authSignUp.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.loading = false;
    },
    [authSignUp.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [authLogin.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [authLogin.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
    },
    [authLogin.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [authGetUserInfo.fulfilled]: (state, action) => {
      state.username = action.payload.username;
    },
  },
});

export const { authLogout } = authSlice.actions;

export default authSlice.reducer;
