import styles from "./videocard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToHistoryClickHandler } from "../../utilis";
import { useNavigate } from "react-router-dom";
import { toggleModal } from "../../redux/slices/playlistSlice";
import { watchLaterBtnHandler, checkIsInWatchLater } from "../../utilis";
const VideoCard = ({ video, dialogId, setDialogId }) => {
  const { _id, title, viewCount, thumbnail, channelName, channelImg } = video;

  const { history } = useSelector((state) => state.history);
  const token = useSelector((state) => state.auth.token);
  const { watchLater, status: watchLaterStatus } = useSelector(
    (state) => state.watchLater
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openVidecardDialog = (e, id) => {
    e.stopPropagation();
    dialogId === id ? setDialogId(null) : setDialogId(id);
  };

  const clickOnVideoCardClickHandler = (video, token, dispatch, history) => {
    token && addToHistoryClickHandler(video, token, dispatch, history);
    navigate(`/${video._id}`);
  };
  return (
    <div
      className={styles.videocard}
      onClick={() =>
        clickOnVideoCardClickHandler(video, token, dispatch, history)
      }
    >
      <img src={thumbnail} className={styles.videocard_thumbnail} alt={title} />
      <div className={styles.videocard_details}>
        <img
          src={channelImg}
          alt={channelName}
          className={styles.videocard_channel_logo}
        />
        <div className={styles.videocard_description}>
          <h4 className={styles.videocard_title}>{title}</h4>
          <h5 className={styles.light_text}>{channelName}</h5>
          <div
            className={`${styles.videocard_numbers} ${styles.light_text} ${styles.small_text} `}
          >
            <p>{viewCount}</p>
            <p>12 days ago</p>
          </div>
        </div>
        <i
          className={`fa-solid fa-ellipsis-vertical ${styles.show_more_icon}`}
          onClick={(e) => openVidecardDialog(e, _id)}
        ></i>
      </div>
      {dialogId === _id ? (
        <div className={styles.action_dialog}>
          <button
            className={styles.action_button}
            onClick={(e) => {
              e.stopPropagation();
              token
                ? watchLaterBtnHandler(_id, dispatch, video, token, watchLater)
                : navigate("/login");
            }}
            disabled={watchLaterStatus === "loading"}
          >
            <i className="fa-regular fa-clock"></i>
            <span>
              {!checkIsInWatchLater(video._id, watchLater)
                ? "Add to watch Later"
                : "Remove Watch Later"}
            </span>
          </button>
          <button className={styles.action_button}>
            <i className="fa-solid fa-folder-plus"></i>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setDialogId(null);
                token ? dispatch(toggleModal(video)) : navigate("/login");
              }}
            >
              Add to Playlist
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { VideoCard };
