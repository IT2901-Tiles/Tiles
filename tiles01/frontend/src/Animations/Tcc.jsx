import React from 'react';
import Cloud from './Cloud';
import SmallTemperature from './SmallTemperature';
import Outdoors from './Outdoors';
import PersonArmsUp from './PersonArmsUp';

function Tcc() {
    return (
        <div>
            <svg viewBox="0 0 300 400">
                <Outdoors />
                <Cloud />
                <PersonArmsUp colour="blue;blue;red;red;blue;blue"
                    keyTimes="0;0.3;0.31;0.7;0.71;1" dur="10" />
                <SmallTemperature />
            </svg>
        </div>
    );
}

export default Tcc;