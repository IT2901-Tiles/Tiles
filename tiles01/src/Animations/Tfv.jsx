import React from 'react';


function Tfv (){
    return(
        <div className="tfv">
            <h1>Temperature, Furniture, Vibration</h1>
            <svg width="300" height="400">
                <g className="background">
                    <rect id="wall" width="300" height="400" fill="#a3c2c2" />
                    <rect id="floor" x="0" y="300" width="300" height="100" fill="#006666" />
                    <line id="lamp" x1="200" y1="0" x2="200" y2="50" stroke="black" stroke-width="3" />
                    <line id="lamp1" x1="200" y1="50" x2="200" y2="58" stroke="black" stroke-width="6" />
                    <circle id="lampBulb" cx="200" cy="68" r="10" stroke="black" stroke-width="1" fill="#a3c2c2" />
                    <polygon id="light" points="199,59 201,59 205,70 195,70" stroke="#ffff66" fill="#ffff66"/>
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
                        keyTimes = "0;0.05; 0.1;0.15;0.2;0.25;0.3; 1"
                        values = "0 215 322.5; 10 215 322.5; -10 215 322.5;10 215 322.5; -10 215 322.5;10 215 322.5; 0 215 322.5;0 215 322.5"
                        begin="3s"
                        dur="10s"
                        repeatCount="indefinite" />
                </g>

                <g id="thermometer">
                    {/*The backgroun of the thermometer */ }
                    <rect x="50" y="30" width="67.5" height="166" fill="#555555"/>
                    <rect x="70" y="40" width="27.5" height="120" fill="white"/>
                    <circle cx="83" cy="160" r="25" fill="white" />
                    <line x1="75" y1="50" x2="92" y2="50" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="60" x2="92" y2="60" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="70" x2="92" y2="70" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="80" x2="92" y2="80" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="90" x2="92" y2="90" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="100" x2="92" y2="100" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="110" x2="92" y2="110" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="120" x2="92" y2="120" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="130" x2="92" y2="130" stroke="black" strokeWidth="1"/>

                    {/*The Parts of the thermometer that are animated*/}
                    <line x1="83.5" y1="160" x2="83.5" y2="110" stroke="black" strokeWidth="10">
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
                    <circle cx="83" cy="160" r="15" fill="black" >
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
export default Tfv;