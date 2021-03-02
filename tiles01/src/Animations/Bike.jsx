import React from 'react';

function Bike() {
    return (
        <g className="bike">
             <g className="wheel1">
                        <line x1="20" y1="255" x2="80" y2="308" stroke="black" stroke-width="3" />
                        <line x1="60" y1="240" x2="40" y2="320" stroke="black" stroke-width="3" />
                        <line x1="88" y1="268" x2="12" y2="295" stroke="black" stroke-width="3" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 50 280"
                            to="360 50 280"
                            dur="2s"
                            repeatCount="indefinite" />
                    </g>
                    <circle cx="50" cy="280" r="40" stroke="black" stroke-width="3" fill="transparent" />

                    <g className="wheel2">
                        <line x1="130" y1="255" x2="190" y2="308" stroke="black" stroke-width="3" />
                        <line x1="170" y1="240" x2="150" y2="320" stroke="black" stroke-width="3" />
                        <line x1="198" y1="268" x2="122" y2="295" stroke="black" stroke-width="3" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 160 280"
                            to="360 160 280"
                            dur="2s"
                            repeatCount="indefinite" />
                    </g>
                    <circle cx="160" cy="280" r="40" stroke="black" stroke-width="3" fill="transparent" />

                    <polygon id="frame" points="80,240 140,220 100,280 50,280" stroke="grey" stroke-width="3" fill="transparent" />

                    <line x1="138" y1="210" x2="160" y2="280" stroke="grey" stroke-width="3" />
                    <line x1="128" y1="210" x2="150" y2="210" stroke="black" stroke-width="3" />

                    <line x1="70" y1="220" x2="100" y2="280" stroke="black" stroke-width="3" />

                    <ellipse cx="70" cy="220" rx="15" ry="3" stroke="black" stroke-width="3" />
        </g>
    );
}

export default Bike;