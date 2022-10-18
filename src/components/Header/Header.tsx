import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGN_IN, CREATE_POST } from "../../constants/routes";
import { fetchUserDetailAsync } from "../../store/userStore/userSlice";
import { useAuth } from "../../hooks";
import { Button } from "../Button/Button";
import { AppStateType, AppDispatchType } from "../../store/store";
import { ButtonTypes } from "../../constants/common";

export const Header = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  const isAuth = useSelector((store: AppStateType) => store.auth.isAuth);
  const userDetail = useSelector(
    (store: AppStateType) => store.user.userDetail
  );

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchUserDetailAsync());
    }
  }, [dispatch, isAuth]);

  return (
    <header className="bg-blue-600 p-4 flex justify-end items-center min-h-[4rem]">
      {isAuth ? (
        <div className="w-full flex justify-between">
          <Button
            theme={ButtonTypes.SECONDARY}
            onClick={() => navigate(CREATE_POST)}
          >
            Create post
          </Button>
          <div>
            <span className="text-md text-white">{userDetail?.username}</span>
            <button
              className="ml-2 px-3 py-2 bg-white text-blue-600 rounded font-medium"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <Button onClick={() => navigate(SIGN_IN)} theme={ButtonTypes.SECONDARY}>
          Login
        </Button>
      )}
    </header>
  );
};
