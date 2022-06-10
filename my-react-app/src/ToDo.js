
//? Add Tasks in List

//= Tenemos el componente ToDo(el padre) y el componente List
//-Al renderizar List en ToDo, se pasa una props llamada tasks que es un arreglo de tarea pendientes.
//`Luego accedo a este arreglo en el componente List para tratarlo, para mostrarlo dentro de p con join(", ")
import React from 'react';
import arrayList from './arrayList'
const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                <List tasks={arrayList} />
                <h2>Tomorrow</h2>
                <List tasks={["Ir a neuquen con mi novia", "Comer cosas ricas", "Ir al escape room"]} />
            </div>
        );
    }
};

export default ToDo;