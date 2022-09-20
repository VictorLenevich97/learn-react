import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./mainStore/mainSlice";
import postsSlice from "./postsStore/postsSlice";
// import postsReducer from "./postsStore/postsReducer";

const rootReducers = {
  main: mainSlice,
  posts: postsSlice,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
