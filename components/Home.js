import styles from "../styles/Home.module.css";
import Image from "next/image";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.leftContent}>
        <img
          src="/tweeter-logo.png"
          alt="logo twitter"
          className={(styles.logo, styles.egg)}
        />
        <div className={styles.leftBottom}>
          <div>
            <img src="/egg.jpg" alt="logo twitter" className={styles.logo} />
            {/* <p className={styles.firstnameText}>name</p>
            <p className={styles.usernameText}>username</p> */}
          </div>
          <button>Logout</button>
        </div>
      </div>

      <div className={styles.content}>
        <img
          src="/tweeter-logo.png"
          alt="logo twitter"
          className={styles.logo}
        />
        <h1>See what's happening</h1>
        <h2>Join Hackatweet today.</h2>
        <button>Signup</button>
        <span>Already have an account?</span>
        <button>Signin</button>
      </div>
      <div className={styles.rightContent}>right</div>
    </div>
  );
}

export default Home;
