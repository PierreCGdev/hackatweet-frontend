import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "",
   };

export const hashtagSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setHashtag: (state, action) =>{
            state.value = action.payload;
        },
    }
})

export const { setHashtag } = hashtagSlice.actions;
export default hashtagSlice.reducer;