//Dentro de otros componentes, se puede añadir componentes funcionales sin estado, sin props, es ensamblar componentes.

const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>

            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    )
}

const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />
        </div>
    )
}

export default Fruits;