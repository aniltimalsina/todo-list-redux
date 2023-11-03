function TodoList() {
  const todos = [
    { id: 1, title: "Todo 1", isCompleted: false },
    { id: 2, title: "Todo 2", isCompleted: false },
    { id: 3, title: "Todo 3", isCompleted: true },
    { id: 4, title: "Todo 4", isCompleted: false },
  ];
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
