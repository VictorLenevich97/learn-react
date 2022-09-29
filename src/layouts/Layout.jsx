import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
