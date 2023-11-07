import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
function AddTodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();
    setValue("");
    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );
    }
  };
  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          type="text"
          placeholder="Add todo.."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
