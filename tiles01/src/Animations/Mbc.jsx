import React from 'react';

function Mbc() {
    return (
        <div>
            <h1>Motion, bike, color change</h1>
            <svg height="400" width="300">
                <g>
                    <rect width="300" height="400" fill="#b3e6ff" />
                    <rect x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    <g className="sun">
                        <circle cx="250" cy="50" r="30" strokeWidth="0" fill="yellow" />
                        <line x1="290" y1="65" x2="320" y2="85" stroke="yellow" stroke-width="3" />
                        <line x1="290" y1="40" x2="320" y2="40" stroke="yellow" stroke-width="3" />
                        <line x1="280" y1="20" x2="310" y2="5" stroke="yellow" stroke-width="3" />
                        <line x1="260" y1="10" x2="265" y2="-10" stroke="yellow" stroke-width="3" />
                        <line x1="240" y1="10" x2="235" y2="-30" stroke="yellow" stroke-width="3" />
                        <line x1="220" y1="20" x2="205" y2="0" stroke="yellow" stroke-width="3" />
                        <line x1="210" y1="40" x2="175" y2="35" stroke="yellow" stroke-width="3" />
                        <line x1="210" y1="65" x2="175" y2="75" stroke="yellow" stroke-width="3" />
                        <line x1="225" y1="85" x2="205" y2="120" stroke="yellow" stroke-width="3" />
                        <line x1="255" y1="95" x2="255" y2="130" stroke="yellow" stroke-width="3" />
                        <line x1="280" y1="85" x2="305" y2="125" stroke="yellow" stroke-width="3" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 250 50"
                            to="360 250 50"
                            dur="4s"
                            repeatCount="indefinite" />

                    </g>
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

                    <g>
                        <polygon points="80,240 140,220 100,280 50,280" stroke="pink" stroke-width="3" fill="transparent">
                            <animate
                                attributeName="stroke"
                                values="pink;blue;pink;"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </polygon>
                        <line x1="138" y1="210" x2="160" y2="280" stroke="pink" stroke-width="3">
                            <animate
                                attributeName="stroke"
                                values="pink;blue;pink;"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </line>
                    </g>

                    <line x1="128" y1="210" x2="150" y2="210" stroke="black" stroke-width="3" />

                    <line x1="70" y1="220" x2="100" y2="280" stroke="black" stroke-width="3" />

                    <ellipse cx="70" cy="220" rx="15" ry="3" stroke="black" stroke-width="3" />

                    <g className="person">
                        <circle id="head" cx="90" cy="190" r="20" stroke="#ffe5cc" stroke-width="1" fill="#ffe5cc" />
                        <circle id="eye1" cx="83" cy="185" r="2" stroke="black" stroke-width="1" fill="black" />
                        <circle id="eye2" cx="97" cy="185" r="2" stroke="black" stroke-width="1" fill="black" />
                        <circle id="nose" cx="90" cy="190" r="1.3" stroke="black" stroke-width="1" fill="black" />
                        <path id="smile" d="M78,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" stroke-width="2" />

                        <ellipse id="hatMain" cx="90" cy="173" rx="20" ry="7" fill="red" />
                        <ellipse id="hatTop" cx="90" cy="160" rx="7" ry="7" fill="red" />

                        <g>
                            <line id="arm1" x1="90" y1="220" x2="49" y2="253" stroke="#ffe5cc" stroke-width="4" />
                            <line id="fingers1" x1="54" y1="253" x2="40" y2="253" stroke="#ffe5cc" stroke-width="6" />
                            <line id="tshirtArm1" x1="90" y1="221" x2="65" y2="237" stroke="#ff5050" stroke-width="8" />
                        </g>
                        <g>
                            <line id="arm2" x1="90" y1="220" x2="130" y2="253" stroke="#ffe5cc" stroke-width="4" />
                            <line id="paintBrush" x1="128" y1="250" x2="140" y2="250" stroke="pink" stroke-width="6">
                                <animate
                                    attributeName="stroke"
                                    values="pink;blue;pink;"
                                    dur="10s"
                                    repeatCount="indefinite"
                                />
                            </line>
                            <line id="tshirtArm2" x1="90" y1="221" x2="110" y2="237" stroke="#ff5050" stroke-width="8" />
                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                from="0 90 220"
                                to="45 90 220"
                                dur="2s"
                                repeatCount="indefinite" />
                        </g>

                        <line id="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" stroke-width="4" />
                        <line id="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" stroke-width="7" />
                        <line id="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" stroke-width="6" />
                        <line id="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" stroke-width="8" />
                    </g>
                </g>
            </svg>

        </div>

    );
}

export default Mbc;

