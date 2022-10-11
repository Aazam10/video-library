import { HorizontalCard } from "../../components/HorizontalVideoCard/HorizontalCard";
import styles from "./history.module.css";
import { getVideosInHistory } from "../../redux/asyncThunks/historyThunk";
import { useSelector, useDispatch } from "react-redux";
import { removeAllVideosFromHistory } from "../../redux/asyncThunks/historyThunk";
import { useEffect } from "react";
const History = () => {
  const token = useSelector((state) => state.auth.token);
  const { status, history } = useSelector((state) => state.history);
  const dispatch = useDispatch();
  console.log(token);
  useEffect(() => {
    dispatch(getVideosInHistory(token));
  }, [dispatch, token]);
  console.log(history);
  const removeAllClickHandler = async () => {
    const response = await dispatch(removeAllVideosFromHistory(token)).unwrap();
    console.log(response);
  };
  return status === "loading" ? (
    <p className={styles.loader}>Loading</p>
  ) : history.length > 0 ? (
    <main className={styles.history_videos_explore}>
      <div className={styles.history_videos_heading}>
        <h3 className={styles.history_heading}>Watch History</h3>
        <button
          className={styles.clear_history_button}
          disabled={status === "removing"}
          onClick={() => removeAllClickHandler()}
        >
          <span>Clear</span>
          <i className={`fa-solid fa-trash-can ${styles.trash_icon}`}></i>
        </button>
      </div>
      <div className={styles.history_videocards}>
        {[...history].reverse().map((video) => (
          <HorizontalCard {...video} />
        ))}
      </div>
    </main>
  ) : (
    <main className={styles.history_no_videos}>No Videos in History yet</main>
  );
};

export { History };
