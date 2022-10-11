import { HorizontalCard } from "../../components/HorizontalVideoCard/HorizontalCard";
import styles from "./watchlater.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getWatchLaterVideos } from "../../redux/asyncThunks/watchLaterThunk";
import { useEffect } from "react";
const WatchLater = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { status, watchLater } = useSelector((state) => state.watchLater);
  useEffect(() => {
    dispatch(getWatchLaterVideos(token));
  }, [dispatch, token]);
  return status === "loading" ? (
    <p className={styles.loader}>Loading</p>
  ) : watchLater.length > 0 ? (
    <main className={styles.later_videos_explore}>
      <div className={styles.later_videos_heading}>
        <h3 className={styles.later_heading}>Watch Later</h3>
      </div>
      <div className={styles.later_videocards}>
        {watchLater.map((video) => (
          <HorizontalCard {...video} />
        ))}
      </div>
    </main>
  ) : (
    <main className={styles.later_no_videos}>No Watch Later Videos yet</main>
  );
};

export { WatchLater };
