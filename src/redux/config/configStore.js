// import { combineReducers, createStore } from "redux";
// import userreducer from "../modules/user";
// import titlereducer from "../modules/title";
// import bodyreducer from "../modules/body";

// const rootReducer = combineReducers({
//   userreducer: userreducer,
//   titlereducer: titlereducer,
//   bodyreducer: bodyreducer,
// });

// const store = createStore(rootReducer);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import title from "../modules/title";
import body from "../modules/body";
import user from "../modules/user";

const store = configureStore({
  reducer: {
    title: title,
    body: body,
    user: user,
    // 다른 리듀서 추가 가능
  },
  // 추가 구성 옵션
});

export default store;

// dux.js:473 Uncaught Error: The slice reducer for key "body" returned undefined during initialization. If the state passed to the reducer is undefined,
