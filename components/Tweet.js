import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Tweet({ firstname, username, content, date, like, id }) {
  const [islike, setIslike] = useState(false);
  const [likeCount, setLikeCount] = useState(like);

  const contentArray = content.split(" ");
  const hastageToUpper = (
    <span>
      {contentArray.map((e) =>
        e.match(/#[\wÀ-ÿ]+/g) ? (
          <a className={styles.aLink}>{e + " "}</a>
        ) : (
          <span>{e + " "} </span>
        )
      )}
    </span>
  );

  const handleLike = () => {
    if (islike) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIslike(!islike);
  };

  const styleLike = islike ? { color: "#F71672" } : {};
  return (
    <div className={styles.tweetContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img src="/egg.jpg" alt="logo twitter" className={styles.iconUser} />
        <span className={styles.firstnameText}>{firstname}</span>
        <span className={styles.usernameText}>{`#${username} - ${date}`}</span>
      </div>
      <p style={{ margin: "15px 0px" }}>{hastageToUpper}</p>
      <span>
        <a onClick={handleLike} className={styles.iconButton}>
          <FontAwesomeIcon style={styleLike} icon={faHeart} />
        </a>
        <span style={{ ...styleLike, marginLeft: "10px" }}>{likeCount}</span>
        <a className={styles.iconButton}>
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faTrash} />
        </a>
      </span>
    </div>
  );
}

export default Tweet;
