import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";
import { fetchUserDetailAsync } from "../../store/userStore/userSlice";
import { useAuth } from "../../hooks";

// import { Search } from "../Search/Search";

export const Header = () => {
  const dispatch = useDispatch();
  const { onLogout } = useAuth();

  const isAuth = useSelector((store) => store.auth.isAuth);
  const userDetail = useSelector((store) => store.user.userDetail);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchUserDetailAsync());
    }
  }, [dispatch, isAuth]);

  return (
    <header className="bg-blue-600 p-4 flex justify-end items-center min-h-[4rem]">
      {isAuth ? (
        <>
          <span className="text-md text-white">{userDetail?.username}</span>
          <button
            className="ml-2 px-3 py-2 bg-white text-blue-600 rounded font-medium"
            onClick={onLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          className="px-3 py-2 bg-white text-blue-600 rounded font-medium"
          to={SIGN_IN}
        >
          Login
        </Link>
      )}
    </header>
  );
};
