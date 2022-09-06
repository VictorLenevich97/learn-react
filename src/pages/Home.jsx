import { useSearchParams, useNavigate } from "react-router-dom";

export const Home = ({ allowTeams, setAllowTeams }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home page</h2>
      <hr />
      <div style={{ margin: "40px 0" }}>
        <span>Is allow teams: {allowTeams ? "Yes" : "No"}</span>{" "}
        <button
          onClick={() => {
            if (allowTeams) {
              setAllowTeams(false);
            } else {
              setAllowTeams(true);
            }
          }}
        >
          {allowTeams ? "Don`t show page" : "Show page"}
        </button>
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
    </div>
  );
};
