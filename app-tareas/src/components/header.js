import React from 'react';

const Head = (props) => {
    return( 
        <div>
            <h4 className="bg-primary text-white text-center p-4">
                App de tareas de {props.name} ({props.value.filter(t => !t.done).length} Tareas por hacer)
            </h4>
        </div>
    )
}

export default Head;