import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    settitle: (state, action) => {
      return action.payload;
      // state.body = action.payload;
    },
    resettitle: (state, action) => {
      return initialState;
      // state = action.payload;
    },
  },
});

export const { settitle, resettitle } = titleSlice.actions;

export default titleSlice.reducer;
