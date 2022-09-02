import React, { useState } from "react";
import { UserWrapper } from "./UserWrapper";

export const UserContext = React.createContext({
  userName: "",
  setUserName: () => null,
});

export const Container = () => {
  const [userName, setUserName] = useState("Nick Lybovich");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <div>
        <UserWrapper />
      </div>
    </UserContext.Provider>
  );
};
