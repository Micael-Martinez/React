import React from 'react';

const LineSeparation = ({colorLine = "green"}) => {
    return <hr style={{backgroundColor: colorLine, height: "5px"}}/>
};

export default LineSeparation;

