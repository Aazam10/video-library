import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import videoReducer from "../slices/videoSlice";
import likedReducer from "../slices/likedslice";
import watchLaterReducer from "../slices/watchLaterSlice";
import historyReducer from "../slices/historySlice";
import playlistReducer from "../slices/playlistSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    video: videoReducer,
    likedVideo: likedReducer,
    watchLater: watchLaterReducer,
    history: historyReducer,
    playlist: playlistReducer,
  },
});

export { store };
