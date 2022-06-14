import React, {useState} from 'react';


const WarningNotUsed = () => {
    return <h1>Todavia no se ha usado el Contador</h1>
}

const ListOfClicks = ({clicks}) => {
    return <p>{clicks.join(', ')}</p>
}
const Counters = () => {


    //Manejando un estado global para los clicks, gracias a un objeto.
    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        message: 'Todavia no he hecho ningun click'
    })

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        setCounters({
            ...counters,
            left: counters.left + 1,
            message: "Apretaste el click izquierdo"
        })

        setClicks(prevClicks => [...prevClicks, "L" ])
        console.log(clicks)
    }

    const handleClickRight = () => {
        console.log("hellito")
        setCounters({
            ...counters,
            right: counters.right + 1,
            message: "Apretaste el click derecho"
        })

        setClicks(prevClicks => [...prevClicks, "R" ])
        console.log(clicks)
    }

    const myStyles = {
        padding: 35,
        margin: 35,
        color: "red"
    }

    return(
        <div styles={myStyles}>

            {counters.left}
            <button onClick={handleClickLeft}>left</button>
            <button onClick={handleClickRight}>right</button>
            {counters.right}

            <h3>Cantidad de Clicks: {clicks.length}</h3>
            {clicks.length === 0 ? (<WarningNotUsed />) : (<ListOfClicks clicks={clicks} />)}
        </div>
    )
}

export default Counters;