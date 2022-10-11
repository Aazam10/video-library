import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../redux/asyncThunks/videoThunk";
import styles from "./explore.module.css";
import { VideoCard } from "../Videocard/VideoCard";
import React from "react";
function Explore() {
  const videoStatus = useSelector((state) => state.video.status);
  const videos = useSelector((state) => state.video.videos);
  const dispatch = useDispatch();
  const [dialogId, setDialogId] = useState(null);
  // console.log(videos);
  // console.log(videoStatus);
  // console.log(dialogId);
  useEffect(() => {
    if (videoStatus === "idle") {
      dispatch(getVideos());
    }
  });
  return (
    <main className={styles.explore_videos}>
      {videoStatus === "loading" ? (
        <h1>Loading...</h1>
      ) : (
        videos && (
          <div className={styles.explore}>
            {videos.map((video) => (
              // <Link to={`/${video._id}`} key={video._id}>
              <VideoCard
                key={video._id}
                video={{ ...video }}
                dialogId={dialogId}
                setDialogId={setDialogId}
              />
              // </Link>
            ))}
          </div>
        )
      )}
    </main>
  );
}

export { Explore };
