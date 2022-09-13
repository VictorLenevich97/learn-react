import { NavLink } from "react-router-dom";
import { HOME, POSTS } from "../../constants/routes";

import "./header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <NavLink
        className="header-item"
        style={({ isActive }) => ({ color: isActive ? "yellow" : "white" })}
        to={HOME}
      >
        Home{" "}
      </NavLink>
      <NavLink
        className="header-item"
        style={({ isActive }) => ({ color: isActive ? "yellow" : "white" })}
        to={POSTS}
      >
        Posts{" "}
      </NavLink>
    </header>
  );
};
