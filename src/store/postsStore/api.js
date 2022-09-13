import { postsSuccess, postsLoading, postsError } from "./actions";
import { POSTS_LIST } from "../../constants/endpoints";

export const fetchPosts = async (dispatch) => {
  try {
    dispatch(postsLoading());

    const response = await fetch(POSTS_LIST).then((res) => res.json());

    dispatch(postsSuccess(response.results));
  } catch (error) {
    dispatch(postsError(error));
  }
};
