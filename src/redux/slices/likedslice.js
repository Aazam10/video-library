import { createSlice } from "@reduxjs/toolkit";
import {
  addToLiked,
  removeFromLiked,
  getLikedVideos,
} from "../asyncThunks/likedVideoThunk";
const initialState = {
  likedVideos: [],
  status: "idle",
  error: "",
};
const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {},
  extraReducers: {
    [addToLiked.pending]: (state) => {
      state.status = "loading";
    },
    [addToLiked.fulfilled]: (state, action) => {
      state.likedVideos = action.payload.likes;
      state.status = "fullfilled";
    },
    [addToLiked.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [removeFromLiked.pending]: (state) => {
      state.status = "removing";
    },
    [removeFromLiked.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.likedVideos = action.payload.data.likes;
    },
    [removeFromLiked.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [getLikedVideos.pending]: (state) => {
      state.status = "loading";
    },
    [getLikedVideos.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.likedVideos = action.payload.likes;
    },
    [getLikedVideos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default likedSlice.reducer;
