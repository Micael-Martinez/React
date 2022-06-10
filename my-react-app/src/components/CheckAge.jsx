import React from 'react';

class CheckAge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
        }
        this.handleAge = this.handleAge.bind(this);
    }

    handleAge(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    render() {

        return(
            <div>
                <h2>Ingresa tu edad para continuar:</h2>
                <input type="number" onChange={this.handleAge} value={this.state.userInput} />
                {/* <button onClick>Enviar</button> */}
                <h2>Tu edad es de: {this.state.userInput}</h2>


            </div>
        )
    }
}

export default CheckAge;
