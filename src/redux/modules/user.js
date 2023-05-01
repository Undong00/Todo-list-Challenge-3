import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    title: "이동언",
    body: "이동언입니다.",
    isDone: false,
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      const newUser = {
        id: uuidv4(),
        title: action.payload.title,
        body: action.payload.body,
        isDone: false,
      };
      state.push(newUser);
    },
    del: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    toggle: (state, action) => {
      const user = state.find((user) => user.id === action.payload);
      if (user) {
        user.isDone = !user.isDone;
      }
    },
  },
});

export const { add, del, toggle } = userSlice.actions;
export default userSlice.reducer;
