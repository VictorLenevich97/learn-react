import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authStore/authSlice";
import postsSlice from "./postsStore/postsSlice";

const rootReducers = {
  auth: authSlice,
  posts: postsSlice,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
