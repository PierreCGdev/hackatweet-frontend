import { useRouter } from "next/router";
import Head from "next/head";
import Hashtag from "../../components/Hashtag";

function hashtagPage() {
  const router = useRouter();
  const { hashtagPage } = router.query; // extrait le paramètre dynamique

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
