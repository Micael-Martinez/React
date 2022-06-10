//ESTE COMPONENTE MUESTRA COMO RETORNAR DIFERENTES ALTERNATIVAS SEGUN EL CAMBIO DE ESTADO.

import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: true
        }

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }


    //al hacer click, alterno el estado y lo uso en el return para devolver interfaz binaria
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }))
    }


    render() {

        const styleButton = {
            backgroundColor: "transparent",
            fontSize: 22,
            padding: 5,
            marginRight: 10
        }
        // if (this.state.display) {
        //     return (
        //         <div>
        //             <button onClick={this.toggleDisplay}>Haz click y se va a ocultar</button>
        //             <h2>Me Mostre!</h2>
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             <button onClick={this.toggleDisplay}>Haz Click y se va a mostrar</button>
        //         </div>
        //     )
        // }

        return (
            <div>
              <button onClick={this.toggleDisplay} style={styleButton}>Toggle Display</button>

              {(this.state.display && <h1 style={{color: "green"}}>Displayed!</h1>) || <h1 style={{color:"red"}}>Not displayed!</h1>}
            </div>
        )
    }
}

export default Display;