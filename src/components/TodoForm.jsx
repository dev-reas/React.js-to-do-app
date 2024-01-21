import React, { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoForm() {
  const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);

  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);

    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1);

    setTodoInput("");
  };

  return (
    <form action="#" onSubmit={addTodo}>
      <input
        type="text"
        value={todoInput}
        className="todo-input"
        onChange={handleInput}
        placeholder="What do you need to do?"
      />
    </form>
  );
}

export default TodoForm;
