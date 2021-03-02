import React from 'react';
import Sun from '../Animations/Sun';
import SmallTemperature from './SmallTemperature';


function Tbv() {
    return (
        <div>
            <h1>Temperature, Bike, Vibration</h1>
            <svg height="400" width="300">
                <g className="background">
                    <rect width="300" height="400" fill="#b3e6ff" />
                    <rect x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    <Sun/>
                </g>

                <g className="bike">
                    <g className="wheel1">
                        <line x1="20" y1="255" x2="80" y2="308" stroke="black" stroke-width="3" />
                        <line x1="60" y1="240" x2="40" y2="320" stroke="black" stroke-width="3" />
                        <line x1="88" y1="268" x2="12" y2="295" stroke="black" stroke-width="3" />
                    </g>
                    <circle cx="50" cy="280" r="40" stroke="black" stroke-width="3" fill="transparent" />
                    
                    <g className="wheel2">
                        <line x1="130" y1="255" x2="190" y2="308" stroke="black" stroke-width="3" />
                        <line x1="170" y1="240" x2="150" y2="320" stroke="black" stroke-width="3" />
                        <line x1="198" y1="268" x2="122" y2="295" stroke="black" stroke-width="3" />
                    </g>
                    <circle cx="160" cy="280" r="40" stroke="black" stroke-width="3" fill="transparent" />

                    <line x1="128" y1="210" x2="150" y2="210" stroke="black" stroke-width="3" />
                    <line x1="70" y1="220" x2="100" y2="280" stroke="black" stroke-width="3" />
                    <ellipse id="seat" cx="70" cy="220" rx="15" ry="3" stroke="black" stroke-width="3" />

                    <polygon points="80,240 140,220 100,280 50,280" stroke="grey" stroke-width="3" fill="transparent"/>
                    <line x1="138" y1="210" x2="160" y2="280" stroke="grey" stroke-width="3"/>
                    
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="-5 105 280"
                            to="5 105 280"
                            dur="0.5s"
                            repeatCount="indefinite" />
                   
                </g>
                <SmallTemperature/>
                

            </svg>

        </div>

    );
}

export default Tbv;

