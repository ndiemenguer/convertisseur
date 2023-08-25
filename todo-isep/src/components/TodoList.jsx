import React from "react";
import Todo from "./Todo";

function TodoList({ todos ,handleDeleteTodo, handleCompleted}) {
  return (
    <>
      {todos.map((todo) => (
        < Todo key={todo.id} handleDeleteTodo={handleDeleteTodo} handleCompleted={handleCompleted} {...todo} />
      ))}
    </>
  );
}

export default TodoList;
