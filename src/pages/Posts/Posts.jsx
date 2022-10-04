import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchPostsAsync } from "../../store/postsStore/postsSlice";
import { PostItem, Title, Search, Dropdown } from "../../components";

const sortItems = [
  { id: 1, name: "Author", value: "author" },
  { id: 2, name: "Title", value: "title" },
  { id: 3, name: "Date", value: "date" },
];

export const Posts = () => {
  const { posts, isLoading, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  const [dropdownValue, setDropdownValue] = useState(sortItems[0].value);

  console.log("dropdownValue", dropdownValue);

  useEffect(() => {
    dispatch(fetchPostsAsync({ ordering: dropdownValue }));
  }, [dispatch, dropdownValue]);

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
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {posts.map(({ id, title, text, image }) => (
          <PostItem key={id} id={id} title={title} text={text} image={image} />
        ))}
      </div>
    </>
  );
};
