import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import LeftContent from "./LeftContent";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  const [inputText, setInputText] = useState("");
  const [stringLength, setStringLength] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewTweet = () => {
    console.log(user.id);
    fetch("http://localhost:3000/tweets/postTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        message: inputText,
        user_id: user.id,
        like: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
        } else {
          setErrorMessage(data.error);
        }
      });
  };

  return (
    <div className={styles.main}>
      <LeftContent />
      <div className={styles.middleContent}>
        <div style={{ paddingBottom: "30px" }}>
          <div>
            <h3 style={{ paddingLeft: "15px" }}>Home</h3>
            <div className={styles.newTweetContainer}>
              <textarea
                maxLength="280"
                className={`${
                  inputText ? styles.tweetInput : styles.tweetPlaceholder
                }`}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setInputText(newValue);
                  setStringLength(newValue.length);
                }}
                value={inputText}
                placeholder="What's up?"
              ></textarea>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <p style={{ marginRight: "10px" }}>
                  <span>{stringLength}</span>/280
                </p>
                <button className={styles.btn_signup} onClick={handleNewTweet}>
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <LastTweets />
      </div>

      <Trends />
    </div>
  );
}

export default Home;
