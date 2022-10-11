import { HorizontalCard } from "../../components/HorizontalVideoCard/HorizontalCard";
import styles from "./likedvideos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLikedVideos } from "../../redux/asyncThunks/likedVideoThunk";
const LikedVideos = () => {
  const token = useSelector((state) => state.auth.token);
  const { likedVideos, status } = useSelector((state) => state.likedVideo);
  const dispatch = useDispatch();
  console.log(token);
  useEffect(() => {
    dispatch(getLikedVideos(token));
    console.log("inside useeffect");
  }, [dispatch, token]);

  return status === "loading" ? (
    <p className={styles.loader}>Loading</p>
  ) : likedVideos.length > 0 ? (
    <main className={styles.liked_videos_explore}>
      <div className={styles.liked_videos_heading}>
        <h3 className={styles.liked_heading}>Liked Videos</h3>
      </div>
      <div className={styles.liked_videocards}>
        {likedVideos.map((video) => (
          <HorizontalCard {...video} />
        ))}
      </div>
    </main>
  ) : (
    <main className={styles.liked_no_videos}>No Liked Videos yet</main>
  );
};

export { LikedVideos };
