import React from 'react';
import Cloud from '../Animations/Cloud';
import Sun from '../Animations/Sun';
import Outdoors from './Outdoors';
import Temperature from './Temperature';
import OpenUmbrella from './OpenUmbrella';
import PersonUmbrella from './PersonUmbrella';

function Tuv() {
    return (
        <div className='tuv'>
            <svg viewBox="0 0 300 400">
                <Outdoors />
                <Sun />
                <Cloud />

                <g transform="translate(-155, 180)"><Temperature /></g>

                <PersonUmbrella />
                <g>
                    <OpenUmbrella />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        keyTimes="0;0.05; 0.1;0.15;0.2;0.25;0.3;0.35; 0.4; 1"
                        values="0 183 247; 0 183 247; 0 183 247; -10 183 247; 5 183 247; -10 183 247; 5 183 247; -10 183 247; 0 183 247; 0 183 247;"
                        begin="4s"
                        dur="13s"
                        repeatCount="indefinite" />

                </g>
            </svg>
        </div>
    );
}

export default Tuv;