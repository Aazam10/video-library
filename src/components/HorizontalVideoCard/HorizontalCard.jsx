import styles from "./horizontalcard.module.css";
import { useLocation } from "react-router-dom";
import {
  removeFromWatchLaterClickHandler,
  removeFromLikeClickHandler,
  removeFromHistoryClickHandler,
} from "../../utilis";
import { removeVideoFromPlaylist } from "../../redux/asyncThunks/playlistThunk";
import { useDispatch, useSelector } from "react-redux";
const HorizontalCard = ({ _id, title, thumbnail, playlistId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { pathname } = useLocation();
  const trashIconClickHandler = (e) => {
    e.stopPropagation();
    switch (pathname) {
      case "/later":
        console.log("clicked in later pah");
        removeFromWatchLaterClickHandler(dispatch, _id, token);
        break;
      case "/liked":
        console.log("clicked from liked");
        removeFromLikeClickHandler(dispatch, _id, token);
        break;
      case "/history":
        console.log("clicked from history");
        removeFromHistoryClickHandler(dispatch, _id, token);
        break;
      case `/playlist/${playlistId}`:
        dispatch(removeVideoFromPlaylist({ playlistId, videoId: _id, token }));
        break;
      default:
        return;
    }
  };
  return (
    <div
      className={styles.horizontal_videocard}
      onClick={() => console.log("propogated")}
    >
      <img className={styles.video_thumbnail} src={thumbnail} alt="" />
      <h3 className={styles.video_description}>{title}</h3>
      <button className={styles.trash_button}>
        <i
          className={`fa-solid fa-trash-can ${styles.trash_icon}`}
          onClick={(e) => trashIconClickHandler(e)}
        ></i>
      </button>
    </div>
  );
};

export { HorizontalCard };
