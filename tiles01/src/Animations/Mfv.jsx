import React from 'react';


function Mfv() {
    return (
        <div className="Mfv">
            <svg id="mpv" height="400" width="300">
                <g className="background">
                    <rect id="wall" width="300" height="400" fill="#739900"/>
                    <rect id="floor" x="0" y="300" width="300" height="100" fill="#800000"/>
                </g>

                <g className="person">
                    <circle id="head" cx="90" cy="190" r="20" stroke="#ffe5cc" stroke-width="1" fill="#ffe5cc"/>
                    <circle id="eye1" cx="83" cy="185" r="2" stroke="black" stroke-width="1" fill="black"/>
                    <circle id="eye2" cx="97" cy="185" r="2" stroke="black" stroke-width="1" fill="black"/>
                    <circle id="nose" cx="90" cy="190" r="1.3" stroke="black" stroke-width="1" fill="black"/>
                    <path id="smile" d="M78,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" stroke-width="2"/>

                    <ellipse id="hatMain" cx="90" cy="173" rx="20" ry="7" fill="red" />
                    <ellipse id="hatTop" cx="90" cy="160" rx="7" ry="7" fill="red" />
                        
                    <g>
                        <line id="arm1" x1="90" y1="220" x2="49" y2="253" stroke="#ffe5cc" stroke-width="4"/>
                        <line id="fingers1" x1="54" y1="253" x2="40" y2="253" stroke="#ffe5cc" stroke-width="6"/>
                        <line id="tshirtArm1" x1="90" y1="221" x2="65" y2="237" stroke="#ff5050" stroke-width="8"/>
                    </g>

                    <line id="arm2" x1="90" y1="220" x2="130" y2="230" stroke="#ffe5cc" stroke-width="4"/>
                    <line id="tshirtArm2" x1="90" y1="222" x2="110" y2="226" stroke="#ff5050" stroke-width="8"/>
                    <line id="fingers2" x1="125" y1="230" x2="137" y2="228" stroke="#ffe5cc" stroke-width="6"/>
                    
                    

                    <line id="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" stroke-width="4"/>
                    <line id="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" stroke-width="7"/>
                    <line id="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" stroke-width="6"/>
                    <line id="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" stroke-width="8"/>
                </g>

                <g className="chair">
                    
                    <line id="leftLeg1" x1="204" y1="250" x2="207" y2="270" stroke="#ff8c1a" stroke-width="4"/>
                    <line id="rightLeg1" x1="246" y1="250" x2="243" y2="270" stroke="#ff8c1a" stroke-width="4"/>
                    
                    <line id="leftLeg2" x1="208" y1="270" x2="204" y2="310" stroke="#ff8c1a" stroke-width="5"/>
                    <line id="rightLeg2" x1="242" y1="270" x2="246" y2="310" stroke="#ff8c1a" stroke-width="5"/>
                    
                    <line id="chairLine" x1="208" y1="280" x2="242" y2="280" stroke="#ff8c1a" stroke-width="4"/>
                    <rect id="chairTop" x="200" y="222" width="50" height="30" fill="#ffe066"/>
                    <line id="seat" x1="198" y1="270" x2="252" y2="270" stroke="#ffe066" stroke-width="8"/>

                    <circle id="circleLeft1" cx="207" cy="230" r="2" stroke-width="1" fill="#ff8c1a"/>
                    <circle id="circleLeft2" cx="207" cy="244" r="2" stroke-width="1" fill="#ff8c1a"/>
                    <circle id="circleRight1" cx="243" cy="230" r="2" stroke-width="1" fill="#ff8c1a"/>
                    <circle id="circleRight2" cx="243" cy="244" r="2" stroke-width="1" fill="#ff8c1a"/>

                    <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            from="0 208 310"
                            to="25 208 310"
                            dur="1s"
                            repeatCount="indefinite"/>
                </g>
               
                
            </svg>

              
           
            
            
        </div> 
    );
}

export default Mfv;