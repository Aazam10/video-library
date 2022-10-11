import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.status);
    }
  }
);

const signupUser = createAsyncThunk(
  "auth/signup",
  async ({ firstname, lastname, email, password }, thunkApi) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstname,
        lastname,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export { userLogin, signupUser };
