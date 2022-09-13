export const POSTS_LOADING = "POSTS_LOADING";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_ERROR = "POSTS_ERROR";

export const postsLoading = () => ({ type: POSTS_LOADING });
export const postsSuccess = (data) => ({ type: POSTS_SUCCESS, payload: data });
export const postsError = (error) => ({ type: POSTS_ERROR, payload: error });
