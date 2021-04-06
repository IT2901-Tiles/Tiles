import React, { useState } from 'react';

function ClosedUmbrella(props) {
    const [colour] = useState(props.colour ? props.colour : "#black");
    const [durTime] = useState(props.dur ? props.dur : "0s")
    const [keyTimes] = useState(props.keyTimes ? props.keyTimes : "1")

    return (
        <g className="ClosedUmbrella">
            <line id="line" x1="184" y1="265" x2="184" y2="170" stroke="#000000" strokeWidth="2" />
            <path id="umbrellaLeft" d="m 170,247 L198 247 L184,120 L184 247 L184,120" fill="black" >
                <animate
                    attributeName="fill"
                    values={colour}
                    dur={durTime}
                    keyTimes={keyTimes}
                    repeatCount="indefinite" />
            </path>
            <circle id="top" cx="184" cy="115" r="2" fill="black" >
                <animate
                    attributeName="fill"
                    values={colour}
                    dur={durTime}
                    keyTimes={keyTimes}
                    repeatCount="indefinite" />
            </circle>
            <path id="smile" d="M183.6,263.3 a20,90 0 0,0 15,0" fill="transparent" stroke="black" strokeWidth="2" />
        </g>
    );
}

export default ClosedUmbrella;