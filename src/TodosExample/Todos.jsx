import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("Todos RENDER");

  return (
    <div>
      {todos.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
      <button onClick={addTodo}>Add task</button>
    </div>
  );
};

export const TodosMemo = memo(Todos); // not useMemo
