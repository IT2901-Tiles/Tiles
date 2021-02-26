import React from 'react';
import Sun from '../Animations/Sun';

function Tbc() {
    return (
        <div>
            <h1>Temperature, bike, color change</h1>
            <svg height="400" width="300">
                <g>
                    <rect width="300" height="400" fill="#b3e6ff" />
                    <rect x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    <Sun/>
                </g>
                <g className="bike">
                    <g className="wheel1">
                        <line x1="20" y1="255" x2="80" y2="308" stroke="black" stroke-width="3" />
                        <line x1="60" y1="240" x2="40" y2="320" stroke="black" stroke-width="3" />
                        <line x1="88" y1="268" x2="12" y2="295" stroke="black" stroke-width="3" />
                    </g>
                    <circle cx="50" cy="280" r="40" stroke="black" stroke-width="3" fill="transparent" />
                    <g className="wheel2">
                        <line x1="130" y1="255" x2="190" y2="308" stroke="black" stroke-width="3" />
                        <line x1="170" y1="240" x2="150" y2="320" stroke="black" stroke-width="3" />
                        <line x1="198" y1="268" x2="122" y2="295" stroke="black" stroke-width="3" />
                    </g>
                    <circle cx="160" cy="280" r="40" stroke="black" stroke-width="3" fill="transparent" />

                    <g className="animationPartOfBike">
                        <polygon points="80,240 140,220 100,280 50,280" stroke="red" stroke-width="3" fill="transparent">
                            <animate
                                attributeName="stroke"
                                values="red;blue;red;"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </polygon>
                        <line x1="138" y1="210" x2="160" y2="280" stroke="red" stroke-width="3">
                            <animate
                                attributeName="stroke"
                                values="red;blue;red;"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </line>
                    </g>

                    <line x1="128" y1="210" x2="150" y2="210" stroke="black" stroke-width="3" />
                    <line x1="70" y1="220" x2="100" y2="280" stroke="black" stroke-width="3" />
                    <ellipse id="seat" cx="70" cy="220" rx="15" ry="3" stroke="black" stroke-width="3" />
                </g>
                <g id="thermometer">
                    {/*The background of the thermometer */ }
                    <rect x="240" y="160" width="30" height="100" fill="#555555"/>
                    <rect x="249" y="165" width="12" height="69" fill="white"/>
                    <circle cx="255" cy="240" r="11" fill="white" />
                    <line x1="251" y1="170" x2="259" y2="170" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="175" x2="264" y2="175" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="180" x2="264" y2="180" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="185" x2="264" y2="185" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="190" x2="222" y2="190" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="195" x2="222" y2="195" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="200" x2="222" y2="200" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="205" x2="222" y2="205" stroke="black" strokeWidth="1"/>
                    <line x1="254" y1="225" x2="222" y2="225" stroke="black" strokeWidth="1"/>

                    {/*The Parts of the thermometer that are animated*/}
                    <line x1="213.5" y1="160" x2="213.5" y2="110" stroke="black" strokeWidth="10">
                        <animate 
                            attributeName="y2"
                            dur = "10s"
                            repeatCount = "indefinite"
                            values="145; 50; 145"
                            keyTimes="0;0.5;1"
                        />
                        <animate 
                            attributeName = "stroke"
                            dur = "10s"
                            repeatCount="indefinite"
                            values="blue;red;blue;"
                        />
                    </line>
                    <circle cx="213" cy="160" r="15" fill="black" >
                        <animate
                            attributeName="fill"
                            values="blue;red;blue;"
                            dur="10s"
                            repeatCount="indefinite"/>
                    </circle>
                </g>
                

            </svg>

        </div>

    );
}

export default Tbc;

