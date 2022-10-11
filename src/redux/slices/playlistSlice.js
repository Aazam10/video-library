import { createSlice } from "@reduxjs/toolkit";
import {
  createPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  getAllPlaylists,
  deletePlaylist,
} from "../asyncThunks/playlistThunk";
const initialState = {
  videoToAddInPlaylist: null,
  status: "idle",
  error: "",
  playlists: [],
};
const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.videoToAddInPlaylist = action.payload;
    },
  },
  extraReducers: {
    [createPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [createPlaylist.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = action.payload.data.playlists;
    },
    [createPlaylist.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [addVideoToPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [addVideoToPlaylist.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = state.playlists.map((p) => {
        return p._id === action.payload.data.playlist._id
          ? action.payload.data.playlist
          : p;
      });
    },
    [removeVideoFromPlaylist.pending]: (state) => {
      state.status = "loading";
    },
    [removeVideoFromPlaylist.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      console.log(action);
      const playlist = state.playlists.find(
        (p) => p._id === action.payload.data.playlist._id
      );
      playlist.videos = action.payload.data.playlist.videos;
    },
    [getAllPlaylists.pending]: (state) => {
      state.status = "loading";
    },
    [getAllPlaylists.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      console.log(action);
      state.playlists = action.payload.playlists;
    },
    [deletePlaylist.pending]: (state) => {
      state.status = "removing";
    },
    [deletePlaylist.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.playlists = action.payload.data.playlists;
    },
    [deletePlaylist.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { toggleModal } = playlistSlice.actions;

export default playlistSlice.reducer;
