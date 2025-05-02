import styles from "../styles/Login.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <img
        src="/background.png"
        alt="background-kackatweet"
        className={styles.bg}
      />
      <div className={styles.content}>
        <img
          src="/tweeter-logo.png"
          alt="logo twitter"
          className={styles.logo}
        />
        <h1 style={{ fontSize: "70px" }}>See what's happening</h1>
        <h2 style={{ fontSize: "32px" }}>Join Hackatweet today.</h2>
        <button className={styles.btn_signup}>Signup</button>
        <p>Already have an account?</p>
        <button className={styles.btn_signin}>Signin</button>
      </div>
    </div>
  );
}

export default Home;
