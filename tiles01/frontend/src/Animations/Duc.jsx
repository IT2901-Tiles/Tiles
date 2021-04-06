import React from 'react';
import Cloud from './Cloud'
import Outdoors from './Outdoors';
import ClosedUmbrella from './ClosedUmbrella';
import PersonUmbrella from './PersonUmbrella';

function Duc() {
    return (
        <div>
            <svg viewBox="0 0 300 400">
                <Outdoors />
                <Cloud />
                <g transform="translate(-20, -20)">
                    <PersonUmbrella />
                </g>
                <g>
                    <ClosedUmbrella colour="black;black;yellow;yellow" keyTimes="0;0.3;0.31;1" dur="5" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="-20 -30; -20 100; -20 100"
                        dur="5s"
                        repeatCount="indefinite" />
                </g>
            </svg >
        </div >
    );
}

export default Duc;