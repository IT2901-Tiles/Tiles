import React from 'react';
import ClothingShelf from './ClothingShelf';
import Inside from './Inside';
import PersonArmsUp from './PersonArmsUp';

function Dcv() {
    return (
        <div className='Dcv'>
            <h1>Drop, Clothing, Vibration</h1>
            <svg width="300" height="400">
                <Inside />
                <ClothingShelf />
                <PersonArmsUp />


                <g>
                    <line className="tshirt" x1="200" y1="200" x2="200" y2="239" stroke="#ff5050" strokeWidth="10" />
                    <line className="tshirtArm1" x1="200" y1="203" x2="175" y2="185" stroke="#ff5050" strokeWidth="10" />
                    <line className="tshirtArm2" x1="200" y1="203" x2="225" y2="185" stroke="#ff5050" strokeWidth="10" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0 0; 0 25;0 50; 0 75; 0 100; 0 100; -3 100; 3 100; -3 100; 3 100; -3 100; 3 100; -3 100; 3 100;-3 100;3 100;-3 100;3 100;-3 100;3 100;-3 100;3 100"
                        dur="5s"
                        repeatCount="indefinite" />

                </g>

            </svg>
        </div>
    );
}

export default Dcv;