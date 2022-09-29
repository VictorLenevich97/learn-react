import { useDispatch } from "react-redux";
import { signInAsync, logout } from "../../store/authStore/authSlice";
import { SIGN_IN } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants/common";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(signInAsync({ email, password }));
  };

  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    dispatch(logout());

    navigate(SIGN_IN);
  };

  return { onLogin, onLogout };
};
