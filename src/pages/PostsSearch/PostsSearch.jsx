import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { initPostsAsync } from "../../store/postsStore/postsSlice";
import { PostItem, Title, BackStep } from "../../components";

export const PostsSearch = () => {
  const { posts, isLoading, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const searchValue = params.get("value");

  useEffect(() => {
    dispatch(
      initPostsAsync({ params: { search: searchValue }, isShowLoader: true })
    );
  }, [dispatch, searchValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{"Something happens :("}</div>;
  }

  return (
    <div>
      <BackStep content="Back" />

      <div className="mb-5">
        <Title content={`Search resuls ${searchValue}`} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {posts.map(({ id, title, text, image }) => (
          <PostItem key={id} id={id} title={title} text={text} image={image} />
        ))}
      </div>
    </div>
  );
};
