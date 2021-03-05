import React from 'react';
import Cloud from './Cloud';
import Outdoors from './Outdoors';
import Temperature from './Temperature';
import OpenUmbrella from './OpenUmbrella';
import PersonUmbrella from './PersonUmbrella';

function Tuc() {
    return (
        <div className='tuc'>
            <h1>Temperature, Umbrella, Colour Change</h1>

            <svg height="400" width="300">
                <Outdoors />
                <Cloud dur="10" begin="6s" />
                <Temperature />
                <g transform="translate(-100, 0)"><PersonUmbrella /></g>
                <g transform="translate(-100, 0)">
                    <OpenUmbrella colour="blue; blue;yellow; yellow; blue" dur="10" />
                </g>
            </svg>
        </div>
    )
}

export default Tuc;