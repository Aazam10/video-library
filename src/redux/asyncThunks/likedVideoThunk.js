import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const addToLiked = createAsyncThunk(
  "video/liked",
  async ({ video, token }, thunkApi) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        { headers: { authorization: token } }
      );
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const removeFromLiked = createAsyncThunk(
  "/video/unliked",
  async ({ id, token }, thunkApi) => {
    // console.log(id);
    try {
      const response = await axios.delete(`/api/user/likes/${id}`, {
        headers: { authorization: token },
      });
      // console.log(response.data);
      return { data: response.data, status: response.status };
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const getLikedVideos = createAsyncThunk(
  "video/getLikedVideos",
  async (token, thunkApi) => {
    console.log(token);
    try {
      const response = await axios.get("/api/user/likes", {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export { addToLiked, removeFromLiked, getLikedVideos };
