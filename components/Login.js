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
        <h1>See what's happening</h1>
        <h2>Join Hackatweet today.</h2>
        <button>Signup</button>
        <span>Already have an account?</span>
        <button>Signin</button>
      </div>
    </div>
  );
}

export default Home;
