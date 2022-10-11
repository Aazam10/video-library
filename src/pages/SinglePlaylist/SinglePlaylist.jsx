import { useParams } from "react-router-dom";
import styles from "./singlePlaylist.module.css";
import { useSelector } from "react-redux";
import { HorizontalCard } from "../../components/HorizontalVideoCard/HorizontalCard";
const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { playlists } = useSelector((state) => state.playlist);
  const playlist = playlists.find((playlist) => playlist._id === playlistId);

  return playlist.videos.length > 0 ? (
    <main className={styles.liked_videos_explore}>
      <div className={styles.liked_videos_heading}>
        <h3 className={styles.liked_heading}>{playlist.title}</h3>
      </div>
      <div className={styles.liked_videocards}>
        {playlist.videos.map((video) => (
          <HorizontalCard key={video._id} {...video} playlistId={playlistId} />
        ))}
      </div>
    </main>
  ) : (
    <main className={styles.liked_no_videos}>
      No Video in Playlist {playlist.title} yet
    </main>
  );
};

export { SinglePlaylist };
