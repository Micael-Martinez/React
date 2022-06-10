//Si la palabra del input tiene mas de 15 letras, pintar de rojo.

import React, { Component } from 'react';

class GateKeeper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            input: e.target.value
        })
    }


    render() {

        let inputStyle = {}

        if(this.state.input.length >= 15) {
            inputStyle = { border: '3px solid red', padding: 10, width: 200, height: 35, fontSize: 25}
        }
        return (
            <div>
                <h2>Escribe mas de 15 caracteres y se agranda</h2>
                <input type="text" onChange={this.handleInput} style={inputStyle} value={this.state.input}/>
            </div>
        );
    }
}

export default GateKeeper;

