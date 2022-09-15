import { NavLink } from "react-router-dom";
import { HOME, POSTS } from "../../constants/routes";
import { useDispatch } from "react-redux";
import { logout } from "../../store/mainStore/mainSlice";

import "./header.css";

export const Header = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem("isAuth");
    dispatch(logout());
  };

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
      <button onClick={onLogout} className="header-button">
        Logout
      </button>
    </header>
  );
};
