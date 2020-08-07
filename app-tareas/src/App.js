import React, { useState } from 'react';
import FilaTarea from './components/filaTarea'

function App() {

  const [userName, setUserName] = useState("Leandro");
  const [tareas, setTareas] = useState([
    {name : "Tarea 1", done : false},
    {name : "Tarea 2", done : false},
    {name : "Tarea 3", done : false},
    {name : "Tarea 4", done : false}
  ]);

  const updateTareas = () => {
    alert("Hola");
  }

  const runTareas = () => {
    return(
      tareas.map(tarea => (
        <FilaTarea tarea={tarea} key={tarea.name} change={updateTareas}/>
      ))
    )
  }

  return (
    <div className="App">
      <h1>Hola {userName}</h1>
      <table>
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Hecho</th>
          </tr>
        </thead>
        <tbody>
          {runTareas()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
