import styles from "../styles/Login.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";

function Home() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleClickShowSignup = () => {
    setShowSignUp(!showSignUp);
  };

  const handleClickShowSignin = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className={styles.main}>
      <img
        src="/background.png"
        alt="background-kackatweet"
        className={styles.bg}
      />
      <div className={styles.container}>
        <img
          src="/tweeter-logo.png"
          alt="logo twitter"
          className={styles.logo}
        />
        <h1 style={{ fontSize: "70px" }}>See what's happening</h1>
        <h2 style={{ fontSize: "32px" }}>Join Hackatweet today.</h2>
        <button className={styles.btn_signup} onClick={handleClickShowSignup}>
          Signup
        </button>
        {showSignUp && <SignUp handleClickShowSignup={handleClickShowSignup} />}
        <p>Already have an account?</p>
        <button className={styles.btn_signin} onClick={handleClickShowSignin}>
          Signin
        </button>
        {showSignIn && <SignIn handleClickShowSignin={handleClickShowSignin} />}
      </div>
    </div>
  );
}

export default Home;
