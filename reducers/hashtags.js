import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const hashtagSlice = createSlice({
  name: "hashtag",
  initialState,
  reducers: {
    setHashtag: (state, action) => {
      state.value = action.payload;
    },
    clearHashtag: (state, action) => {
      state.value = null;
    },
  },
});

export const { setHashtag, clearHashtag } = hashtagSlice.actions;
export default hashtagSlice.reducer;
