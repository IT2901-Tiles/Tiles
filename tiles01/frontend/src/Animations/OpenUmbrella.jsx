import React, { useState } from 'react';

function OpenUmbrella(props) {
    const [colour] = useState(props.colour ? props.colour : "#black");
    const [durTime] = useState(props.dur ? props.dur : "0s")
    const [keyTimes] = useState(props.keyTimes ? props.keyTimes : "1")

    return (
        <g className="OpenUmbrella">
            <line className="umbrella" x1="184" y1="265" x2="184" y2="170" stroke="#000000" strokeWidth="2" />
            <path id="umbrella11" className="umbrella" d="m 90,170 L185,170 L185,120 Q 184,100 90,170" fill="#000000">
                <animate
                    attributeName="fill"
                    values={colour}
                    dur={durTime}
                    keyTimes={keyTimes}
                    repeatCount="indefinite"
                />
            </path>
            <path id="umbrella12" className="umbrella" d="m 280,170 L183,170 L183,120 Q 184,100 280,170" fill="#000000">
                <animate
                    attributeName="fill"
                    values={colour}
                    dur={durTime}
                    keyTimes={keyTimes}
                    repeatCount="indefinite"
                />
            </path>
            <circle id="umbrella13" className="umbrella" cx="184" cy="115" r="2" fill="#0000000" />
            <path id="smile" d="M183.6,263.3 a20,90 0 0,0 15,0" fill="transparent" stroke="#000000" strokeWidth="2" />
        </g>
    );
}

export default OpenUmbrella;