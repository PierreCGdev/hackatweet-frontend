import Home from "../components/Home";
import Head from "next/head";

function home() {
  return (
    <>
      <Head>
        <title>accueil HackaTweet</title>
      </Head>
      <Home />
    </>
  );
}

export default home;
