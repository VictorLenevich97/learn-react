import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authStore/authSlice";
import postsSlice from "./postsStore/postsSlice";
import userReducer from "./userStore/userSlice";

const rootReducers = {
  auth: authSlice,
  posts: postsSlice,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
