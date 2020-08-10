import React, { useState } from 'react';
import FilaTarea from './components/filaTarea';
import Head from './components/header';
import CrearTarea from './components/crearTarea';
import TareasHechas from "./components/tareasHechas";

function App() {

  const [userName, setUserName] = useState("Leandro");
  const [estadoTarea, setEstadoTarea] = useState(true);
  const [tareas, setTareas] = useState([
    {name : "Tarea 1", done : false},
    {name : "Tarea 2", done : false},
    {name : "Tarea 3", done : false},
    {name : "Tarea 4", done : false}
  ]);

  const updateTareas = (tarea) => {
    setTareas(tareas.map(t => (t.name === tarea.name ? {...t, done: !t.done} : t)));
  }

  const runTareas = () => {
    return(
      tareas.map(tarea => (
        <FilaTarea tarea={tarea} key={tarea.name} change={updateTareas}/>
      ))
    )
  }
  
  const addToLista = (tarea) => {
    if(!tareas.find(t => t.name === tarea)){
      setTareas([...tareas, {
        name : tarea,
        done : false
      }])
    }
  }

  return (
    <div className="App">
      <Head name={userName} value={tareas}/>
      <CrearTarea callback={addToLista}/>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {runTareas()}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <TareasHechas 
          description = "Tareas Completadas"
          isCheck = {estadoTarea}
          callback = {checked => setEstadoTarea(checked)}
        />
      </div>
      {
        
      }
    </div>
  );
}

export default App;
