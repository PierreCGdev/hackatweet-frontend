import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    tweets: [],
  },
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweets: (state, action) => {
      state.value = action.payload;
    },
    removeTweets: (state, action) => {
      state.value = state.value.filter((tweet) => tweet._id !== action.payload);
    },
  },
});

export const { setTweets, removeTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
