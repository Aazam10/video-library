import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <header>
        <nav>
          <ul className={styles.nav_items}>
            <li>
              <h1 onClick={() => navigate("/")}>FootyWorld</h1>
            </li>
            <li className={styles.input_search_wrapper}>
              <div className={styles.input_search}>
                <input type="text" placeholder="search videos" />
                <i
                  className={`fa-solid fa-magnifying-glass ${styles.search_icon}`}
                ></i>
              </div>
            </li>
            <li className={styles.user_wrapper}>
              <div className={styles.user_profile}>
                <i className="fa-solid fa-user"></i>
                <span>Hi User</span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export { Navbar };
