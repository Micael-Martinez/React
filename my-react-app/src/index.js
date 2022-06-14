import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDo from './ToDo';
import ComponentDidMountForAPIS from './components/ComponentDidMountForAPIS';
import LineSeparation from './components/LineSeparation';
import AddEvent from './components/AddEvent';
import ShouldReRender from './components/ShouldRe-render';
import Fruits from './components/Fruits.jsx';
import Colorful from './components/ColorFul';
import PropTypes from './components/PropTypes';
import FunctionComponent from './components/FunctionComponent'
import MagicEightBall from './components/MagicBall';
import Display from './components/Display'
import CheckAge from './components/CheckAge';
import ChangeText from './components/ChangeText';
import GameOfChance from './components/GameOfChance';
import CheckAge2 from './components/CheckAge2';
import CheckAge3 from './components/CheckAge3';
import GateKeeper from './components/GateKeeper';
import ToDoList from './components/ToDoList';
import RenderLikes from './components/RenderLikes';
import Counters from './components/Counters';

import ChangeState from './components/ChangeState';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <ToDo />
        <LineSeparation />

        <ComponentDidMountForAPIS />
        <LineSeparation />

        <AddEvent />
        <LineSeparation />

        <ShouldReRender />
        <LineSeparation />

        <Fruits />
        <LineSeparation />

        <Colorful />
        <LineSeparation />

        <PropTypes />
        <LineSeparation />

        <ChangeState />
        <LineSeparation />

        <FunctionComponent />
        <LineSeparation />

        <MagicEightBall />
        <LineSeparation />

        <Display />
        <LineSeparation />

        <CheckAge />
        <LineSeparation />

        <CheckAge2 />
        <LineSeparation colorLine={"red"} />

        <CheckAge3 />
        <LineSeparation colorLine={"red"} />

        <ChangeText />
        <LineSeparation />

        <GameOfChance />
        <LineSeparation />

        <GateKeeper />
        <LineSeparation />

        <ToDoList />
        <LineSeparation />

        <RenderLikes />
        <LineSeparation />

        <Counters />
        <LineSeparation />

    </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))
// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
