import { useState, useEffect } from "react";

export const ShowAlert = () => {
  const [show, setShowAlert] = useState(false);

  useEffect(() => {
    if (show) {
      alert("Hello I`m alert");
    }
  }, [show]);

  return (
    <div>
      <button onClick={() => setShowAlert(!show)}>Show alert</button>
    </div>
  );
};
