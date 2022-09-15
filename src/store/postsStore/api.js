// Don't use it. Should remove in the future!

import { postsSuccess, postsLoading, postsError } from "./postsSlice";
import { POSTS_LIST } from "../../constants/endpoints";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(postsLoading());

      const response = await fetch(POSTS_LIST).then((res) => res.json());

      dispatch(postsSuccess(response.results));
    } catch (error) {
      dispatch(postsError(error));
    }
  };
};
