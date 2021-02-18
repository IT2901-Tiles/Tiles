import React from 'react';
import Cloud from './Cloud';

function Muc() {
    return (
        <div>
            <h1>Motion, umbrella, color change</h1>
            <svg height="400" width="300">
                <g>
                    <rect id="sky" width="300" height="400" fill="#b3e6ff" />
                    <rect id="grass" x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    {/* <g className="cloud">
                        <circle className="cloud" cx="-170" cy="80" r="35" fill="#ababab" />
                        <circle className="cloud" cx="-130" cy="50" r="45" fill="#ababab" />
                        <circle className="cloud" cx="-85" cy="50" r="30" fill="#ababab" />
                        <circle className="cloud" cx="-60" cy="80" r="35" fill="#ababab" />
                        <rect className="cloud" x="-170" y="75" width="110" height="40" fill="#ababab" />
                        <line className="rain" x1="-175" y1="130" x2="-190" y2="160" stroke="#ababab" strokeWidth="7" />
                        <line className="rain" x1="-135" y1="130" x2="-150" y2="160" stroke="#ababab" strokeWidth="7" />
                        <line className="rain" x1="-95" y1="130" x2="-110" y2="160" stroke="#ababab" strokeWidth="7" />
                        <line className="rain" x1="-55" y1="130" x2="-70" y2="160" stroke="#ababab" strokeWidth="7" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate "
                            from="0 0"
                            to="500 0"
                            dur="13s"
                            repeatCount="indefinite" />
                    </g> */}
                    <Cloud />
                </g>
                <g className="person">
                    <circle id="head" cx="140" cy="210" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle id="eye1" cx="133" cy="205" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle id="eye2" cx="147" cy="205" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle id="nose" cx="140" cy="210" r="1.3" stroke="black" strokeWidth="1" fill="black" />


                    <ellipse id="hatMain" cx="140" cy="193" rx="20" ry="7" fill="red" />
                    <ellipse id="hatTop" cx="140" cy="180" rx="7" ry="7" fill="red" />
                    <path id="smile" d="M128,213 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <g>
                        <line id="arm1" x1="140" y1="235" x2="120" y2="280" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="fingers1" x1="110" y1="285" x2="122" y2="280" stroke="#ffe5cc" strokeWidth="6" />
                        <line id="tshirtArm1" x1="139" y1="238" x2="124" y2="267" stroke="#ff5050" strokeWidth="8" />
                    </g>
                    <g>
                        <line id="arm2" x1="140" y1="235" x2="180" y2="260" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="fingers2" x1="178" y1="260" x2="190" y2="260" stroke="#ffe5cc" strokeWidth="6" />
                        <line id="tshirtArm2" x1="141" y1="238" x2="170" y2="255" stroke="#ff5050" strokeWidth="8" />

                        {/* <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="90 140 220"
                            to="0 140 220"
                            dur="1s"
                            repeatCount="indefinite" /> */}
                    </g>
                    <line id="body" x1="140" y1="220" x2="140" y2="275" stroke="#ffe5cc" strokeWidth="4" />
                    <line id="tshirt" x1="140" y1="238" x2="140" y2="277" stroke="#ff5050" strokeWidth="8">

                    </line>

                    <g>
                        <line id="leg1" x1="140" y1="275" x2="150" y2="340" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="pant1" x1="140" y1="275" x2="150" y2="330" stroke="#006600" strokeWidth="7" />
                        <line id="shoe1" x1="145" y1="340" x2="160" y2="340" stroke="#3366cc" strokeWidth="7" />

                    </g>
                    <g>
                        <line id="leg2" x1="140" y1="275" x2="130" y2="340" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="pant2" x1="140" y1="275" x2="130" y2="330" stroke="#006600" strokeWidth="7" />
                        <line id="shoe2" x1="120" y1="340" x2="135" y2="340" stroke="#3366cc" strokeWidth="7" />

                    </g>
                </g>
                <g>
                    <line className="umbrella" x1="184" y1="265" x2="184" y2="170" stroke="#000000" strokeWidth="2" />
                    <polygon className="umbrella" points="100,170 185,170 185,130" />
                    <polygon className="umbrella" points="270,170 185,170 185,130" />
                </g>

            </svg>


        </div >
    );
}

export default Muc;