import styles from "../styles/Trends.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setHashtag } from "../reducers/hashtags.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Trends() {
  const dispatch = useDispatch();
  const hashtagsList = useSelector((state) => state.hashtagsList.value);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  // a remplacer par un fetch des hastags, ils seront sous la forme de tableau

  const trendsList = hashtagsList.map((item, index) => {
    const plurial = item.numberTweet > 1 ? "Tweets" : "Tweet";
    //prévoir changement de pages au click
    return (
      <div className={styles.trendList} key={index}>
        <a
          className={styles.firstnameText}
          onClick={() => {
            dispatch(setHashtag(item.hashtag));
            router.push(`/hashtag/${item.hashtag.slice(1)}`);
          }}
        >
          {item.hashtag}
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
