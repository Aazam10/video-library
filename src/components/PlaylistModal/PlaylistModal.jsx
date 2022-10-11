import styles from "./playlistmodal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/playlistSlice";
import { useState } from "react";
import {
  isVideoInPlaylist,
  createPlaylistClickHandler,
  playlistCheckboxChangeHandler,
} from "../../utilis";
const PlaylistModal = () => {
  const { videoToAddInPlaylist: video, playlists } = useSelector(
    (state) => state.playlist
  );
  const token = useSelector((state) => state.auth.token);
  console.log(playlists);
  const dispatch = useDispatch();
  const [showPlaylistInput, setShowPlaylistInput] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [titleError, setTitleError] = useState("");

  return (
    <div className={styles.playlist_backdrop}>
      <div className={styles.playlist_modal}>
        <div className={styles.playlist_header}>
          <p>Save...</p>
          <button
            className={styles.close_modal}
            onClick={() => dispatch(toggleModal(null))}
          >
            X
          </button>
        </div>
        {playlists.length > 0 && (
          <div className={styles.user_playlists}>
            {[...playlists].reverse().map((playlist) => {
              return (
                <div className={styles.input_checkbox} key={playlist._id}>
                  <input
                    id={playlist._id}
                    type="checkbox"
                    checked={isVideoInPlaylist(playlist, video)}
                    onChange={() =>
                      playlistCheckboxChangeHandler(
                        playlist,
                        video,
                        token,
                        dispatch
                      )
                    }
                  />
                  <label htmlFor={playlist._id}>{playlist.title}</label>
                </div>
              );
            })}
          </div>
        )}
        <div className={styles.create_playlist}>
          {showPlaylistInput ? (
            <form
              onSubmit={(e) =>
                createPlaylistClickHandler(
                  e,
                  playlists,
                  token,
                  video,
                  dispatch,
                  playlistName,
                  setPlaylistName,
                  setTitleError
                )
              }
            >
              <input
                placeholder="Enter Playlist Name"
                type="text"
                className="input_playlist_name"
                onChange={(e) => {
                  setTitleError("");
                  setPlaylistName(e.target.value);
                }}
                value={playlistName}
                required
              />
              {!!titleError ? <p>{titleError}</p> : null}
              <input
                type="submit"
                className={styles.submit_playlist}
                value="Create"
              />
            </form>
          ) : (
            <button
              className={styles.open_create_playlist}
              onClick={() => setShowPlaylistInput(true)}
            >
              + Create New Playlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
