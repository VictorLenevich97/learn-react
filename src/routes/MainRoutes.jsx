import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
// import { PrivateRoute } from "./PrivateRoute";
import {
  Posts,
  SignIn,
  NotFound,
  PostsSearch,
  PostDetail,
  Activate,
  CreatePost,
} from "../pages";
import {
  NOT_FOUND,
  SIGN_IN,
  HOME,
  POSTS_SEARCH,
  POSTS,
  ACTIVATE,
  CREATE_POST,
} from "../constants/routes";

import { useRefreshToken } from "../hooks";

export const MainRoutes = () => {
  useRefreshToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path={POSTS_SEARCH} element={<PostsSearch />} />
          <Route path={`${POSTS}/:postId`} element={<PostDetail />} />
          <Route path={CREATE_POST} element={<CreatePost />} />
        </Route>

        <Route path={`${ACTIVATE}/:uid/:token`} element={<Activate />} />
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
