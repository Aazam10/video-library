import { createSlice } from "@reduxjs/toolkit";
import { userLogin, signupUser } from "../asyncThunks/authThunk";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isLoggedIn: false,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.user = action.payload.foundUser;
      state.token = action.payload.encodedToken;
      localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
      localStorage.setItem("token", action.payload.encodedToken);
      state.isLoggedIn = true;
      state.loading = false;
    },
    [userLogin.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [signupUser.pending]: (state) => {
      state.loading = true;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.user = action.payload.createdUser;
      state.token = action.payload.encodedToken;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [signupUser.rejected]: (state, action) => {
      state.status = "rejected"[state.error] =
        action.payload.response.data.errors;
    },
  },
});

export default authSlice.reducer;
