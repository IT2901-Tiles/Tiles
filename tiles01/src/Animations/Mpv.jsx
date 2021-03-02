import React from 'react';
import Sun from '../Animations/Sun';


function Mpv() {
    return (
        <div className="Mpv">
            <h1>Motion, Pen/pencil, Vibration</h1>
            <svg id="mpv" height="400" width="300">
                <g className="background">
                    <rect id="sky" width="300" height="400" fill="#b3e6ff" />
                    <rect id="grass" x="0" y="300" width="300" height="100" fill="#8ccd7e" />
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

                    <g>
                        <polygon id="penTop" points="133,215 130,220 134,221" class="triangle" fill="yellow" />
                        <line id="penMain" x1="132" y1="220" x2="127" y2="235" stroke="black" stroke-width="4" />


                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 127 235"
                            to="25 127 235"
                            dur="0.2s"
                            repeatCount="indefinite" />
                    </g>

                    <line id="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" stroke-width="4" />
                    <line id="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" stroke-width="7" />
                    <line id="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" stroke-width="6" />
                    <line id="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" stroke-width="8" />
                </g>

                <g className="painting">
                    <line id="staffeli1" x1="165" y1="250" x2="135" y2="320" stroke="#cc9966" stroke-width="6" />
                    <line id="staffeli2" x1="165" y1="250" x2="195" y2="320" stroke="#cc9966" stroke-width="6" />
                    <line id="staffeliBody" x1="165" y1="170" x2="165" y2="310" stroke="#cc9966" stroke-width="6" />
                    <rect id="canvas" x="140" y="190" width="50" height="60" fill="white" />
                    <line id="staffeliEdge" x1="135" y1="250" x2="195" y2="250" stroke="#cc9966" stroke-width="6" />

                    <circle id="sun" cx="165" cy="220" r="7" strokeWidth="0" fill="yellow" />
                    <line x1="175" y1="225" x2="185" y2="230" stroke="yellow" stroke-width="3" />
                    <line x1="175" y1="215" x2="185" y2="210" stroke="yellow" stroke-width="3" />
                    <line x1="165" y1="210" x2="165" y2="200" stroke="yellow" stroke-width="3" />
                    <line x1="155" y1="215" x2="145" y2="210" stroke="yellow" stroke-width="3" />
                    <line x1="155" y1="225" x2="145" y2="230" stroke="yellow" stroke-width="3" />
                    <line x1="165" y1="230" x2="165" y2="240" stroke="yellow" stroke-width="3" />

                </g>

                <Sun/>
            </svg>





        </div>
    );
}

export default Mpv;