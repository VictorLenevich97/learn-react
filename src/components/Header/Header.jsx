import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";
import { logout } from "../../store/authStore/authSlice";
// import { Search } from "../Search/Search";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.auth.isAuth);

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());

    navigate(SIGN_IN);
  };

  return (
    <header className="bg-blue-600 p-4 flex justify-end items-center min-h-[4rem]">
      {isAuth ? (
        <span className="text-md text-white">User name</span>
      ) : (
        <Link
          className="px-3 py-2 bg-white text-blue-600 rounded font-medium"
          to={SIGN_IN}
        >
          Login
        </Link>
      )}

      <button
        className="ml-2 px-3 py-2 bg-white text-blue-600 rounded font-medium"
        onClick={onLogout}
      >
        Logout
      </button>
    </header>
  );
};
