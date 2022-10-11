import { PlaylistCard } from "./component/PlaylistCard";
import styles from "./playlist.module.css";
import { getAllPlaylists } from "../../redux/asyncThunks/playlistThunk";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const Playlist = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { playlists, status } = useSelector((state) => state.playlist);
  console.log(playlists);
  useEffect(() => {
    dispatch(getAllPlaylists(token));
  }, [dispatch, token]);
  return status === "loading" ? (
    <p className={styles.loader}>Loading</p>
  ) : playlists.length > 0 ? (
    <main className={styles.playlists_explore}>
      <h2 className={styles.playlists_heading}>My Playlists</h2>
      <div className={styles.playlists_cards}>
        {playlists.map((playlist) => {
          console.log(playlist);
          return <PlaylistCard key={playlist._id} {...playlist} />;
        })}
      </div>
    </main>
  ) : (
    <main className={styles.no_playlists}>No Playlist Created Yet</main>
  );
};

export { Playlist };
