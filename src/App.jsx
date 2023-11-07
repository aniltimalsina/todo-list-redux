import AddTodoForm from "./components/addtodoform";
import TodoList from "./components/todolist";
import "./todo.css";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
