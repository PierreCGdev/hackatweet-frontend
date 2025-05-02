import styles from "../styles/Trends.module.css";
import { useDispatch } from "react-redux";
import { setHashtag } from "../reducers/hashtags";

function Trends() {
  // a remplacer par un fetch des hastags, ils seront sous la forme de tableau
  const dispatch = useDispatch();
  const trendsArray = [
    { hastag: "#super", numberTweet: 3 },
    { hastag: "#bien", numberTweet: 1 },
    { hastag: "#super", numberTweet: 3 },
    { hastag: "#bien", numberTweet: 1 },
  ];
  const trendsList = trendsArray.map((item, index) => {
    const plurial = item.numberTweet > 1 ? "Tweets" : "Tweet";
    //prévoir changement de pages au click
    return (
      <div className={styles.trendList} key={index}>
        <a
          className={styles.firstnameText}
          onClick={() => dispatch(setHashtag(item.hastag))}
        >
          {item.hastag}
        </a>
        <p
          className={styles.usernameText}
        >{`#${item.numberTweet} ${plurial}`}</p>
      </div>
    );
  });
  return (
    <div className={styles.rightContent}>
      <div className={styles.mainContainer}>
        <h3 style={{ paddingLeft: "15px" }}>Trends</h3>
        <div className={styles.trendList}>{trendsList}</div>
      </div>
    </div>
  );
}

export default Trends;
