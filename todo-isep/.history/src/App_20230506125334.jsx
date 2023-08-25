import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", complete: false },
    { id: 2, name: "Todo2", complete: false },
    { id: 2, name: "Todo2", complete: false },
  ]);

  return (
    <>
      <main className="container">
        <div className="title">Liste de tâches</div>
        <div className="input-box">
          <input
            type="text"
            className="input"
            placeholder="Ajouter une tâche"
          />
          <button className="button">Ajouter</button>
        </div>
        <div className="todo-list">
          <TodoList todos={todos} />
        </div>
      </main>
    </>
  );
}

export default App;
