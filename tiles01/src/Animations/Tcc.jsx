import React from 'react';
import Cloud from './Cloud';
import SmallTemperature from './SmallTemperature';
import Outdoors from './Outdoors';
import PersonArmsUp from './PersonArmsUp';


function Tcc() {
    return (
        <div>
            <h1>Temperature, Clothing, Colour change</h1>
            <svg width="300" height="400">
                <Outdoors/>
                <Cloud/>
                <PersonArmsUp colour="blue;red;blue" dur="10"/>
                <SmallTemperature/>

            </svg>

        </div>
    );
}

export default Tcc;