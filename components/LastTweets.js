import Tweet from "./Tweet";
function LastTweets() {
  const tweets = [
    {
      firstname: "antoine",
      username: "AntoineLeProf",
      content: "ok c'est genial #super",
      date: "5 hours",
      like: 0,
    },
    {
      firstname: "antoine",
      username: "AntoineLeProf",
      content: "ok c'est #tropBien 🙂​ first",
      date: "5 hours",
      like: 0,
    },
  ];
  const tweetList = tweets.map((item, i) => <Tweet {...item} key={i} id={i} />);

  return <div>{tweetList}</div>;
}

export default LastTweets;
