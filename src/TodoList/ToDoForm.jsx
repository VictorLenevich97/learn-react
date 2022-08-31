import { useState } from "react";

const generateId = () => Math.floor(Math.random() * 100);

export const ToDoForm = ({ setTodoList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList((prevToDoList) => [
      ...prevToDoList,
      { id: generateId(), name: inputValue },
    ]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};
