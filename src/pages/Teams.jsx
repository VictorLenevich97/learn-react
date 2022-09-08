import { mockTeams } from "../mock-data/mock-teams";
import { Link, Outlet } from "react-router-dom";

export const Teams = () => {
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
