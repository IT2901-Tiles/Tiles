import React from 'react';
import Temperature from './Temperature';
import Lamp from './Lamp';
import Chair from './Chair';
import Inside from './Inside';

function Tfv() {
    return (
        <div className="tfv">
            <svg viewBox="0 0 300 400">
                <Inside />
                <Lamp />
                <g>
                    <Chair />
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        keyTimes="0;0.05; 0.1;0.15;0.2;0.25;0.3; 1"
                        values="0 215 322.5; 10 215 322.5; -10 215 322.5;10 215 322.5; -10 215 322.5;10 215 322.5; 0 215 322.5;0 215 322.5"
                        begin="3s"
                        dur="10s"
                        repeatCount="indefinite" />
                </g>
                <g transform="translate(-130, 0)"> <Temperature /></g>
            </svg>
        </div>
    );
}
export default Tfv;