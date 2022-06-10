import React from "react";

class ChangeState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Estado Inicial"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            name: "Componente Actualizado"
        })
    }

    render() {
        // let actualStateName = this.state.name;

            return (
                // <div>
                //     <button onClick={this.handleClick}>Click Me!</button>
                //         {(this.state.name === "Estado Inicial") ? <h2>{"HELLO"}</h2> : <h2>{"HELLO 2 "}</h2>}
                // </div>
                <div>
                    <button onClick={this.handleClick}>Click Me!</button>
                    <h2>{this.state.name}</h2>
                </div>
            )


    }


}

export default ChangeState;
