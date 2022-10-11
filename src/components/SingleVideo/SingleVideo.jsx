import styles from "./singlevideo.module.css";
import { Navbar } from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toggleModal } from "../../redux/slices/playlistSlice";
import { useNavigate } from "react-router-dom";
import {
  checkIsLiked,
  likeBtnClickHandler,
  checkIsInWatchLater,
  watchLaterBtnHandler,
} from "../../utilis";

import { useSelector, useDispatch } from "react-redux";
const SingleVideo = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const likedVideos = useSelector((state) => state.likedVideo.likedVideos);
  const likedStatus = useSelector((state) => state.likedVideo.status);
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const { watchLater, status: watchLaterStatus } = useSelector(
    (state) => state.watchLater
  );
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        if (response.status === 200) {
          setVideoDetails(response.data.video);
          console.log(response);
        }
      } catch (error) {
        alert(error);
      }
    })();
    console.log("setting video details");
  }, [videoId]);
  return (
    <>
      <Navbar />
      {videoDetails && (
        <main className={styles.singlevideo_page}>
          <iframe
            src={`https://www.youtube.com/embed/${videoDetails.youtubeID}?autoplay=1&mute=1`}
            title={videoDetails.title}
            frameBorder="0"
            allow="fullscreen"
            className={styles.videoplayer}
          ></iframe>
          <h2 className={styles.video_title}>{videoDetails.title}</h2>
          <div className={styles.channel_action_wrapper}>
            <div className={styles.channel_description}>
              <img
                src={videoDetails.channelImg}
                alt={videoDetails.channelName}
                className={styles.channel_logo}
              />
              <h3 className={styles.channel_name}>
                {videoDetails.channelName}
              </h3>
            </div>
            <div className={styles.video_actions}>
              <button
                className={styles.video_action}
                disabled={
                  likedStatus === "loading" || likedStatus === "removing"
                }
                onClick={() =>
                  token
                    ? likeBtnClickHandler(
                        videoDetails._id,
                        dispatch,
                        videoDetails,
                        token,
                        likedVideos
                      )
                    : navigate("/login")
                }
              >
                {!checkIsLiked(videoDetails._id, likedVideos) ? (
                  <>
                    <i className="fa-regular fa-thumbs-up"></i>
                    <span className={styles.video_action_name}>Like</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <span className={styles.video_action_name}>UnLike</span>
                  </>
                )}
              </button>
              <button
                className={styles.video_action}
                onClick={() =>
                  token
                    ? dispatch(toggleModal(videoDetails))
                    : navigate("/login")
                }
              >
                <i className="fa-solid fa-folder-plus"></i>
                <span className={styles.video_action_name}>
                  Add to Playlist
                </span>
              </button>
              <button
                className={styles.video_action}
                disabled={
                  watchLaterStatus === "loading" ||
                  watchLaterStatus === "removing"
                }
                onClick={() =>
                  token
                    ? watchLaterBtnHandler(
                        videoDetails._id,
                        dispatch,
                        videoDetails,
                        token,
                        watchLater
                      )
                    : navigate("/login")
                }
              >
                {checkIsInWatchLater(videoDetails._id, watchLater) ? (
                  <>
                    <i className="fa-solid fa-clock"></i>
                    <span className={styles.video_action_name}>
                      Remove From Watch Later
                    </span>
                  </>
                ) : (
                  <>
                    <i class="fa-regular fa-clock"></i>
                    <span className={styles.video_action_name}>
                      Add to Watch Later
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export { SingleVideo };
