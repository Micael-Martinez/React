import React, { Component } from 'react';


class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <p>{this.props.items.join(', ')}</p>
            </div>
        )
    }
}


class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            list: [],
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit() {
        const arrayList = this.state.input.split(',')

        this.setState({
            list: arrayList
        })

    }

    render() {
//HACER LA IDEA DE Añadir el list cuando pongo un boton de enviar y un input
        const items = this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (
            <div>
                <h3>My ToDo List:</h3>
                <input type="text" onChange={this.handleInput} value={this.state.input} placeholder='Escribe las palabras con coma al final!'/>
                <button onClick={this.handleSubmit}>Enviar</button>

                <ul>{items}</ul>
            </div>
        );
    }
}

export default ToDoList;


//Crear un ToDoList, al hacer un click se crea un List.