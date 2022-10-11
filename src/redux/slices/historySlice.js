import { createSlice } from "@reduxjs/toolkit";
import {
  addToHistory,
  removeFromHistory,
  getVideosInHistory,
  removeAllVideosFromHistory,
} from "../asyncThunks/historyThunk";
const initialState = {
  status: "idle",
  history: [],
  error: "",
};
const historySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: {
    [addToHistory.pending]: (state) => {
      state.status = "loading";
    },
    [addToHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      console.log(action);
      state.history = action.payload.data.history;
    },
    [addToHistory.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.response.data.errors[0];
    },
    [removeFromHistory.pending]: (state) => {
      state.status = "removing";
    },
    [removeFromHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.history = action.payload.data.history;
    },
    [removeFromHistory.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.response.data.errors[0];
    },
    [getVideosInHistory.pending]: (state) => {
      state.status = "loading";
    },
    [getVideosInHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      console.log(action);
      state.history = action.payload.history;
    },
    [getVideosInHistory.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.response.data.errors[0];
    },
    [removeAllVideosFromHistory.pending]: (state) => {
      state.status = "removing";
    },
    [removeAllVideosFromHistory.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.history = action.payload.data.history;
    },
    [removeAllVideosFromHistory.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.response.data.errors[0];
    },
  },
});

export default historySlice.reducer;
