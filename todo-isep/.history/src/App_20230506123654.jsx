import "./App.css";

function App() {
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
            <div>checkbox &nbsp; Nom de la tâche</div>
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
