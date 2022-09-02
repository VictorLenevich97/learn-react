import { useState, useCallback } from "react";
import { TodosMemo } from "./Todos";

export const TodosContainer = () => {
  const [todos, setTodos] = useState([]);

  const [counter, setCounter] = useState(0);

  const addTodo = useCallback(() => {
    setTodos([...todos, { id: todos.length, name: "Some task" }]);
  }, [todos]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <TodosMemo todos={todos} addTodo={addTodo} />
    </div>
  );
};
