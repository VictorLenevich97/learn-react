import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";

import { activateAsync } from "../../store/authStore/authSlice";

export const Activate = () => {
  const { uid, token } = useParams();
  const dispatch = useDispatch();
  const { isActivationLoading, activationStatus } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    dispatch(activateAsync({ uid, token }));
  }, [dispatch, uid, token]);

  return (
    <div className="bg-blue-500 w-full h-screen flex items-center justify-center text-white text-2xl">
      {isActivationLoading ? (
        <div>Loading...</div>
      ) : activationStatus === "active" ? (
        <div>
          <span>You are active!</span>
          <Link
            className="block bg-indigo-700 text-center mt-5 py-3 rounded-sm"
            to={SIGN_IN}
          >
            {" "}
            Go to login
          </Link>
        </div>
      ) : (
        <div>Smth happens :( Please try later</div>
      )}
    </div>
  );
};

//http://studapi.teachmeskills.by//activate/ODI4/bd58f2-135ab864c3d113a0186ec6d8fbe05207
