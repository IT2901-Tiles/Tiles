import React from 'react';
import ClothingShelf from './ClothingShelf';
import Inside from './Inside';
import Temperature from './Temperature';


function Tfc (){
    return(
        <div className="tfv">
            <h1>Temperature, Furniture, Colour change</h1>
            <svg width="300" height="400">
                <Inside/>
                <ClothingShelf colour="blue;red;blue;" dur="10"/>
                <g transform="translate(0, 20)"><Temperature/></g>
            </svg>
        </div>
    );
}


export default Tfc;
