import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS_LIST } from "../../constants/endpoints";
import { publicAxios } from "../../utils/axios";
import { POSTS_LIMIT } from "../../constants/common";
import { createSearchParams } from "react-router-dom";

export const initPostsAsync = createAsyncThunk(
  "posts/initPostsAsync",
  async ({ params, isShowLoader }, { rejectWithValue }) => {
    try {
      let queryParams = {
        limit: POSTS_LIMIT,
      };

      if (params) {
        queryParams = { ...queryParams, ...params };
      }

      const { data } = await publicAxios.get(
        `${POSTS_LIST}?${createSearchParams(queryParams)}`
      );

      return { data, isShowLoader };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchPostDetailAsync = createAsyncThunk(
  "post/fetchPostDetailAsync",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.get(`${POSTS_LIST}/${postId}/`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  posts: [],
  postsCount: 0,
  postDetail: null,
  error: null,
};

const postsSlise = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [initPostsAsync.pending.type]: (state, action) => {
      state.isLoading = action.meta.arg.isShowLoader;
    },
    [initPostsAsync.fulfilled.type]: (
      state,
      {
        payload: {
          data: { results, count },
        },
      }
    ) => {
      state.isLoading = false;
      state.posts = results;
      state.postsCount = count;
    },
    [initPostsAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchPostDetailAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPostDetailAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.postDetail = action.payload;
    },
    [fetchPostDetailAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { postsLoading, postsSuccess, postsError } = postsSlise.actions;

export default postsSlise.reducer;
