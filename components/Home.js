import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <img
        src="/background.png"
        alt="background-kackatweet"
        className={styles.bg}
      />
      <img src="/tweeter-logo.png" alt="logo twitter" className={styles.logo} />
      <h1>See what's happening</h1>
      <h2>Join Hackatweet today.</h2>
      <button>Signup</button>
      <button>Signin</button>
    </div>
  );
}

export default Home;
