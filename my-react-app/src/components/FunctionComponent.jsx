import React from 'react';

//Le paso {} para no poner props, de hecho estoy desestructurando la props para llamar directamente a las props sin llamar a props.
const NameComplete = ({ name, lastName }) => {
    return (
        <div>
            <p>{`Hello! ${name} ${lastName}`}</p>
        </div>
    )
}

class FunctionComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Name Complete:</h2>
                <NameComplete name={"Micael"} lastName={"Martinez"}/>
            </div>

        )
    }
}

export default FunctionComponent;