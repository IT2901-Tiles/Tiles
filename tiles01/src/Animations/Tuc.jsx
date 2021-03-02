import React from 'react';
import Cloud from './Cloud';
import Temperature from './Temperature'

function Tuc(){
    return(
        <div className='tuc'>
            <h1>Temperature, Umbrella, Colour Change</h1>

            <svg height="400" width="300">
                <g> {/* Background */}
                    <rect id="sky" width="300" height="400" fill="#b3e6ff" />
                    <rect id="grass" x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    <Cloud dur="10" begin="6s"/>
                </g>

                <Temperature/>

                
                <g className="person">
                    <circle id="head" cx="40" cy="210" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle id="eye1" cx="33" cy="205" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle id="eye2" cx="47" cy="205" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle id="nose" cx="40" cy="210" r="1.3" stroke="black" strokeWidth="1" fill="black" />


                    <ellipse id="hatMain" cx="40" cy="193" rx="20" ry="7" fill="red" />
                    <ellipse id="hatTop" cx="40" cy="180" rx="7" ry="7" fill="red" />
                    <path id="smile" d="M28,213 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <g>
                        <line id="arm1" x1="40" y1="235" x2="20" y2="280" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="fingers1" x1="10" y1="285" x2="22" y2="280" stroke="#ffe5cc" strokeWidth="6" />
                        <line id="tshirtArm1" x1="39" y1="238" x2="24" y2="267" stroke="#ff5050" strokeWidth="8" />
                    </g>
                    <g>
                        <line id="arm2" x1="40" y1="235" x2="80" y2="260" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="fingers2" x1="78" y1="260" x2="90" y2="260" stroke="#ffe5cc" strokeWidth="6" />
                        <line id="tshirtArm2" x1="41" y1="238" x2="70" y2="255" stroke="#ff5050" strokeWidth="8" />

                    </g>
                    <line id="body" x1="40" y1="220" x2="40" y2="275" stroke="#ffe5cc" strokeWidth="4" />
                    <line id="tshirt" x1="40" y1="238" x2="40" y2="277" stroke="#ff5050" strokeWidth="8"/>

                    

                    <g>
                        <line id="leg1" x1="40" y1="275" x2="50" y2="340" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="pant1" x1="40" y1="275" x2="50" y2="330" stroke="#006600" strokeWidth="7" />
                        <line id="shoe1" x1="45" y1="340" x2="60" y2="340" stroke="#3366cc" strokeWidth="7" />

                    </g>
                    <g>
                        <line id="leg2" x1="40" y1="275" x2="30" y2="340" stroke="#ffe5cc" strokeWidth="4" />
                        <line id="pant2" x1="40" y1="275" x2="30" y2="330" stroke="#006600" strokeWidth="7" />
                        <line id="shoe2" x1="20" y1="340" x2="35" y2="340" stroke="#3366cc" strokeWidth="7" />

                    </g>
                </g>


                <g> 
                    <line className="umbrella" x1="84" y1="265" x2="84" y2="170" stroke="#000000" strokeWidth="2" />
                    <path id="umbrellaHandle" d="M 83.6,263.3 a20,90 0 0,0 15,0" fill="transparent"  stroke="#000000" strokeWidth="2" />
                    <path id="umbrella1" className="umbrella" d="m 5,170 L85,170 L85,120 Q 84,100 5,170" fill="black" />
                    <path id="umbrella2" className="umbrella" d="M 180,170 L 83,170 L 83,120 Q 84,100 170,170" fill="black" /> 
                    <animate
                        xlinkHref = "#umbrella1"
                        attributeName="fill" 
                        keyTimes="0;0.2;0.4;0.6;1"
                        values="blue; blue;yellow; yellow; blue" 
                        begin = "0s"
                        dur="10s" 
                        repeatCount="indefinite" 
                        />
                    <animate
                        xlinkHref = "#umbrella2"
                        attributeName="fill" 
                        keyTimes="0;0.2;0.4; 0.6;1"
                        values="blue; blue;yellow; yellow; blue" 
                        begin = "0s"
                        dur="10s" 
                        repeatCount="indefinite" 
                        />
                    
                    
                </g>

            </svg>


        </div>
    )
}

export default Tuc;