import "../styles/globals.css";
import Head from "next/head";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user.js";
import hashtag from "../reducers/hashtags.js";
import tweets from "../reducers/tweets.js";
import hashtagsList from "../reducers/hashtagsList.js";

const reducers = combineReducers({ user, hashtag, tweets, hashtagsList });
const persistConfig = { key: "HackaTweet", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>HackaTweet</title>
        </Head>
        <meta
          name="description"
          content="HackaTweet vous permet de partager vos idées plus ou moins toxiques au monde entier"
        ></meta>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
