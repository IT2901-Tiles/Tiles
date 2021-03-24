import React from 'react';
import ClothingShelf from './ClothingShelf';
import Inside from './Inside';
import Temperature from './Temperature';


function Tfc() {
    return (
        <div className="Tfv">
            <svg width="300" height="400">
                <Inside />
                <ClothingShelf colour="blue;blue;red;red;blue;blue"
                    keyTimes="0;0.3;0.31;0.7;0.71;1" dur="10" />
                <g transform="translate(0, 20)"><Temperature /></g>
            </svg>
        </div>
    );
}


export default Tfc;