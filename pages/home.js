import Home from "../components/Home";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
function home() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  if (!user.token) {
    router.push("/");
  }
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
