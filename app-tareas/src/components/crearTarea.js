import React, { useState } from "react";

const CrearTarea = (props) => {
    
    const [nuevaTarea, setNuevaTarea] = useState("");

    const actualizarValor = (e) => {
        setNuevaTarea(e.target.value);
    }

    const crearNuevaTarea = () => {
        props.callback(nuevaTarea);
        setNuevaTarea("");
    }

    return(
        <div className="my-1">
            <input 
                type="text"
                className="form-control" 
                value={nuevaTarea}
                onChange={actualizarValor}
            />
            <button className="btn btn-primary mt-1" onClick={crearNuevaTarea}>
                Agregar Tarea
            </button>
        </div>
    )
}

export default CrearTarea;
