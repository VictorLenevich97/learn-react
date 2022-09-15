import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS_LIST } from "../../constants/endpoints";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(POSTS_LIST).then((res) => res.json());
  return response.results;
});

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const postsSlise = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { postsLoading, postsSuccess, postsError } = postsSlise.actions;

export default postsSlise.reducer;
