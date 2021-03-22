import React from 'react';
import ClosedUmbrella from './ClosedUmbrella';
import Cloud from './Cloud'
import Outdoors from './Outdoors';
import PersonUmbrella from './PersonUmbrella';

function Duv() {
    return (
        <div>
            <svg height="400" width="300">
                <Outdoors />
                <Cloud />
                <g transform="translate(-20, -20)">
                    <PersonUmbrella />
                </g>
                <g>
                    <ClosedUmbrella colour="black; black;black; black; black" dur="10" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2;0;2"
                        dur="5s"
                        repeatCount="indefinite" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="-20 -30; -20 100; -20 100"
                        dur="5s"
                        repeatCount="indefinite"
                        additive="sum" />
                </g>
            </svg >
        </div >
    );
}

export default Duv;