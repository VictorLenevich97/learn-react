import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetailAsync } from "../../store/postsStore/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { PostItem, BackStep } from "../../components";

export const PostDetail = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { postDetail, isLoading, error } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchPostDetailAsync({ postId }));
  }, [dispatch, postId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{"Something happens :("}</div>;
  }

  return (
    <div>
      <BackStep content="Show all posts" />
      {postDetail ? (
        <PostItem
          id={postDetail.id}
          title={postDetail.title}
          text={postDetail.text}
          image={postDetail.image}
        />
      ) : (
        <div>No data yet :</div>
      )}
    </div>
  );
};
