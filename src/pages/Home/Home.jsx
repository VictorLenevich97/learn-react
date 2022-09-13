import { useSearchParams, useNavigate } from "react-router-dom";
import { Counter } from "../../components/Counter";

export const Home = () => {
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
