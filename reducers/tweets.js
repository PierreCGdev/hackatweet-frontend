import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    tweets: [],
  },
};

export const tweetsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTweets: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { login, logout } = tweetsSlice.actions;
export default userSlice.reducer;
