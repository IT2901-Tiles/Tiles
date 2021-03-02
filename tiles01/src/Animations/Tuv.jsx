import React from 'react';
import Cloud from '../Animations/Cloud';
import Sun from '../Animations/Sun';

function Tuv(){
    return(
        <div className='tuv'>
            <h1>Temperature, Umbrella, Vibration</h1>
            <svg width="300" height="400">
                <g> {/* Background */}
                    <rect id="sky" width="300" height="400" fill="#b3e6ff" />
                    <rect id="grass" x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    <Sun/>
                    <Cloud/>
                </g>

                <g id="thermometer">
                    {/*The background of the thermometer */ }
                    <rect x="25" y="210" width="67.5" height="166" fill="#555555"/>
                    <rect x="45" y="220" width="27.5" height="120" fill="white"/>
                    <circle cx="58" cy="340" r="25" fill="white" />
                    <line x1="50" y1="230" x2="67" y2="230" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="240" x2="67" y2="240" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="250" x2="67" y2="250" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="260" x2="67" y2="260" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="270" x2="67" y2="270" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="280" x2="67" y2="280" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="290" x2="67" y2="290" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="300" x2="67" y2="300" stroke="black" strokeWidth="1"/>
                    <line x1="50" y1="310" x2="67" y2="310" stroke="black" strokeWidth="1"/>

                    {/*The Parts of the thermometer that are animated*/}
                    <line x1="58.5" y1="340" x2="58.5" y2="310" stroke="black" strokeWidth="10">
                        <animate 
                            attributeName="y2"
                            dur = "14s"
                            repeatCount = "indefinite"
                            values="250; 325; 250"
                            keyTimes="0;0.5;1"
                        />
                        <animate 
                            attributeName = "stroke"
                            dur = "14s"
                            repeatCount="indefinite"
                            values="red;blue;red;"
                        />
                    </line>
                    <circle cx="58" cy="340" r="15" fill="black" >
                        <animate
                            attributeName="fill"
                            values="red;blue;red;"
                            dur="14s"
                            repeatCount="indefinite"/>
                    </circle>
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
                    </g>
                    <line id="body" x1="140" y1="220" x2="140" y2="275" stroke="#ffe5cc" strokeWidth="4" />
                    <line id="tshirt" x1="140" y1="238" x2="140" y2="277" stroke="#ff5050" strokeWidth="8" />
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
                    <path id="umbrella11" className="umbrella" d="m 90,170 L185,170 L185,120 Q 184,100 90,170" fill="#000000" />
                    <path id="umbrella12" className="umbrella" d="m 280,170 L183,170 L183,120 Q 184,100 280,170" fill="#000000" />
                    <circle id="umbrella13" className="umbrella" cx="184" cy="115" r="2" fill="#0000000"/>
                    <path id="smile" d="M183.6,263.3 a20,90 0 0,0 15,0" fill="transparent" stroke="#000000" strokeWidth="2" />
                    <path id="smile" d="M183.6,263.3 a20,90 0 0,0 15,0" fill="transparent" stroke="#000000" strokeWidth="2" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        keyTimes = "0;0.05; 0.1;0.15;0.2;0.25;0.3;0.35; 0.4; 1"
                        values="0 183 247; 0 183 247; 0 183 247; -10 183 247; 5 183 247; -10 183 247; 5 183 247; -10 183 247; 0 183 247; 0 183 247;"
                        begin="4s"
                        dur="13s"
                        repeatCount="indefinite" />
                </g >

                
            </svg>
        </div>
    );
}

export default Tuv;