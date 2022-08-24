export const UsersList = ({ users }) => {
  return (
    <div>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <span>{name}</span>
          <p>{email}</p>
        </li>
      ))}
    </div>
  );
};
