import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchPostsAsync } from "../../store/postsStore/postsSlice";

// import { fetchPosts } from "../../store/postsStore/api";

export const PostsSearch = () => {
  const { posts, isLoading, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const searchValue = params.get("value");

  useEffect(() => {
    dispatch(fetchPostsAsync({ search: searchValue }));
  }, [dispatch, searchValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{"Something happens :("}</div>;
  }

  return (
    <div>
      <h1>Search resuls {searchValue}</h1>
      {posts.map(({ id, title, text }) => (
        <div key={id}>
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};
