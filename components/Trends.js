import styles from "../styles/Trends.module.css";

function Trends(props) {
  const trendsArray = [
    { hastag: "super", numberTweet: 3 },
    { hastag: "bien", numberTweet: 1 },
  ];
  const trendsList = trendsArray.map((item) => {
    const plurial = item.numberTweet > 1 ? "Tweets" : "Tweet";
    return (
      <div className={styles.trendList}>
        <p className={styles.firstnameText}>{item.hastag}</p>
        <p
          className={styles.usernameText}
        >{`#${item.numberTweet} ${plurial}`}</p>
      </div>
    );
  });
  return (
    <div className={styles.leftContainer}>
      <h3 style={{ paddingLeft: "15px" }}>Trends</h3>
      <div className={styles.trendList}>{trendsList}</div>
    </div>
  );
}

export default Trends;
