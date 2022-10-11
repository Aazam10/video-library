import { deletePlaylist } from "../../redux/asyncThunks/playlistThunk";
const deletePlaylistClickHandler = (e, id, dispatch, token) => {
  e.stopPropagation();
  dispatch(deletePlaylist({ playlistId: id, token }));
};
export { deletePlaylistClickHandler };
