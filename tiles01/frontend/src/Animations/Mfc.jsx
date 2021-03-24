import React from 'react';
import ClothingShelf from './ClothingShelf';
import Inside from './Inside';

function Mfc() {
    return (
        <div className="Mfc">
            <svg height="400" width="300">
                <Inside />
                <ClothingShelf colour="#ff8c1a;#ff8c1a;#663300; #663300;" keyTimes="0;0.5;0.51;1" dur="5" />

                <g className="person" transform="translate(220,0) scale(-1, 1)">
                    <circle className="head" cx="90" cy="190" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle className="eye1" cx="83" cy="185" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="eye2" cx="97" cy="185" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="nose" cx="90" cy="190" r="1.3" stroke="black" strokeWidth="1" fill="black" />
                    <path className="smile" d="M78,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <ellipse className="hatMain" cx="90" cy="173" rx="20" ry="7" fill="red" />
                    <ellipse className="hatTop" cx="90" cy="160" rx="7" ry="7" fill="red" />

                    <g>
                        <line className="arm1" x1="90" y1="220" x2="49" y2="253" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers1" x1="54" y1="253" x2="40" y2="253" stroke="#ffe5cc" strokeWidth="6" />
                        <line className="tshirtArm1" x1="90" y1="221" x2="65" y2="237" stroke="#ff5050" strokeWidth="8" />
                    </g>
                    <g>
                        <line className="handle1" x1="30" y1="250" x2="30" y2="275" stroke="grey" strokeWidth="4" />
                        <line className="handle2" x1="60" y1="250" x2="60" y2="275" stroke="grey" strokeWidth="4" />
                        <line className="handle2" x1="30" y1="252" x2="60" y2="252" stroke="grey" strokeWidth="4" />
                        <rect className="bucket" x="29" y="275" width="32" height="30" fill="grey" />
                        <line className="drop1" x1="55" y1="275" x2="55" y2="290" stroke="#ff8c1a" strokeWidth="4" />
                    </g>
                    <g>
                        <line className="arm2" x1="90" y1="220" x2="130" y2="253" stroke="#ffe5cc" strokeWidth="4" />

                        <line className="paintBrush" x1="128" y1="250" x2="140" y2="250" stroke="pink" strokeWidth="6">
                            <animate
                                attributeName="stroke"
                                values="#663300; #663300;#ff8c1a;#ff8c1a"
                                keyTimes="0;0.5;0.51;1"
                                dur="5s"
                                repeatCount="indefinite"
                            />
                        </line>
                        <line className="tshirtArm2" x1="90" y1="221" x2="110" y2="237" stroke="#ff5050" strokeWidth="8" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 90 220"
                            to="45 90 220"
                            dur="2s"
                            repeatCount="indefinite" />
                    </g>

                    <line className="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" strokeWidth="7" />
                    <line className="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" strokeWidth="6" />
                    <line className="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" strokeWidth="8" />
                </g>

            </svg>

        </div>

    );
}

export default Mfc;

