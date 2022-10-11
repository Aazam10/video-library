import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../redux/asyncThunks/authThunk";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./login.module.css";
function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const inputfieldChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const loginFormHandler = (e, user) => {
    e.preventDefault();
    dispatch(userLogin(user));
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from?.pathname || -1, { replace: true });
    }
  });

  return (
    <>
      <Navbar />

      <main className={styles.login_form_container}>
        <h2>Login</h2>
        <form
          onSubmit={(e) => loginFormHandler(e, user)}
          className={styles.login_form}
        >
          <div className={styles.input_group}>
            <label htmlFor="email">
              Email<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              required
              onChange={(e) => inputfieldChangeHandler(e)}
              placeholder="userid@gmail.com"
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="password">
              Password <span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={user.password}
              onChange={(e) => inputfieldChangeHandler(e)}
              placeholder="*******"
            />
          </div>
          <input
            type="button"
            value="Add Guest Credential"
            onClick={() => setUser(guestUser)}
          />
          <input type="submit" name="Login" value="Login" />
        </form>
        <button
          className={styles.new_account_button}
          onClick={() => navigate("/signup")}
        >
          Create New Account
        </button>
      </main>
    </>
  );
}

export { Login };
