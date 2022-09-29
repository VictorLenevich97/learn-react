import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchPostsAsync } from "../../store/postsStore/postsSlice";
import { PostItem, Title } from "../../components";

export const Posts = () => {
  const { posts, isLoading, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync({}));
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{"Something happens :("}</div>;
  }

  return (
    <>
      <div className="mb-5">
        <Title content="Posts list" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {posts.map(({ id, title, text }) => (
          <PostItem key={id} title={title} text={text} />
        ))}
      </div>
    </>
  );
};
