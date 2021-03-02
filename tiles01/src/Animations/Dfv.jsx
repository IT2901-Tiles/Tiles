import React from 'react';
import Lamp from './Lamp';

function Dfv(){
    return(
        <div className='Dfv'>
            <h1>Drop, Furniture, Vibration</h1>
            <svg width="300" height="400">
                {/* Background */}
                <g className="background">
                    <rect id="wall" width="300" height="400" fill="#a3c2c2" />
                    <rect id="floor" x="0" y="300" width="300" height="100" fill="#006666" />
                    <Lamp/>
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
                    </g>
                    <g>
                        <line id="arm2" x1="140" y1="220" x2="180" y2="190" stroke="#ffe5cc" stroke-width="4" />
                        <line id="fingers2" x1="178" y1="190" x2="190" y2="190" stroke="#ffe5cc" stroke-width="6" />
                    </g>
                    <line id="body" x1="140" y1="200" x2="140" y2="255" stroke="#ffe5cc" stroke-width="7" />


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
                    <g>
                        <line id="tshirt" x1="140" y1="218" x2="140" y2="257" stroke="yellow" stroke-width="10" />
                        <line id="tshirtArm1" x1="140" y1="221" x2="115" y2="203" stroke="yellow" stroke-width="10" />
                        <line id="tshirtArm2" x1="140" y1="221" x2="165" y2="203" stroke="yellow" stroke-width="10" />
                    </g>
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
                        values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2" 
                        dur="5s" 
                        repeatCount="indefinite" />
                    <animateTransform 
                        attributeName="transform" 
                        attributeType="XML" 
                        type="translate" 
                        values="-20 -50; -20 50; -20 50" 
                        dur="5s" 
                        repeatCount="indefinite" 
                        additive="sum" />

                </g>
            </svg>
        </div>
    );
}

export default Dfv;