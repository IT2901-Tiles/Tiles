import React from 'react';

function SmallTemperature() {
    return (
        <g id="SmallTemperature">
            {/*The background of the thermometer */ }
            <rect x="240" y="160" width="30" height="100" fill="#555555"/>
            <rect x="249" y="165" width="12" height="69" fill="white"/>
            <circle cx="255" cy="240" r="11" fill="white" />
            <line x1="251" y1="170" x2="259" y2="170" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="175" x2="259" y2="175" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="180" x2="259" y2="180" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="188" x2="259" y2="188" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="195" x2="259" y2="195" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="203" x2="259" y2="203" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="210" x2="259" y2="210" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="218" x2="259" y2="218" stroke="black" strokeWidth="1"/>
            <line x1="251" y1="225" x2="259" y2="225" stroke="black" strokeWidth="1"/>

            {/*The Parts of the thermometer that are animated*/}
            <line x1="255" y1="240" x2="255" y2="300" stroke="black" strokeWidth="7">
            <animate 
                attributeName="y2"
                dur = "10s"
                repeatCount = "indefinite"
                values="240; 170; 240"
                keyTimes="0;0.5;1"
            />
            
                <animate 
                    attributeName = "stroke"
                    dur = "10s"
                    repeatCount="indefinite"
                    values="blue;red;blue;"
                />
            </line>
            <circle cx="255" cy="240" r="7" fill="black" >
                <animate
                    attributeName="fill"
                    values="blue;red;blue;"
                    dur="10s"
                    repeatCount="indefinite"/>
            </circle>
        </g>    

        
    );
}

export default SmallTemperature;