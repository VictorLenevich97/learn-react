import { useState } from "react";
import { UsersList, Title } from "./components";
import { usersList } from "./mockData/usersList";

function App() {
  const [users, setUsers] = useState(usersList);
  const [formState, setFormState] = useState({ name: "", email: "" });

  const { name, email } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsers([...users, { id: users.length + 1, name, email }]);
  };

  const onChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title content="Users list" />
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input value={name} onChange={onChange} name="name" type="text" />
        </label>
        <br />
        <label>
          Почта:
          <input value={email} onChange={onChange} name="email" type="email" />
        </label>
        <br />
        <button type="submit">Отправить форму</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default App;
