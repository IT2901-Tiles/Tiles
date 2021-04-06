import React from 'react';
import Chair from './Chair';
import Inside from './Inside';
import Lamp from './Lamp';
import PersonArmsUp from './PersonArmsUp';

function Dfv() {
    return (
        <div className='Dfv'>
            <svg viewBox="0 0 300 400">
                <Inside />
                <Lamp />
                <PersonArmsUp />
                <g>
                    <Chair />
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