import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const bodySlice = createSlice({
  name: "body",
  initialState,
  reducers: {
    setbody: (state, action) => {
      return action.payload;
      // state.body = action.payload;
    },
    resetbody: (state, action) => {
      return initialState;
      // state = action.payload;
    },
  },
});

export const { setbody, resetbody } = bodySlice.actions;

export default bodySlice.reducer;
