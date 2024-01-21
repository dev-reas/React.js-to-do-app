import React, { useContext, useMemo } from "react";
import { TodosContext } from "../context/TodosContext";

const TodoItemsRemaining = () => {
  const { todos } = useContext(TodosContext);

  const remainingCalculation = () => {
    return todos.filter((todo) => !todo.isComplete).length;
  };

  const remaining = useMemo(remainingCalculation, [todos]);
  return <span>{remaining} Items Remaining</span>;
};

export default TodoItemsRemaining;
