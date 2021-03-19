import React from 'react';
import Cloud from './Cloud';
import Outdoors from './Outdoors';
import Temperature from './Temperature';
import OpenUmbrella from './OpenUmbrella';
import PersonUmbrella from './PersonUmbrella';

function Tuc() {
    return (
        <div className='tuc'>

            <svg viewBox="0 0 300 400">
                <Outdoors />
                <Cloud dur="10" begin="6s" />
                <Temperature />
                <g transform="translate(-100, 0)"><PersonUmbrella /></g>
                <g transform="translate(-100, 0)">
                    <OpenUmbrella colour="blue; blue;yellow; yellow; blue;blue" keyTimes="0;0.3;0.31;0.7;0.71;1" dur="10" />
                </g>
            </svg>
        </div>
    )
}

export default Tuc;