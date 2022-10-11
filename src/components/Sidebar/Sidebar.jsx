import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className={styles.aside}>
      <nav>
        <ul className={styles.sidebar_nav_items}>
          <li className={styles.nav_item} onClick={() => navigate("/")}>
            <i className={`fa-sharp fa-solid fa-house ${styles.nav_icons}`}></i>
            <div className={styles.nav_item_description}>Home</div>
          </li>
          <li className={styles.nav_item} onClick={() => navigate("/liked")}>
            <i
              className={`fa-regular fa-solid fa-thumbs-up ${styles.nav_icons}`}
            ></i>
            <div className={styles.nav_item_description}>Liked</div>
          </li>
          <li className={styles.nav_item} onClick={() => navigate("/history")}>
            <i className={`fa-solid fa-clock ${styles.nav_icons}`}></i>
            <div className={styles.nav_item_description}> History</div>
          </li>
          <li className={styles.nav_item} onClick={() => navigate("/later")}>
            <i className={`fa-solid fa-bookmark ${styles.nav_icons}`}></i>
            <div className={styles.nav_item_description}>watch later</div>
          </li>
          <li className={styles.nav_item} onClick={() => navigate("/playlist")}>
            <i className={`fa-solid fa-folder-plus ${styles.nav_icons}`}></i>
            <div className={styles.nav_item_description}>Playlist</div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
