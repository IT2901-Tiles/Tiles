import React from 'react';

function Temperature() {
    return (
        <g id="thermometer">
            {/*The background of the thermometer */ }
            <rect x="180" y="30" width="67.5" height="166" fill="#555555"/>
            <rect x="200" y="40" width="27.5" height="120" fill="white"/>
            <circle cx="213" cy="160" r="25" fill="white" />
            <line x1="205" y1="50" x2="222" y2="50" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="60" x2="222" y2="60" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="70" x2="222" y2="70" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="80" x2="222" y2="80" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="90" x2="222" y2="90" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="100" x2="222" y2="100" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="110" x2="222" y2="110" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="120" x2="222" y2="120" stroke="black" strokeWidth="1"/>
            <line x1="205" y1="130" x2="222" y2="130" stroke="black" strokeWidth="1"/>

            {/*The Parts of the thermometer that are animated*/}
            <line x1="213.5" y1="160" x2="213.5" y2="110" stroke="black" strokeWidth="10">
                <animate 
                    attributeName="y2"
                    dur = "10s"
                    repeatCount = "indefinite"
                    values="145; 50; 145"
                    keyTimes="0;0.5;1"
                />
                <animate 
                    attributeName = "stroke"
                    dur = "10s"
                    repeatCount="indefinite"
                    values="blue;red;blue;"
                />
            </line>
            <circle cx="213" cy="160" r="15" fill="black" >
                <animate
                    attributeName="fill"
                    values="blue;red;blue;"
                    dur="10s"
                    repeatCount="indefinite"/>
            </circle>
        </g>
        
    );
}

export default Temperature;