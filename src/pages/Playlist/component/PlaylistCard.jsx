import styles from "./playlistcard.module.css";
import { deletePlaylistClickHandler } from "../../../utilis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PlaylistCard = (playlist) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const thumbnail =
    playlist.videos.length > 0
      ? playlist.videos[playlist.videos.length - 1].thumbnail
      : null;
  return (
    <div
      className={styles.playlist_card}
      onClick={() => {
        console.log("click from playlist card");
        navigate(`/playlist/${playlist._id}`);
      }}
    >
      {thumbnail ? (
        <div className={styles.playlist_image_backdrop_container}>
          <img className={styles.playlist_image} alt="alt" src={thumbnail} />
          <div className={styles.image_backdrop}>
            <i className="fa-solid fa-play"></i>
            <p>{playlist.videos.length}</p>
          </div>
        </div>
      ) : (
        <div className={styles.no_videos_playlist}>
          No videos In This Playlist
        </div>
      )}
      <div className={styles.playlist_details}>
        <h3 className={styles.playlist_name}>{playlist.title}</h3>
        <i
          className={`fa-solid fa-trash-can ${styles.trash_icon}`}
          onClick={(e) =>
            deletePlaylistClickHandler(e, playlist._id, dispatch, token)
          }
        ></i>
      </div>
    </div>
  );
};

export { PlaylistCard };
