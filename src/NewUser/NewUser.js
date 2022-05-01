import { useState } from "react";
import InvalidInput from "../InvalidInput/InvalidInput";
import "./NewUser.css";

const NewUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const usernameChangeHandler = (event) => setUsername(event.target.value);

  const ageChangeHandler = (event) => setAge(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    let errorMsgLocal = "";
    if (username.length === 0 && age.length === 0) {
      errorMsgLocal =
        "Please enter a valid username and age (non-empty values)";
    } else if (username.length === 0) {
      errorMsgLocal = "Please enter a valid username.";
    } else if (age.length === 0 || isNaN(parseInt(age))) {
      errorMsgLocal = "Please enter a valid age.";
    } else if (parseInt(age) <= 0) {
      errorMsgLocal = "Please enter a valid age (>0)";
    }

    if (errorMsgLocal.length > 0) {
      setErrorMessage(errorMsgLocal);
      return false;
    }

    props.onAddUser({
      id: Math.random(),
      username: username,
      age: +age,
    });

    setUsername("");
    setAge("");
    setErrorMessage("");
  };

  const closeHandler = () => {
    setErrorMessage("");
  };

  return (
    <div>
      <form className="new-user" onSubmit={submitHandler}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="form-control">
          <label>Age (Years)</label>
          <input type="number" value={age} onChange={ageChangeHandler} />
        </div>
        <button type="submit">Add User</button>
      </form>

      {errorMessage.length > 0 && (
        <InvalidInput errorMessage={errorMessage} onClose={closeHandler} />
      )}
    </div>
  );
};

export default NewUser;
