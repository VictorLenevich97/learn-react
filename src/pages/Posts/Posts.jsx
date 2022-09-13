import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/postsStore/api";

export const Posts = () => {
  const { posts, isLoading, error } = useSelector(
    (store) => store.postsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something happens :(</div>;
  }

  return (
    <div>
      {posts.map(({ id, title, text }) => (
        <div key={id}>
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};
