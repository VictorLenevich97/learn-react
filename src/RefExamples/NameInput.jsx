import { useRef, useState, useEffect } from "react";

export const NameInput = () => {
  const [name, setName] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addName = () => {
    setName(inputRef.current.value);

    inputRef.current.onblur();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Please enter name" />
      <button onClick={addName}>Show name</button>
      <p>{name}</p>
    </div>
  );
};
