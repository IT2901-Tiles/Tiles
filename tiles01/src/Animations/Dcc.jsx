import React from 'react';
import ClothingShelf from './ClothingShelf';
import Inside from './Inside';
import PersonArmsUp from './PersonArmsUp';

function Dcc() {
    return (
        <div className='Dcc'>
            <h1>Drop, Clothing, Colour Change</h1>
            <svg width="300" height="400">
                <Inside />
                <ClothingShelf />

                <PersonArmsUp />
                <g>
                    <line id="tshirt" x1="200" y1="200" x2="200" y2="239" stroke="#ff5050" strokeWidth="10">
                        <animate
                            attributeName="stroke"
                            values="red;red;yellow;yellow;yellow"
                            dur="5s"
                            repeatCount="indefinite" />
                    </line>
                    <line id="tshirtArm1" x1="200" y1="203" x2="175" y2="185" stroke="#ff5050" strokeWidth="10">
                        <animate
                            attributeName="stroke"
                            values="red;red;yellow;yellow;yellow"
                            dur="5s"
                            repeatCount="indefinite" />
                    </line>
                    <line id="tshirtArm2" x1="200" y1="203" x2="225" y2="185" stroke="#ff5050" strokeWidth="10">
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
            </svg>
        </div>
    );
}

export default Dcc;