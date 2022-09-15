import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/mainStore/mainSlice";

import "./signin.css";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isInvalidForm, setIsInvalidForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockUserName = "admin";
    const mockPassword = "12345";

    if (userName === mockUserName && password === mockPassword) {
      setIsInvalidForm(false);
      dispatch(login());
      localStorage.setItem("isAuth", true);
      navigate("/");
    } else {
      setIsInvalidForm(true);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <label className="signin-item">
          <p> Username:</p>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="username"
          />
        </label>
        <label className="signin-item">
          <p>Password:</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
          />
        </label>
        <button className="signin-button">Sign in</button>
        {isInvalidForm && <p>User data is invalid</p>}
      </form>
    </div>
  );
};
