
import './App.css';

function App() {
  return 
    <>
    <main className="container">
      < div className="title">Liste de tache</div>
      <div className='input-box'>
        <input type='text' placeholder='Ajouter une une tache'/>
        <button >Ajouter</button>

      </div>
      <div className='todo-list'>
        <div className='todo-box'>
          <div>checkbox &nbsp; Nom de la tache</div>
          <div >
            <button>Supprimer</button>
          </div>
        </div>
      </div>
      </main> </>

}

export default App;