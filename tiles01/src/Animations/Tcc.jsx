import React from 'react';


function Tcc() {
    return (
        <div>
            <h1>Temperature, Clothing, Colour change</h1>
            <svg width="300" height="400">
                <g className="background">
                    <rect id="sky" width="300" height="400" fill="#b3e6ff" />
                    <rect id="grass" x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    
                    <g className="cloud">
                        <circle className="cloud" cx="50" cy="80" r="35" fill="#ababab" />
                        <circle className="cloud" cx="90" cy="50" r="45" fill="#ababab" />
                        <circle className="cloud" cx="135" cy="50" r="30" fill="#ababab" />
                        <circle className="cloud" cx="160" cy="80" r="35" fill="#ababab" />
                        <rect className="cloud" x="50" y="75" width="110" height="40" fill="#ababab" />
                        <line className="rain" x1="45" y1="130" x2="30" y2="160" stroke="#ababab" strokeWidth="7" />
                        <line className="rain" x1="85" y1="130" x2="70" y2="160" stroke="#ababab" strokeWidth="7" />
                        <line className="rain" x1="125" y1="130" x2="110" y2="160" stroke="#ababab" strokeWidth="7" />
                        <line className="rain" x1="165" y1="130" x2="150" y2="160" stroke="#ababab" strokeWidth="7" />
                        
                    </g>
                </g>


                <g className="person">
                    <circle id="head" cx="140" cy="190" r="20" stroke="#ffe5cc" stroke-width="1" fill="#ffe5cc" />
                    <circle id="eye1" cx="133" cy="185" r="2" stroke="black" stroke-width="1" fill="black" />
                    <circle id="eye2" cx="147" cy="185" r="2" stroke="black" stroke-width="1" fill="black" />
                    <circle id="nose" cx="140" cy="190" r="1.3" stroke="black" stroke-width="1" fill="black" />
                    <path id="smile" d="M128,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" stroke-width="2" />

                    <ellipse id="hatMain" cx="140" cy="173" rx="20" ry="7" fill="red" />
                    <ellipse id="hatTop" cx="140" cy="160" rx="7" ry="7" fill="red" />

                    <g className="animatedArm1">
                        <line id="arm1" x1="140" y1="220" x2="99" y2="190" stroke="#ffe5cc" stroke-width="4" />
                        <line id="fingers1" x1="104" y1="190" x2="90" y2="190" stroke="#ffe5cc" stroke-width="6" />
                        <line id="tshirtArm1" x1="140" y1="221" x2="115" y2="203" stroke="#ff5050" stroke-width="8">
                            <animate
                                attributeName="stroke"
                                values="blue; red; blue"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </line>  
                    </g>

                    <g className="animatedArm2">
                        <line id="arm2" x1="140" y1="220" x2="180" y2="190" stroke="#ffe5cc" stroke-width="4" />
                        <line id="fingers2" x1="178" y1="190" x2="190" y2="190" stroke="#ffe5cc" stroke-width="6" />
                        <line id="tshirtArm2" x1="140" y1="221" x2="165" y2="203" stroke="#ff5050" stroke-width="8">
                            <animate
                                attributeName="stroke"
                                values="blue; red; blue"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </line>
                    </g>

                    <line id="body" x1="140" y1="200" x2="140" y2="255" stroke="#ffe5cc" stroke-width="4" />
                    <line id="tshirt" x1="140" y1="218" x2="140" y2="257" stroke="#ff5050" stroke-width="8">
                        <animate
                            attributeName="stroke"
                            values="blue; red; blue"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </line>

                    <g>
                        <line id="leg1" x1="140" y1="255" x2="150" y2="320" stroke="#ffe5cc" stroke-width="4" />
                        <line id="pant1" x1="140" y1="255" x2="150" y2="310" stroke="#006600" stroke-width="7" />
                        <line id="shoe1" x1="145" y1="320" x2="160" y2="320" stroke="#3366cc" stroke-width="7" /> 
                    </g>
                    <g>
                        <line id="leg2" x1="140" y1="255" x2="130" y2="320" stroke="#ffe5cc" stroke-width="4" />
                        <line id="pant2" x1="140" y1="255" x2="130" y2="310" stroke="#006600" stroke-width="7" />
                        <line id="shoe2" x1="120" y1="320" x2="135" y2="320" stroke="#3366cc" stroke-width="7" />
                    </g>
                </g>

                <g id="thermometer">
                            {/*The background of the thermometer */ }
                            <rect x="220" y="30" width="67.5" height="166" fill="#555555"/>
                            <rect x="240" y="40" width="27.5" height="120" fill="white"/>
                            <circle cx="253" cy="160" r="25" fill="white" />
                            <line x1="245" y1="50" x2="262" y2="50" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="60" x2="262" y2="60" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="70" x2="262" y2="70" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="80" x2="262" y2="80" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="90" x2="262" y2="90" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="100" x2="262" y2="100" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="110" x2="262" y2="110" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="120" x2="262" y2="120" stroke="black" strokeWidth="1"/>
                            <line x1="245" y1="130" x2="262" y2="130" stroke="black" strokeWidth="1"/>

                            {/*The Parts of the thermometer that are animated*/}
                            <line x1="253.5" y1="160" x2="253.5" y2="110" stroke="black" strokeWidth="10">
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
                            <circle cx="253" cy="160" r="15" fill="black" >
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

export default Tcc;