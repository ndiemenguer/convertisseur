import { useState ,useRef, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const input = useRef();

  useEffect(() => {
    getTodos();
  },
  [] );
  function rand

  //useEffect(() =>{
   // localStorage.setItem("todos", JSON.stringify)
 // }
 // )
  const input = useRef();

async function getTodos() {
  const url ="http://localhost:8080/api/v1/todos/save";
  const todo
}

  const handleAdd = (e) => {
    e.preventDefault();
    const name = input.current.value;
    if(name === "" ){
      alert("Merci de remplir les champs vides");
      return;
    }
    setTodos((currentTodos) =>{
      return [
        ...currentTodos, { id:new Date() ,name: name,completed:false }
      ];
    });
    input.current.value = null;
  };

  function handleDeleteTodo (id){
      setTodos((currentTodos)=>currentTodos.filter((todo)=>todo.id != id));
  };

 const handleCompleted = (id) => {
    setTodos((currentTodos) =>{
   const newsTodos = currentTodos.map((todo)=>{
        if(todo.id === id){
          return{...todo,completed: !todo.completed};
        }
        return todo;
      });
      return newsTodos;
    } ) ;
  };
  return (
    <>
      <main className="container">
        <div className="title">Liste de tâches</div>
        <form className="input-box" onSubmit={handleAdd}>
          <input
            ref={input} type="text" className="input" placeholder="Ajouter une tâche" />
          <button className="button">Ajouter</button>
        </form>
        <div className="todo-list">
          <TodoList
          handleCompleted={handleCompleted} todo={todos}
           handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </div>
      </main>
    </>
  );
}

export default App;
