import { useContext } from "react";

import { UserContext } from "./Container";

export const UserInfo = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <div>
      <p onClick={() => setUserName("no name")}>{userName}</p>
    </div>
  );
};
