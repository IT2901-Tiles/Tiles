import React from 'react';
import Sun from '../Animations/Sun';
import Outdoors from './Outdoors';
import SmallTemperature from './SmallTemperature';

function Tbc() {
    return (
        <div>
            <svg viewBox="0 0 300 400">
                <Outdoors />
                <Sun />
                <g className="bike">
                    <g className="wheel1">
                        <line x1="20" y1="255" x2="80" y2="308" stroke="black" strokeWidth="3" />
                        <line x1="60" y1="240" x2="40" y2="320" stroke="black" strokeWidth="3" />
                        <line x1="88" y1="268" x2="12" y2="295" stroke="black" strokeWidth="3" />
                    </g>
                    <circle cx="50" cy="280" r="40" stroke="black" strokeWidth="3" fill="transparent" />
                    <g className="wheel2">
                        <line x1="130" y1="255" x2="190" y2="308" stroke="black" strokeWidth="3" />
                        <line x1="170" y1="240" x2="150" y2="320" stroke="black" strokeWidth="3" />
                        <line x1="198" y1="268" x2="122" y2="295" stroke="black" strokeWidth="3" />
                    </g>
                    <circle cx="160" cy="280" r="40" stroke="black" strokeWidth="3" fill="transparent" />

                    <g className="animationPartOfBike">
                        <polygon points="80,240 140,220 100,280 50,280" stroke="red" strokeWidth="3" fill="transparent">
                            <animate
                                attributeName="stroke"
                                values="blue;blue;red;red;blue;blue"
                                keyTimes="0;0.3;0.31;0.7;0.71;1"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </polygon>
                        <line x1="138" y1="210" x2="160" y2="280" stroke="red" strokeWidth="3">
                            <animate
                                attributeName="stroke"
                                values="blue;blue;red;red;blue;blue"
                                keyTimes="0;0.3;0.31;0.7;0.71;1"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </line>
                    </g>

                    <line x1="128" y1="210" x2="150" y2="210" stroke="black" strokeWidth="3" />
                    <line x1="70" y1="220" x2="100" y2="280" stroke="black" strokeWidth="3" />
                    <ellipse id="seat" cx="70" cy="220" rx="15" ry="3" stroke="black" strokeWidth="3" />
                </g>
                <SmallTemperature />
            </svg>
        </div>
    );
}

export default Tbc;

