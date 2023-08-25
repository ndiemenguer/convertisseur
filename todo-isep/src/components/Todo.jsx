import React from "react";

function Todo({ id, name, completed ,handleDeleteTodo,handleCompleted}) {
  function deleteTodo(){
    handleDeleteTodo(id);
  }
  function completedTodo(){
    handleCompleted(id);
  }
  return (
    <>
      <div className="todo-box">
        <div className="todo-checkbox-name">
          <div onClick={completedTodo}className="checkbox">
           {completed && <div className="fill-checkbox"></div>}
          </div>
          <div className="checkbox"></div>
          <div className={`todo-name ${completed && "line-through"}`}>{name}</div>
        </div>
        <div>
          <div onClick={deleteTodo} className="delete">X</div>
        </div>
      </div>
    </>
  );
}

export default Todo;
