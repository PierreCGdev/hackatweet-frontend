import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTweets } from "../reducers/tweets";
function LastTweets() {
  const dispatch = useDispatch();
  const hashtag = useSelector((state) => state.hashtag.value);
  const tweets = useSelector((state) => state.tweets.value);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://hackatweet-backend-dusky.vercel.app/tweets/getTweets")
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log("Tweets", data.tweets);
          dispatch(setTweets(data.tweets));
        } else {
          setErrorMessage(data.error);
        }
      });
  }, []);
  // à remplacer par un fetch des X derniers tweets peut être prévoir un scrolling

  //permet de filter ou nom avec un prop hashtag
  let tweetList;
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

  tweetList.length < 1 &&
    (tweetList = (
      <p style={{ marginLeft: "15px" }}>No tweets found with #hashtagname</p>
    ));

  return (
    <div
      style={{ overflowY: "auto", maxHeight: "80vh", scrollMarginBlock: "0" }}
    >
      {tweetList}
    </div>
  );
}

export default LastTweets;
