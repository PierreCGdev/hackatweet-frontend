import styles from "../styles/Hashtag.module.css";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import LeftContent from "./LeftContent";
import { useDispatch, useSelector } from "react-redux";
import { setHashtag } from "../reducers/hashtags.js";

function Home() {
  const hashtag = useSelector((state) => state.hashtag.value);
  const dispatch = useDispatch();

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
                  dispatch(setHashtag(newValue));
                }}
                value={hashtag}
              ></input>
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
