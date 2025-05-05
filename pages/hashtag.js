import Head from "next/head";
import Hashtag from "../components/Hashtag";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function hashtag() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  if (!user.token) {
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>recherche de trend</title>
      </Head>
      <Hashtag />
    </>
  );
}

export default hashtag;
