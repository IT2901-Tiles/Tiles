import React, { useState } from 'react';


function Chair(props) {
    const [colour] = useState(props.colour ? props.colour : "#ffe066");
    const [durTime] = useState(props.dur ? props.dur : "0s")

    return (

        <g className="chair">

            <line id="leftLeg1" x1="204" y1="250" x2="207" y2="270" stroke="#ff8c1a" strokeWidth="4" />
            <line id="rightLeg1" x1="246" y1="250" x2="243" y2="270" stroke="#ff8c1a" strokeWidth="4" />

            <line id="leftLeg2" x1="208" y1="270" x2="204" y2="310" stroke="#ff8c1a" strokeWidth="5" />
            <line id="rightLeg2" x1="242" y1="270" x2="246" y2="310" stroke="#ff8c1a" strokeWidth="5" />

            <line id="chairLine" x1="208" y1="280" x2="242" y2="280" stroke="#ff8c1a" strokeWidth="4" />
            <rect id="chairTop" x="200" y="222" width="50" height="30" fill="#ffe066">
                <animate
                    attributeName="fill"
                    values={colour}
                    dur={durTime}
                    repeatCount="indefinite" />
            </rect>
            <line id="seat" x1="198" y1="270" x2="252" y2="270" stroke="#ffe066" strokeWidth="8">
                <animate
                    attributeName="stroke"
                    values={colour}
                    dur={durTime}
                    repeatCount="indefinite" />
            </line>

            <circle id="circleLeft1" cx="207" cy="230" r="2" strokeWidth="1" fill="#ff8c1a" />
            <circle id="circleLeft2" cx="207" cy="244" r="2" strokeWidth="1" fill="#ff8c1a" />
            <circle id="circleRight1" cx="243" cy="230" r="2" strokeWidth="1" fill="#ff8c1a" />
            <circle id="circleRight2" cx="243" cy="244" r="2" strokeWidth="1" fill="#ff8c1a" />

        </g>
    );
}

export default Chair;