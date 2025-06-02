import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTweets } from "../reducers/tweets";
function LastTweets() {
  const dispatch = useDispatch();
  const hashtag = useSelector((state) => state.hashtag.value);
  const tweets = useSelector((state) => state.tweets.value);
  const [errorMessage, setErrorMessage] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    fetch(`${apiUrl}/tweets/getTweets`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(setTweets(data.tweets));
        } else {
          setErrorMessage(data.error);
        }
      });
  }, []);

  let tweetList;
  if (tweets.length > 0) {
    if (hashtag) {
      const filteredTweets = tweets.filter(
        (tweet) =>
          Array.isArray(tweet.hashtag) &&
          tweet.hashtag.some((tag) =>
            tag.toLowerCase().includes(hashtag.toLowerCase())
          )
      );
      tweetList = filteredTweets.map((item, index) => (
        <Tweet {...item} key={index} />
      ));
    } else {
      tweetList = tweets.map((item, index) => <Tweet {...item} key={index} />);
    }
    tweetList.reverse();
  } else {
    tweetList = (
      <p style={{ marginLeft: "15px" }}>No tweets found with #hashtagname</p>
    );
  }
  return (
    <div>
      {errorMessage && (
        <p style={{ color: "red", marginLeft: "15px" }}>{errorMessage}</p>
      )}
      {tweetList}
    </div>
  );
}

export default LastTweets;
