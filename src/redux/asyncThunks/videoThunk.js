import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getVideos = createAsyncThunk("video/getvideos", async (thunkApi) => {
  try {
    const response = await axios.get("/api/videos");
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export { getVideos };
