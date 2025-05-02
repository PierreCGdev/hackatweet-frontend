import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/SignIn.module.css";

function SignIn({ handleClickShowSignin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.form}>
        <div className={styles.x_container}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClickShowSignin}
            className={styles.x_close}
          />
        </div>
        <img
          src="/tweeter-logo.png"
          alt="logo-tweeter"
          className={styles.logo}
        />
        <p style={{ fontSize: "24px" }}>Create your Hackatweet account</p>
        <div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            className={styles.input}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className={styles.input}
          />
        </div>
        <button
          className={styles.btn_signin}
          onClick={() => {
            handleSignUp();
            handleClickShowSignin();
          }}
        >
          Signin
        </button>
      </div>
    </div>
  );
}

export default SignIn;
