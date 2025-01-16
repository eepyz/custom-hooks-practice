import { useState } from "react";
import { Todo } from "../reducers/todoReducer"; // Import our custom hook
import useTodo from "../hooks/useTodo";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const { add, remove, toggle, todos } = useTodo();

  return (
    <div className="todoContainer">
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add a new todo" />
      <button
        onClick={() => {
          add(inputValue);
          setInputValue("");
        }}>
        Add Todo
      </button>

      <div>
        {todos.map((todo: Todo) => (
          <div key={todo.id} className="todoRow">
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}>
              {todo.text}
            </span>
            <button onClick={() => toggle(todo.id)}>{todo.completed ? "Uncomplete" : "Complete"}</button>
            <button onClick={() => remove(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
