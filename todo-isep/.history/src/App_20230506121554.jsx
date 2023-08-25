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
          <p>Todo</p>
          <p>Todo</p>
          <p>Todo</p>
          <p>Todo</p>
          <p>Todo</p>
        </div>
      </main>
    </>
  );
}

export default App;
