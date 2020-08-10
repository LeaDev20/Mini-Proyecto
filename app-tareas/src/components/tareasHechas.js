import React from 'react';

const TareasHechas = (props) => {
    return(
        <div className="form-check">
            <input 
                type="checkbox"
                className="form-check-input"
                checked={props.isCheck}
                onChange={e => props.callback(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                Mostrar {props.description}
            </label>
        </div>
    )
}

export default TareasHechas;