import { createSlice } from "@reduxjs/toolkit";
import {
  addToWatchLater,
  removeFromWatchLater,
  getWatchLaterVideos,
} from "../asyncThunks/watchLaterThunk";
const initialState = {
  status: "idle",
  watchLater: [],
  error: "",
};

const watchLaterSlice = createSlice({
  name: "watchlater",
  initialState,
  reducers: {},
  extraReducers: {
    [addToWatchLater.pending]: (state) => {
      state.status = "loading";
    },
    [addToWatchLater.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.watchLater = action.payload.data.watchlater;
    },
    [addToWatchLater.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [removeFromWatchLater.pending]: (state) => {
      state.status = "removing";
    },
    [removeFromWatchLater.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.watchLater = action.payload.data.watchlater;
    },
    [removeFromWatchLater.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getWatchLaterVideos.pending]: (state) => {
      state.status = "loading";
    },
    [getWatchLaterVideos.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      console.log("fulfilled");
      console.log(action);
      state.watchLater = action.payload.watchlater;
    },
    [getWatchLaterVideos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default watchLaterSlice.reducer;
