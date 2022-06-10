import React from 'react';

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: '',
            randomIndex: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.ask = this.ask.bind(this);
    }


    ask () {
        if(this.state.valueInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 5),
                valueInput: ''
            })
        } else {
            console.log('Completa el input con algun string')
        }
    }

    handleChange(event) {
        this.setState({
            valueInput: event.target.value,
        })
    }



    render() {
        const magicString = [
            'Soy el mejor',
            'Soy el best',
            'No se que esta pasando',
            'Hay que limpiar los rigs',
            'Hay que hacer cositas'
        ]

        //?ME FALTA EL RANDOMINDEX EN UNA VARIABLE
        //al hacer click en button, llama a la func ask() que es la que me cambia el estado de randomIndex.
        const answer = magicString[this.state.randomIndex];

        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.valueInput} />

                <button onClick={this.ask}>Obten una respuesta Random!</button>

                <h2>Answer:</h2>
                <p>{answer}</p>
            </div>
        )
    }
}

export default MagicEightBall;