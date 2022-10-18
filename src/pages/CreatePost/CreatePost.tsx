import { Title, PostItem, Button } from "../../components";
import { addPostAsync } from "../../store/postsStore/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatchType, AppStateType } from "../../store/store";

export const CreatePost = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const { createdPostData, createPostLoading, error } = useSelector(
    (state: AppStateType) => state.posts
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const getValue = (name: string) => e.target[name].value;

    const postFormData = new FormData();

    postFormData.append("title", getValue("title"));
    postFormData.append("lesson_num", getValue("lesson_num"));
    postFormData.append("text", getValue("text"));
    postFormData.append("image", e.target.image.files[0]);

    dispatch(addPostAsync(postFormData));
  };

  if (error) {
    return <div>{"Something happens :("}</div>;
  }

  if (createdPostData) {
    const { id, title, text, image } = createdPostData;

    return (
      <div className="w-full d-flex items-center justify-center">
        <PostItem id={id} title={title} text={text} image={image} />
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-gray-100 p-14">
      <Title content="Create post" />
      <form
        className="p-6 mt-10 bg-gray-100 border border-gray-300"
        onSubmit={handleSubmit}
      >
        <label>
          <p className="text-md pb-1">Image</p>
          <input
            required
            name="image"
            type="file"
            className="w-full mb-5 border border-gray-300"
          />
        </label>
        <label>
          <p className="text-md pb-1">Title</p>
          <input
            required
            name="title"
            className="w-full mb-5 border border-gray-300"
          />
        </label>
        <label>
          <p className="text-md pb-1">Text</p>
          <input
            required
            name="text"
            className="w-full mb-5 border border-gray-300"
          />
        </label>
        <label>
          <p className="text-md pb-1">Lesson number</p>
          <input
            required
            name="lesson_num"
            className="w-full mb-5 border border-gray-300"
          />
        </label>
        <Button className="w-full" isSubmit>
          {createPostLoading ? "Creating post ..." : "Create post"}
        </Button>
      </form>
    </div>
  );
};
