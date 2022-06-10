import React, { Component } from 'react';

class CheckAge3 extends Component {
    constructor(props) {
        super(props);


        this.state = {
            input: '',
            userAge: ''

        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
            userAge: ''
        })
    }

    submit() {
        this.setState((state) => ({
            userAge: state.input
        }))

    }

    render() {
        const buttonSubmit = <button onClick={this.submit}>Envialo </button>
        const buttonTwo = <button>Sos menor de edad, volve a casa</button>
        const buttonThree = <button>SOS MAYOR, PASA CRACK</button>
        const wtf = <button>WTF BROU? ESA EDAD NO EXISTE</button>

        const menor18 = this.state.userAge < 18 && this.state.userAge >= 1
        const mayor18 = this.state.userAge >= 18

        return (
            <div>
                <h1>Enter your Age to Continue:</h1>

                <input type="number" onChange={this.handleChange} value={this.state.input} />

                {/* //Si es la primera vez que escribo edad (no esta asignado el estado userAge, este se asignar cuando se retorna el buttonSubmit al estar userAge en null): retorna el boton 1 (me doy cuenta gracias al estado del userAge) */}

                {!this.state.userAge ? buttonSubmit : menor18 ? buttonTwo : mayor18 ? buttonThree : wtf }


            </div>
        );
    }
}

export default CheckAge3;