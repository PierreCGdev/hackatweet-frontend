import styles from "../styles/LeftContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { clearHashtag } from "../reducers/hashtags";
import Button from "./Button.js";

function leftContent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const hashtag = useSelector((state) => state.hashtag.value);
  const user = useSelector((state) => state.user.value);
  const handleLogout = () => {
    dispatch(clearHashtag());
    dispatch(logout());
    router.push("/login");
  };

  const handleHome = () => {
    dispatch(clearHashtag());
  };

  return (
    <div className={styles.leftContent}>
      <Link href={"/home"}>
        <img
          onClick={handleHome}
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
            <p className={styles.firstnameText}>{user.firstname}</p>
            <p className={styles.usernameText}>{user.username}</p>
          </div>
        </div>
        <Button
          color={"white"}
          bgColor={"#0F1419"}
          border={"white solid 1px"}
          fontWeight={400}
          text={"Logout"}
          handleClick={handleLogout}
          paddingHorizontal={25}
        />
      </div>
    </div>
  );
}

export default leftContent;
