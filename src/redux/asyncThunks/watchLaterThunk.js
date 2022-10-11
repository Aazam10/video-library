import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const addToWatchLater = createAsyncThunk(
  "/videos/addWatchLater",
  async ({ token, video }, thunkApi) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: token } }
      );
      console.log(response);
      return { data: response.data, status: response.status };
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const removeFromWatchLater = createAsyncThunk(
  "/videos/removeWatchLater",
  async ({ id, token }, thunkApi) => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: { authorization: token },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const getWatchLaterVideos = createAsyncThunk(
  "videos/getWatchLaterVideos",
  async (token, thunkApi) => {
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export { addToWatchLater, removeFromWatchLater, getWatchLaterVideos };
