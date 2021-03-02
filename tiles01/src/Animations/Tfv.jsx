import React from 'react';
import Temperature from './Temperature';
import Lamp from './Lamp';
import Chair from './Chair';


function Tfv (){
    return(
        <div className="tfv">
            <h1>Temperature, Furniture, Vibration</h1>
            <svg width="300" height="400">
                <g className="background">
                    <rect id="wall" width="300" height="400" fill="#a3c2c2" />
                    <rect id="floor" x="0" y="300" width="300" height="100" fill="#006666" />
                    <Lamp/>
                </g>
                <g>
                    <Chair/>
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        keyTimes = "0;0.05; 0.1;0.15;0.2;0.25;0.3; 1"
                        values = "0 215 322.5; 10 215 322.5; -10 215 322.5;10 215 322.5; -10 215 322.5;10 215 322.5; 0 215 322.5;0 215 322.5"
                        begin="3s"
                        dur="10s"
                        repeatCount="indefinite" />
                </g>
                <g transform="translate(-130, 0)"> <Temperature/></g>
                
            </svg>

        </div>
    );
    
}
export default Tfv;