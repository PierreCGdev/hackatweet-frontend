import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import LeftContent from "./LeftContent";
import { useState } from "react";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

function Home() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  if (!user.token) {
    router.push("/login");
  }
  const [inputText, setInputText] = useState("");
  const [stringLength, setStringLength] = useState(0);

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
                <button className={styles.btn_signup}>Tweet</button>
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
