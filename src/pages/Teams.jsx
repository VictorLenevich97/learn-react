import { mockTeams } from "../mock-data/mock-teams";
import { useLayoutEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Teams = ({ allowTeams }) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!allowTeams) {
      navigate("/");
    }
  }, [allowTeams]);

  return (
    <div>
      <ul>
        {mockTeams.map(({ id, name, email }) => (
          <li key={id}>
            <Link to={`/teams/${id}/${name}/show`}>{name}</Link>
            <p>{email}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
