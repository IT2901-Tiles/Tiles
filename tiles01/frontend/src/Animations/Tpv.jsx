import React from 'react';
import BookShelf from './BookShelf';
import Desk from './Desk';
import Temperature from './Temperature';

function Tpv() {
    return (
        <div className="Tpv">
            <svg height="400" width="300">
                {/* Background*/}
                <g>
                    <rect id="wall" width="300" height="400" fill="#b3e6ff" />
                    <BookShelf />
                    <Desk />
                </g>
                <Temperature />
                <g className="pen">
                    <rect x="200" y="230" height="110" width="30" fill="#ffb3b3" transform="rotate(10 215 285)" />

                    <polygon points="200 340, 230 340, 215 360" fill="#FFE5A5" transform="rotate(10 215 285)" />
                    <polygon points="208 350, 222 350, 215 360" fill="black" transform="rotate(10 215 285)" />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        keyTimes="0;0.025;0.05;0.075; 0.1;0.125; 0.15;0.175;0.2;0.225; 0.25; 0.275;0.3; 1"
                        values="10 215 322.5; 15 215 322.5; -15 215 322.5; 15 215 322.5; -15 215 322.5; 15 215 322.5;-15 215 322.5;15 215 322.5;-15 215 322.5;15 215 322.5; -15 215 322.5; 15 215 322.5; 10 215 322.5; 10 215 322.5"
                        begin="3s"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </g>


            </svg>
        </div>
    )
}

export default Tpv;