import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <div className="title">Liste de tâches</div>
        <div className="input-box">
          <input type="text" placeholder="Ajouter une tâche" />
          <button>Ajouter</button>
        </div>
        <div className="todo-list">
          <div className="todo-box">
            <div>checkbox &nbsp; Nom de la tâche</div>
            <div>
              <button>Supprimer</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
