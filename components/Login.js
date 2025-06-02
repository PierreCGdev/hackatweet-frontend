import styles from "../styles/Login.module.css";
import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user.js";
import { useRouter } from "next/router";
import ModalSign from "./ModalSign";

function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleSignin = () => {
    fetch(`${apiUrl}/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: data.firstname,
              username: username,
              token: data.token,
              id: data.id,
              tweet_id: data.tweet_id,
            })
          );
          router.push("/home");
        } else {
          setErrorMessage(data.error);
        }
      });
  };

  const handleSignUp = () => {
    fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              username: username,
              firstname: firstname,
              token: data.token,
              id: data.id,
              tweet_id: data.tweet_id,
            })
          );
          router.push("/home");
        } else {
          setErrorMessage(data.error);
        }
      });
  };

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
        <h1 style={{ fontSize: "90px" }}>See what's happening</h1>
        <h2 style={{ fontSize: "41px", margin: "40px 0" }}>
          Join Hackatweet today.
        </h2>
        <Button
          color={"white"}
          text={"Sign up"}
          handleClick={handleClickShowSignup}
          bgColor={"#1d9bf0"}
          border={"none"}
          fontWeight={900}
          paddingHorizontal={80}
        />

        {showSignUp && (
          <ModalSign
            title={"Create your Hackatweet account"}
            handleClickClose={handleClickShowSignup}
            handleSign={handleSignUp}
            firstname={firstname}
            setFirstName={setFirstName}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            firstNameVisible={true}
          />
        )}
        <p style={{ margin: "20px 0  " }}>Already have an account?</p>

        <Button
          color={"#206bf7"}
          text={"Sign in"}
          handleClick={handleClickShowSignin}
          bgColor={"#0F1419"}
          border={"white solid 1px"}
          fontWeight={900}
          paddingHorizontal={80}
        />
        {showSignIn && (
          <ModalSign
            title={"Connect to Hackatweet"}
            handleClickClose={handleClickShowSignin}
            handleSign={handleSignin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
