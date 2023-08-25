import React from "react";

function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo />
      ))}
    </>
  );
}

export default TodoList;
