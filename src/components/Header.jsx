import { NavLink, useNavigate } from "react-router-dom";

import "./header.css";

export const Header = () => {
  const navigate = useNavigate();

  const getStyles = ({ isActive }) => {
    return {
      color: isActive ? "yellow" : "white",
    };
  };

  return (
    <header className="header-container">
      <NavLink className="header-item" style={getStyles} to="/">
        Home{" "}
      </NavLink>
      <NavLink className="header-item" style={getStyles} to="/teams">
        Teams{" "}
      </NavLink>
      <NavLink className="header-item" style={getStyles} to="/settings">
        Settings{" "}
      </NavLink>
      <NavLink className="header-item" style={getStyles} to="account">
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
