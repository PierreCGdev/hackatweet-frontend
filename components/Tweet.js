import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setHashtag } from "../reducers/hashtags";

function Tweet(props) {
  const dispatch = useDispatch();
  const [islike, setIslike] = useState(false);
  const [likeCount, setLikeCount] = useState(props.like);

  const contentArray = props.content.split(" ");
  //prévoir changement de pages au click
  const hastageToUpper = (
    <span>
      {contentArray.map((e, index) =>
        e.match(/#[\wÀ-ÿ]+/g) ? (
          <a
            key={index}
            className={styles.aLink}
            onClick={() => dispatch(setHashtag(e))}
          >
            {e + " "}
          </a>
        ) : (
          <span key={index}>{e + " "} </span>
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
        <span className={styles.firstnameText}>{props.firstname}</span>
        <span
          className={styles.usernameText}
        >{`#${props.username} - ${props.date}`}</span>
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
