import React from 'react';

function Sun() {
    return (
        <g className="sun">
            <circle cx="250" cy="50" r="30" strokeWidth="0" fill="yellow" />
            <line x1="290" y1="65" x2="320" y2="85" stroke="yellow" strokeWidth="3" />
            <line x1="290" y1="40" x2="320" y2="40" stroke="yellow" strokeWidth="3" />
            <line x1="280" y1="20" x2="310" y2="5" stroke="yellow" strokeWidth="3" />
            <line x1="260" y1="10" x2="265" y2="-10" stroke="yellow" strokeWidth="3" />
            <line x1="240" y1="10" x2="235" y2="-30" stroke="yellow" strokeWidth="3" />
            <line x1="220" y1="20" x2="205" y2="0" stroke="yellow" strokeWidth="3" />
            <line x1="210" y1="40" x2="175" y2="35" stroke="yellow" strokeWidth="3" />
            <line x1="210" y1="65" x2="175" y2="75" stroke="yellow" strokeWidth="3" />
            <line x1="225" y1="85" x2="205" y2="120" stroke="yellow" strokeWidth="3" />
            <line x1="255" y1="95" x2="255" y2="130" stroke="yellow" strokeWidth="3" />
            <line x1="280" y1="85" x2="305" y2="125" stroke="yellow" strokeWidth="3" />
            <animateTransform attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 250 50"
                to="360 250 50"
                dur="4s"
                repeatCount="indefinite" />

        </g>
    );
}


export default Sun;