export const ToDoList = ({ todoList, setTodoList }) => {
  return (
    <ul>
      {todoList.map(({ id, name }) => (
        <li key={id}>
          <span>{name}</span>
          <button
            onClick={() =>
              setTodoList(todoList.filter((item) => item.id !== id))
            }
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// const arr = [{id:1, name:'item 1'}, {id:2, name:'item 2'}]
// arr.filter((item) => item.id === 2);
