import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import { editTodo } from "../redux/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = (id) => {
    const newTitle = prompt("Enter new title");
    if (newTitle !== null) {
      dispatch(editTodo({ id, title: newTitle }));
    }
  };

  return (
    <div>
      <ul className="lists">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}
              <button className="edit" onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
