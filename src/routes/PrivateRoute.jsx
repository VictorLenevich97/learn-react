import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.isAuth);

  if (!isAuth) {
    // redirect
    return <Navigate to="/" />;
  }

  return children;
};
