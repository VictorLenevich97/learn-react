import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BLOG_POSTS } from "../../constants/endpoints";
import { privateAxios, publicAxios } from "../../utils/axios";
import { POSTS_LIMIT } from "../../constants/common";
import { createSearchParams } from "react-router-dom";
import { IPost } from "../../types/post";

interface IPostsSliceInitialState {
  isLoading: boolean;
  posts: IPost[];
  postsCount: number;
  postDetail: IPost | null;
  error: any;
  createPostLoading: boolean;
  createdPostData: null | IPost;
}

interface IPostParams<T = number> {
  limit?: T;
  author?: T;
  lesson_num?: T;
  offset?: T;
  ordering?: string;
  search?: string;
}

export const initPostsAsync = createAsyncThunk(
  "posts/initPostsAsync",
  async (
    { params, isShowLoader }: { params: IPostParams; isShowLoader: boolean },
    { rejectWithValue }
  ) => {
    try {
      let queryParams: IPostParams = {
        limit: POSTS_LIMIT,
      };

      if (params) {
        queryParams = { ...queryParams, ...params };
      }

      const { data } = await publicAxios.get(
        `${BLOG_POSTS}?${createSearchParams(queryParams as any)}`
      );

      return { data, isShowLoader };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchPostDetailAsync = createAsyncThunk(
  "post/fetchPostDetailAsync",
  async ({ postId }: { postId: number }, { rejectWithValue }) => {
    try {
      const { data } = await publicAxios.get(`${BLOG_POSTS}/${postId}/`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addPostAsync = createAsyncThunk(
  "post/addPostAsync",
  async (body: any, { rejectWithValue }) => {
    try {
      const { data } = await privateAxios.post(BLOG_POSTS, body, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IPostsSliceInitialState = {
  isLoading: false,
  posts: [],
  postsCount: 0,
  postDetail: null,
  createPostLoading: false,
  createdPostData: null,
  error: null,
};

const postsSlise = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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

    [addPostAsync.pending.type]: (state) => {
      state.createPostLoading = true;
    },
    [addPostAsync.fulfilled.type]: (state, { payload }) => {
      state.createPostLoading = false;
      state.createdPostData = payload;
    },
    [addPostAsync.rejected.type]: (state, action) => {
      state.createPostLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlise.reducer;
