import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hashtagsListSlice = createSlice({
  name: "hashtagsList",
  initialState,
  reducers: {
    setHashtagsList: (state, action) => {
      state.value = action.payload;
    },
    clearHashtagsList: (state, action) => {
      state.value = [];
    },
  },
});

export const { setHashtagsList, clearHashtagsList } = hashtagsListSlice.actions;
export default hashtagsListSlice.reducer;
