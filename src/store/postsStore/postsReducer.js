// Example with createReducer. Should remove in the future!

import { createReducer, createAction } from "@reduxjs/toolkit";

export const postsLoading = createAction("POSTS_LOADING");
export const postsSuccess = createAction("POSTS_SUCCESS");
export const postsError = createAction("POSTS_ERROR");

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postsReducer = createReducer(initialState, {
  [postsLoading]: (_) => ({
    isLoading: true,
  }),
  [postsSuccess]: (_, action) => ({
    posts: action.payload,
    isLoading: false,
  }),
  [postsError]: (_, action) => ({
    error: action.payload,
    isLoading: false,
  }),
});

export default postsReducer;
