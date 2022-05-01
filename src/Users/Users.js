import UserItem from "./UserItem";
import "./Users.css";

const Users = (props) => {
  return (
    <div className="users">
      <div className="user">
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
