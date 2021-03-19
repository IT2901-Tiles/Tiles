import React from 'react';
import Sun from '../Animations/Sun';
import Outdoors from './Outdoors';


function Mpv() {
    return (
        <div className="Mpv">
            <svg id="mpv" viewBox="0 0 300 400">
                <Outdoors />
                <Sun />

                <g className="person">
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
                        <line className="arm2" x1="90" y1="220" x2="130" y2="230" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="tshirtArm2" x1="90" y1="222" x2="110" y2="226" stroke="#ff5050" strokeWidth="8" />
                        <g>
                            <polygon className="penTop" points="133,215 130,220 134,221" fill="yellow" />
                            <line className="penMain" x1="132" y1="220" x2="127" y2="235" stroke="black" strokeWidth="4" />


                            <animateTransform attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                values="0 127 235;15 127 235;0 127 235"
                                dur="0.2s"
                                repeatCount="indefinite" />
                        </g>
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            values="-20 90 220;10 90 220;-20 90 220"
                            dur="3s"
                            repeatCount="indefinite" />
                    </g>


                    <line className="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" strokeWidth="7" />
                    <line className="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" strokeWidth="6" />
                    <line className="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" strokeWidth="8" />
                </g>

                <g className="painting">
                    <line className="staffeli1" x1="165" y1="250" x2="135" y2="320" stroke="#cc9966" strokeWidth="6" />
                    <line className="staffeli2" x1="165" y1="250" x2="195" y2="320" stroke="#cc9966" strokeWidth="6" />
                    <line className="staffeliBody" x1="165" y1="170" x2="165" y2="310" stroke="#cc9966" strokeWidth="6" />
                    <rect className="canvas" x="140" y="190" width="50" height="60" fill="white" />
                    <line className="staffeliEdge" x1="135" y1="250" x2="195" y2="250" stroke="#cc9966" strokeWidth="6" />

                    <circle className="sun" cx="165" cy="220" r="7" strokeWidth="0" fill="yellow" />
                    <line x1="175" y1="225" x2="185" y2="230" stroke="yellow" strokeWidth="3" />
                    <line x1="175" y1="215" x2="185" y2="210" stroke="yellow" strokeWidth="3" />
                    <line x1="165" y1="210" x2="165" y2="200" stroke="yellow" strokeWidth="3" />
                    <line x1="155" y1="215" x2="145" y2="210" stroke="yellow" strokeWidth="3" />
                    <line x1="155" y1="225" x2="145" y2="230" stroke="yellow" strokeWidth="3" />
                    <line x1="165" y1="230" x2="165" y2="240" stroke="yellow" strokeWidth="3" />

                </g>


            </svg>





        </div>
    );
}

export default Mpv;