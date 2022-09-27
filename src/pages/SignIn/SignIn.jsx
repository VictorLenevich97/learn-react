import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInAsync } from "../../store/authStore/authSlice";
import { HOME } from "../../constants/routes";

import { Title } from "../../components";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.auth.isAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isInvalidForm, setIsInvalidForm] = useState(false);

  useEffect(() => {
    if (isAuth) {
      navigate(HOME);
    }
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signInAsync({ email, password }));
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-gray-100 p-14">
      <Title content="Sign in" />
      <form
        className="p-6 mt-10 bg-gray-100 border border-gray-300"
        onSubmit={handleSubmit}
      >
        <label>
          <p className="text-md pb-1"> Email:</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="w-full mb-5 border border-gray-300"
          />
        </label>
        <label>
          <p className="text-md pb-1">Password:</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
            className="w-full mb-5 border border-gray-300"
          />
        </label>
        <button className="w-full py-2 bg-blue-600 text-white">Sign in</button>
        {isInvalidForm && <p>User data is invalid</p>}
      </form>
    </div>
  );
};
