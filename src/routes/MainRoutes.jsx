import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { PrivateRoute } from "./PrivateRoute";

import { Account, Home, Teams, Settings, TeamDetail } from "../pages";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="teams"
            element={
              <PrivateRoute>
                <Teams />
              </PrivateRoute>
            }
          />
          <Route
            path="/teams/:teamId/:teamName/show"
            element={
              <PrivateRoute>
                <TeamDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <div>
              <h2>Not found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
