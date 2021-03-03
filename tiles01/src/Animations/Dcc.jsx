import React from 'react';
import ClothingShelf from './ClothingShelf';
import Inside from './Inside';

function Dcc(){
    return(
        <div className='Dcc'>
            <h1>Drop, Clothing, Colour Change</h1>
            <svg width="300" height="400">
                <Inside/>
                <ClothingShelf/>
              
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
                    <g>
                        <line id="tshirt" x1="200" y1="200" x2="200" y2="239" stroke="#ff5050" stroke-width="10">
                        <animate 
                        attributeName="stroke" 
                        values="red;red;yellow;yellow;yellow" 
                        dur="5s" 
                        repeatCount="indefinite" />
                            </line>
                        <line id="tshirtArm1" x1="200" y1="203" x2="175" y2="185" stroke="#ff5050" stroke-width="10">
                        <animate 
                        attributeName="stroke" 
                        values="red;red;yellow;yellow;yellow" 
                        dur="5s" 
                        repeatCount="indefinite" />
                            </line>
                        <line id="tshirtArm2" x1="200" y1="203" x2="225" y2="185" stroke="#ff5050" stroke-width="10">
                        <animate 
                        attributeName="stroke" 
                        values="red;red;yellow;yellow;yellow" 
                        dur="5s" 
                        repeatCount="indefinite" />
                            </line>
                        <animateTransform 
                        attributeName="transform" 
                        attributeType="XML" 
                        type="translate" 
                        values="0 0; 0 100; 0 100;" 
                        dur="5s" 
                        repeatCount="indefinite" />
                         
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default Dcc;