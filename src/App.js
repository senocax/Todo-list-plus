import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "New message" },
    { text: "Hello world" },
    { text: "New sound" }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <Form />
      </div>
    </div>
  );
}
