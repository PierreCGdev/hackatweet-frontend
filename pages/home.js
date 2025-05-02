import Home from "../components/Home";
import Head from "next/head";

function Index() {
  return (
    <>
      <head>
        <title>Home Hackatweet</title>
        <meta
          name="description"
          content="Hackatweet vous permet de partager vos idées plus ou moins toxique au monde entier"
        ></meta>
      </head>
      <Home />
    </>
  );
}

export default Index;
