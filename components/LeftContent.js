import styles from "../styles/LeftContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import Link from "next/link";

function leftContent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.leftContent}>
      <Link href={"/home"}>
        <img
          src="/tweeter-logo.png"
          alt="logo twitter"
          className={styles.logo}
        />
      </Link>
      <div>
        <div className={styles.leftBottom}>
          <img src="/egg.jpg" alt="logo twitter" className={styles.icon} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <p className={styles.firstnameText}>
              {user.firstname + "placeholder"}
            </p>
            <p className={styles.usernameText}>
              {user.username + "placeholder"}
            </p>
          </div>
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default leftContent;
