import React from 'react';

const FilaTarea = (props) => {
    return(
        <tr key={props.tarea.name}>
          <td>
              {props.tarea.name}
          </td>
          <td>
              <input type="checkbox" checked={props.tarea.done} onChange={() => props.change(props.tarea)}/>
          </td>
        </tr>
    )
}

export default FilaTarea;