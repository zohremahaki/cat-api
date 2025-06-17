import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [error, setError] = useState({});
  let nameInputRef = useRef();
  let ageInputRef = useRef();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age(none empty value)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age(>0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef = "";
    ageInputRef = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
        {/* {error && (<ErrorModal title="An error occured" message='something went wrong!' onConfirm={errorHandler}/>)} */}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInputRef} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" ref={ageInputRef} />
        <button type="submit"> ADD USER</button>
      </form>
    </div>
  );
};
export default AddUser;
