import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { Home, Posts, SignIn, NotFound, PostsSearch } from "../pages";
import {
  NOT_FOUND,
  SIGN_IN,
  POSTS,
  HOME,
  POSTS_SEARCH,
} from "../constants/routes";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path={POSTS}
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
          <Route
            path={POSTS_SEARCH}
            element={
              <PrivateRoute>
                <PostsSearch />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path={SIGN_IN} element={<SignIn />} />

        <Route path={NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
