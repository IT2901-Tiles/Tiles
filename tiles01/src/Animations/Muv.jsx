import React from 'react';
import Outdoors from './Outdoors';
import Cloud from './Cloud';
import ClosedUmbrella from './ClosedUmbrella';
import PersonUmbrella from './PersonUmbrella';


function Muv() {
    return (
        <div>
            <h1>Motion, Umbrella, Vibration</h1>
            <svg height="400" width="300">
                <Outdoors />
                <Cloud />
                <PersonUmbrella/>
                <g>
                    <ClosedUmbrella colour="black; black;black; black; black" dur="10" />
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-5 183 247"
                        to="5 183 247"
                        dur="0.1s"
                        repeatCount="indefinite" />
                </g>
            </svg >
        </div >
    );
}

export default Muv;