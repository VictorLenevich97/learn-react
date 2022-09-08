import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.css";

export const Header = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const navigate = useNavigate();

  const getStyles = ({ isActive, isPrivate }) => {
    const commonItemStyle = isActive ? "yellow" : "white";

    if (isPrivate) {
      return {
        color: isAuth ? commonItemStyle : "#babdac",
        cursor: !isAuth && "not-allowed",
      };
    } else {
      return {
        color: commonItemStyle,
      };
    }
  };

  return (
    <header className="header-container">
      <NavLink
        className="header-item"
        style={({ isActive }) => getStyles({ isActive, isPrivate: false })}
        to="/"
      >
        Home{" "}
      </NavLink>
      <NavLink
        className="header-item"
        style={({ isActive }) => getStyles({ isActive, isPrivate: true })}
        to="/teams"
      >
        Teams{" "}
      </NavLink>
      <NavLink
        className="header-item"
        style={({ isActive }) => getStyles({ isActive, isPrivate: true })}
        to="/settings"
      >
        Settings{" "}
      </NavLink>
      <NavLink
        className="header-item"
        style={({ isActive }) => getStyles({ isActive, isPrivate: true })}
        to="account"
      >
        Account{" "}
      </NavLink>
      <button
        className="header-button"
        onClick={() => {
          navigate("/account");
        }}
      >
        Show account detail
      </button>
    </header>
  );
};
