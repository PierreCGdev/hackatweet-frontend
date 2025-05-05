import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHashtag } from "../reducers/hashtags.js";
import { removeTweets } from "../reducers/tweets.js";
import { useRouter } from "next/router";

function Tweet(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const hashtag = useSelector((state) => state.hashtag.value);
  const user = useSelector((state) => state.user.value);
  const [islike, setIslike] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likes);

  const handleDelete = () => {
    fetch(
      `https://hackatweet-backend-dusky.vercel.app/tweets/deleteTweet/${props._id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(removeTweets(props._id));
        }
      });
  };

  const contentArray = props.message.split(" ");
  //prévoir changement de pages au click
  const hastageToUpper = (
    <span>
      {contentArray.map((e, index) =>
        e.match(/#[\wÀ-ÿ]+/g) ? (
          <a
            key={index}
            className={styles.aLink}
            onClick={() => {
              dispatch(setHashtag(e));
              router.push(`/hashtag/${e.slice(1)}`);
            }}
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
  //prévoir handle suppression du tweet
  const trashIcon = props.user_id?.username === user.username && (
    <a className={styles.iconButton}>
      <FontAwesomeIcon
        style={{ marginLeft: "10px" }}
        icon={faTrash}
        onClick={handleDelete}
      />
    </a>
  );
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
        <span className={styles.firstnameText}>{props.user_id?.firstname}</span>
        <span
          className={styles.usernameText}
          style={{ marginLeft: "5px" }}
        >{`@${props.user_id?.username} • ${props.countdown}`}</span>
      </div>
      <p style={{ margin: "15px 0px" }}>{hastageToUpper}</p>
      <span>
        <a onClick={handleLike} className={styles.iconButton}>
          <FontAwesomeIcon style={styleLike} icon={faHeart} />
        </a>
        <span style={{ ...styleLike, marginLeft: "10px" }}>{likeCount}</span>
        {trashIcon}
      </span>
    </div>
  );
}

export default Tweet;
