import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const addToHistory = createAsyncThunk(
  "/videos/addToHistory",
  async ({ video, token }, thunkApi) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        { headers: { authorization: token } }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const removeFromHistory = createAsyncThunk(
  "videos/removeFromHistory",
  async ({ id, token }, thunkApi) => {
    try {
      const response = await axios.delete(`/api/user/history/${id}`, {
        headers: { authorization: token },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const removeAllVideosFromHistory = createAsyncThunk(
  "videos/removeAllVideosFromHistory",
  async (token, thunkApi) => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: token },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const getVideosInHistory = createAsyncThunk(
  "videos/getVideosInHistory",
  async (token, thunkApi) => {
    console.log(token);
    try {
      const response = await axios.get("/api/user/history", {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export {
  addToHistory,
  removeFromHistory,
  getVideosInHistory,
  removeAllVideosFromHistory,
};
