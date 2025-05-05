import Tweet from "./Tweet";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTweets } from "../reducers/tweets";
function LastTweets() {
  const dispatch = useDispatch();
  const hashtag = useSelector((state) => state.hashtag.value);
  const tweetse = useSelector((state) => state.tweets.value);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://hackatweet-backend-two-gamma.vercel.app/tweets/getTweets")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(
            setTweets({
              data,
            })
          );
        } else {
          setErrorMessage(data.error);
        }
      });
  }, []);
  // à remplacer par un fetch des X derniers tweets peut être prévoir un scrolling
  const tweets = [
    {
      firstname: "antoine",
      username: "AntoineLeProf",
      content: "ok c'est genial #super",
      date: "5 hours",
      likes: 0,
      hastag: ["#super"],
    },
    {
      firstname: "antoine",
      username: "AntoineLeProf",
      content: "ok c'est #tropBien 🙂​ first",
      date: "5 hours",
      likes: 0,
      hastag: ["#tropBien"],
    },
    {
      firstname: "antoinefdsf",
      username: "AntoineLeProffdsfsd",
      content: "ok c'est #tropBien 🙂​ first #super",
      date: "5 hours",
      likes: 0,
      hastag: ["#tropBien", "#super"],
    },
  ];

  //permet de filter ou nom avec un prop hastag
  let tweetList;
  if (hashtag) {
    const filterTweets = tweets.filter((tweet) =>
      tweet.hastag.some((tag) =>
        tag.toLowerCase().includes(hashtag.toLowerCase())
      )
    );
    tweetList = filterTweets.map((item, index) => (
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
