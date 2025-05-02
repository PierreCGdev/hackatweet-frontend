import Tweet from "./Tweet";
function LastTweets({ hastag }) {
  // à remplacer par un fetch des X derniers tweets peut être prévoir un scrolling
  const tweets = [
    {
      firstname: "antoine",
      username: "AntoineLeProf",
      content: "ok c'est genial #super",
      date: "5 hours",
      like: 0,
      hastag: ["#super"],
    },
    {
      firstname: "antoine",
      username: "AntoineLeProf",
      content: "ok c'est #tropBien 🙂​ first",
      date: "5 hours",
      like: 0,
      hastag: ["#tropBien"],
    },
    {
      firstname: "antoinefdsf",
      username: "AntoineLeProffdsfsd",
      content: "ok c'est #tropBien 🙂​ first #super",
      date: "5 hours",
      like: 0,
      hastag: ["#tropBien", "#super"],
    },
  ];

  //permet de filter ou nom avec un prop hastag
  let tweetList;
  if (hastag) {
    const filterTweets = tweets.filter((tweet) =>
      tweet.hastag.some((tag) => hastag.includes(tag))
    );
    tweetList = filterTweets.map((item, index) => (
      <Tweet {...item} key={index} />
    ));
  } else {
    tweetList = tweets.map((item, index) => <Tweet {...item} key={index} />);
  }

  return (
    <div
      style={{ overflowY: "auto", maxHeight: "80vh", scrollMarginBlock: "0" }}
    >
      {tweetList}
    </div>
  );
}

export default LastTweets;
