import { isVideoInPlaylist } from "./isVideoInPlaylist";
import {
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../redux/asyncThunks/playlistThunk";
const playlistCheckboxChangeHandler = (playlist, video, token, dispatch) => {
  !isVideoInPlaylist(playlist, video)
    ? dispatch(
        addVideoToPlaylist({
          id: playlist._id,
          video,
          token,
        })
      )
    : dispatch(
        removeVideoFromPlaylist({
          playlistId: playlist._id,
          videoId: video._id,
          token,
        })
      );
};

export { playlistCheckboxChangeHandler };
