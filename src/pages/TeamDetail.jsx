import { useParams } from "react-router-dom";

import { mockTeams } from "../mock-data/mock-teams";

export const TeamDetail = () => {
  const params = useParams();

  const currentData = mockTeams.find(({ id }) => id === +params.teamId);

  return (
    <div>
      <h2>{currentData?.name}</h2>
      <p>{currentData?.email}</p>
      <span>{currentData?.detail}</span>
    </div>
  );
};
