import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    // à modifier par null
    username: null,
    firstname: null,
    token: null,
    id: null,
    tweet_id: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.token = action.payload.token;
      state.value.id = action.payload.id;
      state.value.tweet_id = action.payload.tweet_id;
    },
    logout: (state) => {
      state.value = {
        username: null,
        token: null,
        firstname: null,
        id: null,
        tweet_id: [],
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
