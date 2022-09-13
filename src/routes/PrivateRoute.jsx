import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SIGN_IN } from "../constants/routes";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.mainReducer.isAuth);

  if (!isAuth) {
    // redirect
    return <Navigate to={SIGN_IN} />;
  }

  return children;
};
