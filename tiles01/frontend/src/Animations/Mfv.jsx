import React from 'react';
import Chair from './Chair';
import Lamp from './Lamp';
import Inside from './Inside';

function Mfv() {
    return (
        <div className="Mfv">
            <svg id="mpv" viewBox="0 0 300 400">
                <Inside />
                <Lamp />
                <g className="person">
                    <circle className="head" cx="90" cy="190" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle className="eye1" cx="83" cy="185" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="eye2" cx="97" cy="185" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="nose" cx="90" cy="190" r="1.3" stroke="black" strokeWidth="1" fill="black" />
                    <path className="smile" d="M78,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <ellipse className="hatMain" cx="90" cy="173" rx="20" ry="7" fill="red" />
                    <ellipse className="hatTop" cx="90" cy="160" rx="7" ry="7" fill="red" />

                    <g>
                        <line className="arm1" x1="90" y1="220" x2="49" y2="253" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers1" x1="54" y1="253" x2="40" y2="253" stroke="#ffe5cc" strokeWidth="6" />
                        <line className="tshirtArm1" x1="90" y1="221" x2="65" y2="237" stroke="#ff5050" strokeWidth="8" />
                    </g>

                    <line className="arm2" x1="90" y1="220" x2="130" y2="230" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="tshirtArm2" x1="90" y1="222" x2="110" y2="226" stroke="#ff5050" strokeWidth="8" />
                    <line className="fingers2" x1="125" y1="230" x2="137" y2="228" stroke="#ffe5cc" strokeWidth="6" />

                    <line className="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" strokeWidth="7" />
                    <line className="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" strokeWidth="6" />
                    <line className="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" strokeWidth="8" />

                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        keyTimes="0;0.5;1"
                        values="-20 0; 45 0; -20 0"
                        type="translate"
                        begin="4s"
                        dur="3s"
                        repeatCount="indefinite"
                        calcMode="linear"
                    />
                </g>
                <g>
                    <Chair />
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-10 225 310"
                        to="10 225 310"
                        dur="0.5s"
                        repeatCount="indefinite" />
                </g>
            </svg>
        </div>
    );
}

export default Mfv;