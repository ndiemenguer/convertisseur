import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

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
          <div className="todo-box">
            <div className="todo-checkbox-name">
              <div className="checkbox"></div>
              <div className="todo-name">Nom de la tâche</div>
            </div>
            <div>
              <div className="delete">X</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
