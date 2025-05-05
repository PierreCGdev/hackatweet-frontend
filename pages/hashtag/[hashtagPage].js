import { useRouter } from "next/router";
import Head from "next/head";
import Hashtag from "../../components/Hashtag";
import { useSelector } from "react-redux";

function hashtagPage() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  const { hashtagPage } = router.query; // extrait le paramètre dynamique
  if (!user.token) {
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>recherche du hastag {hashtagPage}</title>
      </Head>
      <Hashtag />
    </>
  );
}

export default hashtagPage;
