import React from 'react';
import Chair from './Chair';
import Inside from './Inside';
import Lamp from './Lamp';
import PersonArmsUp from './PersonArmsUp';

function Dfc() {
    return (
        <div className='Dfc'>
            <svg viewBox="0 0 300 400">
                <Inside />
                <Lamp />

                <PersonArmsUp />
                <g>
                    <Chair colour="#ffe066;#ffe066;#ffe066;#ffe066;grenn;green;green;green;green;green" dur="5" />
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

export default Dfc;