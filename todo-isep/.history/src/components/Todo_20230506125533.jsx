import React from "react";

function Todo({ id, name, completed }) {
  return (
    <>
      <div className="todo-box">
        <div className="todo-checkbox-name">
          <div className="checkbox"></div>
          <div className="todo-name">{name}</div>
        </div>
        <div>
          <div className="delete">X</div>
        </div>
      </div>
    </>
  );
}

export default Todo;
