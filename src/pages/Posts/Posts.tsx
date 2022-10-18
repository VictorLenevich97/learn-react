import { useEffect, useState } from "react";
import { initPostsAsync } from "../../store/postsStore/postsSlice";
import {
  PostItem,
  Title,
  Search,
  Dropdown,
  Pagination,
} from "../../components";
import { POSTS_LIMIT } from "../../constants/common";
import { useStore } from "../../hooks/useStore/useStore";

const sortItems = [
  { id: 1, name: "Author", value: "author" },
  { id: 2, name: "Title", value: "title" },
  { id: 3, name: "Date", value: "date" },
];

export const Posts = () => {
  const { store, dispatch } = useStore();
  const { posts, isLoading, error, postsCount } = store.posts;

  const [offset, setOffset] = useState(0);
  const [ordering, setOrdering] = useState(sortItems[0].value); // Should check it
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(initPostsAsync({ params: {}, isShowLoader: true }));
  }, [dispatch]);

  useEffect(() => {
    if (offset !== 0) {
      dispatch(
        initPostsAsync({ params: { offset, ordering }, isShowLoader: false })
      );
    }
  }, [dispatch, offset]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{"Something happens :("}</div>;
  }

  return (
    <>
      <div className="text-center mb-5">
        <Title content="Posts list" />
      </div>

      <div className="flex justify-center">
        <Search />
      </div>

      <div>
        <Dropdown
          title="Sort by"
          items={sortItems}
          onSelect={(value) => {
            dispatch(
              initPostsAsync({
                params: { limit: posts.length, ordering: value },
                isShowLoader: false,
              })
            );
            setOrdering(value);
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {posts.map(({ id, title, text, image }) => (
          <PostItem key={id} id={id} title={title} text={text} image={image} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Pagination
          onNext={() => {
            setPage(page + 1);
            setOffset(page * POSTS_LIMIT);
          }}
          onPrev={() => {
            setPage(page - 1);
            setOffset((page - 2) * POSTS_LIMIT);
          }}
          onPage={(value: number) => {
            setPage(value);
            setOffset((value - 1) * POSTS_LIMIT);
          }}
          currentPage={page}
          pagesCount={Math.ceil(postsCount / POSTS_LIMIT)}
        />
      </div>
    </>
  );
};
