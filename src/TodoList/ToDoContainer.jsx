import { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export const ToDoContainer = () => {
  const [todoList, setTodoList] = useState([]); // {id: '', name: ''}

  return (
    <div>
      <h2>To do list</h2>
      <ToDoForm setTodoList={setTodoList} />

      <hr />

      <ToDoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};
