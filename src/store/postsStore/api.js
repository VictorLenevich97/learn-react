// Don't use it. Should remove in the future!

import { postsSuccess, postsLoading, postsError } from "./postsReducer";
import { POSTS_LIST } from "../../constants/endpoints";

export const fetchPosts = ({ search, limit = 20 }) => {
  return async (dispatch) => {
    try {
      const queryString = new URLSearchParams({ search, limit }).toString();

      dispatch(postsLoading());

      const response = await fetch(
        `${POSTS_LIST}?${!!search ? queryString : `limit=${limit}`}`
      ).then((res) => res.json());

      dispatch(postsSuccess(response.results));
    } catch (error) {
      dispatch(postsError(error));
    }
  };
};
