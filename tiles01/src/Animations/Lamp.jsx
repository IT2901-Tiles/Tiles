import React from 'react';


function Lamp() {
    return (
        <g className="Lamp">
            <line id="lamp" x1="200" y1="0" x2="200" y2="50" stroke="black" strokeWidth="3" />
            <line id="lamp1" x1="200" y1="50" x2="200" y2="58" stroke="black" strokeWidth="6" />
            <circle id="lampBulb" cx="200" cy="68" r="10" stroke="black" strokeWidth="1" fill="#a3c2c2" />
            <polygon id="light" points="199,59 201,59 205,70 195,70" stroke="#ffff66" fill="#ffff66" />
        </g>
    );
}

export default Lamp;