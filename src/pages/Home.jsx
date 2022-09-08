import { useSearchParams, useNavigate } from "react-router-dom";
import { Counter } from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";

import { login, logout } from "../store/rootStore/actions";

export const Home = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Home page</h2>
        <div>
          <span>Is allow teams: {isAuth ? "Is auth" : "No auth"}</span>{" "}
          <button
            onClick={() => {
              if (isAuth) {
                dispatch(logout());
              } else {
                dispatch(login());
              }
            }}
          >
            {isAuth ? "Logout" : "Login"}
          </button>
        </div>
      </div>
      <hr />
      <div>
        <input
          onChange={(e) => {
            navigate(`/?search=${e.target.value}`);
          }}
        />
        <button>Search</button>
      </div>
      <p>Search resuls: {searchParams.get("search")}</p>

      <Counter />
    </div>
  );
};
