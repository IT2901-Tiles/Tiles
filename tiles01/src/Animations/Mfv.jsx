import React from 'react';


function Mfv() {
    return (
        <div className="Mfv">
            <h1>Motion, furniture, vibration</h1>
            <svg id="mpv" height="400" width="300">
                <g className="background">
                    <rect id="wall" width="300" height="400" fill="#a3c2c2" />
                    <rect id="floor" x="0" y="300" width="300" height="100" fill="#006666" />
                    <line id="lamp" x1="200" y1="0" x2="200" y2="50" stroke="black" stroke-width="3" />
                    <line id="lamp1" x1="200" y1="50" x2="200" y2="58" stroke="black" stroke-width="6" />
                    <circle id="lampBulb" cx="200" cy="68" r="10" stroke="black" stroke-width="1" fill="#a3c2c2" />
                    <polygon id="light" points="199,59 201,59 205,70 195,70" stroke="#ffff66" fill="#ffff66"/>
                </g>

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

                    <line id="arm2" x1="90" y1="220" x2="130" y2="230" stroke="#ffe5cc" stroke-width="4" />
                    <line id="tshirtArm2" x1="90" y1="222" x2="110" y2="226" stroke="#ff5050" stroke-width="8" />
                    <line id="fingers2" x1="125" y1="230" x2="137" y2="228" stroke="#ffe5cc" stroke-width="6" />



                    <line id="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" stroke-width="4" />
                    <line id="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" stroke-width="7" />
                    <line id="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" stroke-width="6" />
                    <line id="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" stroke-width="8" />

                    <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            from="80 0"
                            to="0 0"
                            dur="3s"
                            repeatCount="1"
                        />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            keyTimes="0;0.5;1"
                            values="-20 0; 20 0; -20 0"
                            type="translate"
                            begin="4s"
                            dur="3s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        />
                </g>

                <g className="chair">

                    <line id="leftLeg1" x1="204" y1="250" x2="207" y2="270" stroke="#ff8c1a" stroke-width="4" />
                    <line id="rightLeg1" x1="246" y1="250" x2="243" y2="270" stroke="#ff8c1a" stroke-width="4" />

                    <line id="leftLeg2" x1="208" y1="270" x2="204" y2="310" stroke="#ff8c1a" stroke-width="5" />
                    <line id="rightLeg2" x1="242" y1="270" x2="246" y2="310" stroke="#ff8c1a" stroke-width="5" />

                    <line id="chairLine" x1="208" y1="280" x2="242" y2="280" stroke="#ff8c1a" stroke-width="4" />
                    <rect id="chairTop" x="200" y="222" width="50" height="30" fill="#ffe066" />
                    <line id="seat" x1="198" y1="270" x2="252" y2="270" stroke="#ffe066" stroke-width="8" />

                    <circle id="circleLeft1" cx="207" cy="230" r="2" stroke-width="1" fill="#ff8c1a" />
                    <circle id="circleLeft2" cx="207" cy="244" r="2" stroke-width="1" fill="#ff8c1a" />
                    <circle id="circleRight1" cx="243" cy="230" r="2" stroke-width="1" fill="#ff8c1a" />
                    <circle id="circleRight2" cx="243" cy="244" r="2" stroke-width="1" fill="#ff8c1a" />

                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-10 225 310"
                        to="10 225 310"
                        dur="0.5s"
                        repeatCount="indefinite" />
                </g>


            </svg>





        </div>
    );
}

export default Mfv;