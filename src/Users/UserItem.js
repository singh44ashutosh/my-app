import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className="user-item">
      {props.user.username} ({props.user.age} years old)
    </div>
  );
};

export default UserItem;
