import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/SignIn.module.css";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user.js";
import { useRouter } from "next/router";

function SignIn({ handleClickShowSignin }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignin = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              username: data.username,
              firstname: data.firstname,
              token: data.token,
            })
          );
          router.push("/home");
        } else {
          console.log(data.error);
          setErrorMessage(data.error);
        }
      });
  };

  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.errorMessage}>
        <p>{errorMessage}</p>
      </div>
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
            handleSignin();
          }}
        >
          Signin
        </button>
      </div>
    </div>
  );
}

export default SignIn;
