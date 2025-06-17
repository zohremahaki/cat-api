const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age}years old)
        </li>
      ))}
    </ul>
  );
};
export default UserList;
