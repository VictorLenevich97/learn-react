import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";

import { Account, Home, Teams, Settings, TeamDetail } from "./pages";

function App() {
  const [allowTeams, setAllowTeams] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home allowTeams={allowTeams} setAllowTeams={setAllowTeams} />
            }
          />
          <Route path="teams" element={<Teams allowTeams={allowTeams} />} />
          <Route
            path="/teams/:teamId/:teamName/show"
            element={<TeamDetail />}
          />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
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
}

export default App;
