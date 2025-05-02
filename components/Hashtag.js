import styles from "../styles/Hashtag.module.css";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import LeftContent from "./LeftContent";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const hashtags = useSelector((state) => state.hashtags.value);
  const [inputText, setInputText] = useState(hashtags);

  return (
    <div className={styles.main}>
      <LeftContent />
      <div className={styles.middleContent}>
        <div style={{ paddingBottom: "30px" }}>
          <div>
            <h3 style={{ paddingLeft: "15px" }}>Hashtag</h3>
            <div className={styles.newTweetContainer}>
              <input
                className={styles.searchInput}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setInputText(newValue);
                }}
                value={inputText}
              ></input>
            </div>
          </div>
        </div>
        <LastTweets hastag={inputText} />
      </div>
      <Trends />
    </div>
  );
}

export default Home;
