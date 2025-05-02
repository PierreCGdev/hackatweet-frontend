import Home from "../components/Home";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Home Hackatweet</title>
        <meta
          name="description"
          content="Hackatweet vous permet de partager vos idées plus ou moins toxique au monde entier"
        ></meta>
      </Head>
      <Home />
    </>
  );
}

export default Index;
