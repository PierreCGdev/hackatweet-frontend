import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import LeftContent from "./LeftContent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHashtagsList } from "../reducers/hashtagsList";
import { setTweets } from "../reducers/tweets";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const tweets = useSelector((state) => state.tweets.value);
  const [inputText, setInputText] = useState("");
  const [stringLength, setStringLength] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://hackatweet-backend-dusky.vercel.app/trends/all")
      .then((response) => response.json())
      .then((data) => {
        if (inputText === "") {
          if (data.result) {
            dispatch(setHashtagsList(data.trends));
          } else {
            setErrorMessage(data.error);
          }
        }
      });
  }, [inputText]);

  useEffect(() => {
    fetch("https://hackatweet-backend-dusky.vercel.app/tweets/getTweets")
      .then((response) => response.json())
      .then((data) => {
        if (inputText === "") {
          if (data.result) {
            dispatch(setTweets(data.tweets));
          } else {
            setErrorMessage(data.error);
          }
        }
      });
  }, [inputText]);

  const handleNewTweet = () => {
    const textHastag = inputText.match(/#[\wÀ-ÿ]+/g);

    fetch("https://hackatweet-backend-dusky.vercel.app/tweets/postTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        message: inputText,
        hashtag: textHastag,
        user_id: user.id,
        like: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setInputText("");
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
        <LastTweets {...tweets} />
      </div>

      <Trends />
    </div>
  );
}

export default Home;
