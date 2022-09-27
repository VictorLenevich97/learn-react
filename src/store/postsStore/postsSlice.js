import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS_LIST } from "../../constants/endpoints";
import { publicAxios } from "../../utils/axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ search, limit = 20 }, { rejectWithValue }) => {
    try {
      const queryString = new URLSearchParams({ search, limit }).toString();
      const { data } = await publicAxios.get(
        `${POSTS_LIST}?${!!search ? queryString : `limit=${limit}`}`
      );

      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
