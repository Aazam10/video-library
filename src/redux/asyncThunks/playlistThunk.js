import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createPlaylist = createAsyncThunk(
  "playlist/createPlaylist",
  async ({ title, token }, thunkApi) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: { title: title, description: "" } },
        { headers: { authorization: token } }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const addVideoToPlaylist = createAsyncThunk(
  "playlist/addToPlaylist",
  async ({ id, video, token }, thunkApi) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${id}`,
        { video },
        { headers: { authorization: token } }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const removeVideoFromPlaylist = createAsyncThunk(
  "playlist/removeVideoFromPlaylist",
  async ({ playlistId, videoId, token }, thunkApi) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        { headers: { authorization: token } }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const getAllPlaylists = createAsyncThunk(
  "playlist/getAllPlaylists",
  async (token, thunkApi) => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
const deletePlaylist = createAsyncThunk(
  "playlist/deletePlaylist",
  async ({ playlistId, token }, thunkApi) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: token },
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export {
  createPlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  getAllPlaylists,
  deletePlaylist,
};
