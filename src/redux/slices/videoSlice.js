import { createSlice } from "@reduxjs/toolkit";
import { getVideos } from "../asyncThunks/videoThunk";
const initialState = {
  videos: [],
  status: "idle",
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: {
    [getVideos.pending]: (state) => {
      state.status = "loading";
    },
    [getVideos.fulfilled]: (state, action) => {
      state.videos = action.payload.videos;
      state.status = "fullfilled";
    },
    [getVideos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action;
    },
  },
});

export default videoSlice.reducer;
