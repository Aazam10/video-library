import { playlistExists } from "./playlistExists";
import {
  createPlaylist,
  addVideoToPlaylist,
} from "../../redux/asyncThunks/playlistThunk";
import { toggleModal } from "../../redux/slices/playlistSlice";
const createPlaylistClickHandler = async (
  e,
  playlists,
  token,
  video,
  dispatch,
  playlistName,
  setPlaylistName,
  setTitleError
) => {
  e.preventDefault();
  if (!playlistExists(playlistName, playlists)) {
    const response = await dispatch(
      createPlaylist({ title: playlistName, token })
    ).unwrap();
    // console.log(response);
    if (response.status === 201) {
      console.log(playlistName);
      const { _id: playlistId } = response.data.playlists.find(
        (p) => p.title === playlistName
      );
      //   console.log(playlistId);
      const videoaddResponse = await dispatch(
        addVideoToPlaylist({
          id: playlistId,
          video,
          token,
        })
      ).unwrap();
      if (videoaddResponse.status === 201) {
        dispatch(toggleModal(null));
      }
    }
  } else {
    setTitleError("Playlist already exists");
    setPlaylistName("");
  }
};

export { createPlaylistClickHandler };
