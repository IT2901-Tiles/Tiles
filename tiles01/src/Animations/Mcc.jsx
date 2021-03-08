import React from 'react';

function Mcc() {
    return (
        <div>
            <h1>Motion, clothing, color change</h1>
            <svg width="300" height="400">
                <g>
                    <rect width="300" height="400" fill="#a3c2c2" />
                    <rect x="0" y="300" width="300" height="100" fill="#d2a679" />
                    <rect x="50" y="305" width="200" height="50" fill="black" />
                    <rect x="200" y="70" width="50" height="200" stroke="black" />
                    <rect x="203" y="73" width="44" height="194" fill="silver" />
                    <circle cx="250" cy="305" r="17" stroke="hotpink" stroke-width="1" fill="hotpink" />
                    <polygon points="237,277 263,277 250,300" stroke="hotpink" stroke-width="3" fill="transparent" />
                </g>
                <g className="person">
                    <circle id="head" cx="140" cy="190" r="20" stroke="#ffe5cc" stroke-width="1" fill="#ffe5cc" />
                    <circle id="eye1" cx="133" cy="185" r="2" stroke="black" stroke-width="1" fill="black" />
                    <circle id="eye2" cx="147" cy="185" r="2" stroke="black" stroke-width="1" fill="black" />
                    <circle id="nose" cx="140" cy="190" r="1.3" stroke="black" stroke-width="1" fill="black" />
                    <path id="smile" d="M128,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" stroke-width="2" />

                    <ellipse id="hatMain" cx="140" cy="173" rx="20" ry="7" fill="red" />
                    <ellipse id="hatTop" cx="140" cy="160" rx="7" ry="7" fill="red" />

                    <g>
                        <line id="arm1" x1="140" y1="220" x2="99" y2="190" stroke="#ffe5cc" stroke-width="4" />
                        <line id="fingers1" x1="104" y1="190" x2="90" y2="190" stroke="#ffe5cc" stroke-width="6" />
                        <line id="tshirtArm1" x1="140" y1="221" x2="115" y2="203" stroke="#ff5050" stroke-width="8">
                            <animate
                                attributeName="stroke"
                                values="#ff5050;orange;yellow;#ff5050"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </line>
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="-90 140 220"
                            to="0 140 220"
                            dur="1s"
                            repeatCount="indefinite" />
                    </g>
                    <g>
                        <line id="arm2" x1="140" y1="220" x2="180" y2="190" stroke="#ffe5cc" stroke-width="4" />
                        <line id="fingers2" x1="178" y1="190" x2="190" y2="190" stroke="#ffe5cc" stroke-width="6" />
                        <line id="tshirtArm2" x1="140" y1="221" x2="165" y2="203" stroke="#ff5050" stroke-width="8">
                            <animate
                                attributeName="stroke"
                                values="#ff5050;orange;yellow;#ff5050"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </line>
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="90 140 220"
                            to="0 140 220"
                            dur="1s"
                            repeatCount="indefinite" />
                    </g>
                    <line id="body" x1="140" y1="200" x2="140" y2="255" stroke="#ffe5cc" stroke-width="4" />
                    <line id="tshirt" x1="140" y1="218" x2="140" y2="257" stroke="#ff5050" stroke-width="8">
                        <animate
                            attributeName="stroke"
                            values="#ff5050;orange;yellow;#ff5050"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </line>

                    <g>
                        <line id="leg1" x1="140" y1="255" x2="150" y2="320" stroke="#ffe5cc" stroke-width="4" />
                        <line id="pant1" x1="140" y1="255" x2="150" y2="310" stroke="#006600" stroke-width="7" />
                        <line id="shoe1" x1="145" y1="320" x2="160" y2="320" stroke="#3366cc" stroke-width="7" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 140 255"
                            to="-35 140 255"
                            dur="1s"
                            repeatCount="indefinite" />
                    </g>
                    <g>
                        <line id="leg2" x1="140" y1="255" x2="130" y2="320" stroke="#ffe5cc" stroke-width="4" />
                        <line id="pant2" x1="140" y1="255" x2="130" y2="310" stroke="#006600" stroke-width="7" />
                        <line id="shoe2" x1="120" y1="320" x2="135" y2="320" stroke="#3366cc" stroke-width="7" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 140 255"
                            to="35 140 255"
                            dur="1s"
                            repeatCount="indefinite" />
                    </g>
                </g>
            </svg>

        </div>
    );
}

export default Mcc;