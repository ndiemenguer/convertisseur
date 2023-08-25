import React from "react";

function TodoList({ todos }) {
  return (
    <>
      <div className="todo-box">
        <div className="todo-checkbox-name">
          <div className="checkbox"></div>
          <div className="todo-name">Nom de la tâche</div>
        </div>
        <div>
          <div className="delete">X</div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
