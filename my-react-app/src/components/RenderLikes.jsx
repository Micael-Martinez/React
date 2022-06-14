import React, { useState, useEffect } from 'react';

//El componente actual si tiene estado y cambia, se vuelve a renderizar, el mismo y sus hijos.
//Si no cambia, y se mantiene igual, se va a renderizar 1 sola vez para verificar que esta todo bien y no se van a renderizar sus hijos


//*HELPERS
const randomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const anchorBorderRandom = () => {
    return Math.floor(Math.random() * 9)
}
console.log(anchorBorderRandom)
//*HELPERS



const Likes = () => {
    const [likes, setLikes] = useState(0);

    const borderStyle = {
        border: `${anchorBorderRandom()}px solid ${randomColor()}`,
        backgroundColor: "transparent",
        fontSize: 19,
    }

    return(
        <div>
            <Button onClick={() => setLikes(likes + 1)} style={borderStyle}>{likes} Me gusta</Button>
            <Reset onClick={() => setLikes(0)}>Reset</Reset>
        </div>
    )
}


const Button = ({onClick, style, children}) => {
    return <button onClick={onClick} style={style}>{children}</button>
}

const Reset = ({onClick, children}) => {
    console.log("re render")
    return <button onClick={onClick}>{children}</button>
}

const RenderLikes = () => {

    return <Likes />
}


export default RenderLikes;