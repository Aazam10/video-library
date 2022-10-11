import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { signupUser } from "../../redux/asyncThunks/authThunk";
import styles from "../Login/login.module.css";
const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const inputfieldChangeHandler = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signupFormHandler = (e, user) => {
    e.preventDefault();
    dispatch(signupUser(user));
  };
  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  });
  return (
    <>
      <Navbar />
      <main className={styles.login_form_container}>
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => signupFormHandler(e, user)}
          className={styles.login_form}
        >
          <div className={styles.input_group}>
            <label htmlFor="firstname">
              First Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={(e) => inputfieldChangeHandler(e)}
              value={user.firstname}
              required
              placeholder="Enter Your First Name"
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="lastname">
              Last Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={(e) => inputfieldChangeHandler(e)}
              value={user.lastname}
              placeholder="Enter Your Last Name"
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="email">
              Email Id<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => inputfieldChangeHandler(e)}
              value={user.email}
              placeholder="userId@gmail.com"
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="password">
              Password<span className={styles.required}>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => inputfieldChangeHandler(e)}
              value={user.password}
              placeholder="*******"
              required
            />
          </div>
          <input type="submit" name="Signup" value="SignUp" />
        </form>
        <button
          className={styles.new_account_button}
          onClick={() => navigate("/signup")}
        >
          Already Have An Account
        </button>
      </main>
    </>
  );
};

export { Signup };
