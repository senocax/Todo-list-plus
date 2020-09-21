import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/todoForm";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "New message" },
    { text: "Hello world" },
    { text: "new sound" }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
