import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/SignUp.module.css";

function SignUp({ handleClickShowSignup }) {
  const [firstname, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.result
          ? { result: true, token: data.token }
          : { result: false, error: data.error };
      });
  };

  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.form}>
        <div className={styles.x_container}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClickShowSignup}
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
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
            placeholder="Firstname"
            className={styles.input}
          />
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
          className={styles.btn_signup}
          onClick={() => {
            handleSignUp();
            handleClickShowSignup();
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default SignUp;
