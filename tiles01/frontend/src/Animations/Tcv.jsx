import React from 'react';
import ClothingShelf from './ClothingShelf';
import Inside from './Inside';
import SmallTemperature from './SmallTemperature';

function Tcv() {
    return (
        <div className="Tcv">
            <svg viewBox="0 0 300 400">
                <Inside />
                <ClothingShelf />
                <g className="person">
                    <circle className="head" cx="140" cy="190" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle className="eye1" cx="133" cy="185" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="eye2" cx="147" cy="185" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="nose" cx="140" cy="190" r="1.3" stroke="black" strokeWidth="1" fill="black" />
                    <path className="smile" d="M128,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <ellipse className="hatMain" cx="140" cy="173" rx="20" ry="7" fill="red" />
                    <ellipse className="hatTop" cx="140" cy="160" rx="7" ry="7" fill="red" />

                    <g>
                        <line className="arm1" x1="140" y1="220" x2="99" y2="190" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers1" x1="104" y1="190" x2="90" y2="190" stroke="#ffe5cc" strokeWidth="6" />
                    </g>
                    <g>
                        <line className="arm2" x1="140" y1="220" x2="180" y2="190" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers2" x1="178" y1="190" x2="190" y2="190" stroke="#ffe5cc" strokeWidth="6" />
                    </g>
                    <line className="body" x1="140" y1="200" x2="140" y2="255" stroke="#ffe5cc" strokeWidth="7" />

                    <g>
                        <line className="leg1" x1="140" y1="255" x2="150" y2="320" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="pant1" x1="140" y1="255" x2="150" y2="310" stroke="#006600" strokeWidth="7" />
                        <line className="shoe1" x1="145" y1="320" x2="160" y2="320" stroke="#3366cc" strokeWidth="7" />

                    </g>
                    <g>
                        <line className="leg2" x1="140" y1="255" x2="130" y2="320" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="pant2" x1="140" y1="255" x2="130" y2="310" stroke="#006600" strokeWidth="7" />
                        <line className="shoe2" x1="120" y1="320" x2="135" y2="320" stroke="#3366cc" strokeWidth="7" />

                    </g>
                    <g>
                        <line className="tshirt" x1="140" y1="218" x2="140" y2="257" stroke="#ff5050" strokeWidth="10" />
                        <line className="tshirtArm1" x1="140" y1="221" x2="115" y2="203" stroke="#ff5050" strokeWidth="10" />
                        <line className="tshirtArm2" x1="140" y1="221" x2="165" y2="203" stroke="#ff5050" strokeWidth="10" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            from="80 0"
                            to="0 0"
                            dur="3s"
                            repeatCount="1"
                        />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            values="-2 0; 2 0; -2 0; 2 0; -2 0;"
                            type="translate"
                            begin="4s"
                            dur="1s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        />
                    </g>
                </g>
                <SmallTemperature />
            </svg>
        </div>
    );
}

export default Tcv;