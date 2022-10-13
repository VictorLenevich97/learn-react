import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authStore/authSlice";
import postsSlice from "./postsStore/postsSlice";
import userReducer from "./userStore/userSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  posts: postsSlice,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatchType = typeof store.dispatch;
export type AppStateType = ReturnType<typeof rootReducer>;
