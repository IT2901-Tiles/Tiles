import React from 'react';

function Temperature() {
    return (
        // This part has a blue background for the outdoor animations
            <g className="temperature">
                <rect x="250" y="200" width="15" height="45" fill="white" stroke="black" stroke-width="1" />

                <line x1="252" y1="222.5" x2="263" y2="222.5" stroke="black" stroke-width="1"/>
                <line x1="255" y1="211.25" x2="260" y2="211.25" stroke="black" stroke-width="1"/>
                <line x1="255" y1="205.75" x2="260" y2="205.75" stroke="black" stroke-width="1"/>
                <line x1="255" y1="217" x2="260" y2="217" stroke="black" stroke-width="1"/>

                <line x1="255" y1="228" x2="260" y2="228" stroke="black" stroke-width="1"/>
                <line x1="255" y1="233.75" x2="260" y2="233.75" stroke="black" stroke-width="1"/>
                <line x1="255" y1="238.25" x2="260" y2="238.25" stroke="black" stroke-width="1"/>


                <line x1="257.5" y1="201" x2="257.5" y2="244.5" stroke="red" stroke-width="4">
                    <animate
                        attributeName="stroke"
                        values="red;blue;red;"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        from="80 0"
                        to="0 0"
                        dur="10s"
                        repeatCount="1"
                    />
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        keyTimes="0;0.5;1"
                        values="0 35; 0 0; 0 35"
                        type="translate"
                        begin="4s"
                        dur="10s"
                        repeatCount="indefinite"
                        calcMode="linear"
                    />

                </line>
                <rect x="250" y="245.5" width="15" height="45" fill="#b3e6ff"/>
            </g>
        
    );
}

export default Temperature;