import React from 'react';
import Sun from '../Animations/Sun';
import Outdoors from './Outdoors';

function Mbv() {
    return (
        <div>
            <svg viewBox="0 0 300 400">
                <Outdoors />
                <g className="bike">
                    <g className="wheel1">
                        <line x1="20" y1="255" x2="80" y2="308" stroke="black" strokeWidth="3" />
                        <line x1="60" y1="240" x2="40" y2="320" stroke="black" strokeWidth="3" />
                        <line x1="88" y1="268" x2="12" y2="295" stroke="black" strokeWidth="3" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 50 280"
                            to="360 50 280"
                            dur="2s"
                            repeatCount="indefinite" />
                    </g>
                    <circle cx="50" cy="280" r="40" stroke="black" strokeWidth="3" fill="transparent" />

                    <g className="wheel2">
                        <line x1="130" y1="255" x2="190" y2="308" stroke="black" strokeWidth="3" />
                        <line x1="170" y1="240" x2="150" y2="320" stroke="black" strokeWidth="3" />
                        <line x1="198" y1="268" x2="122" y2="295" stroke="black" strokeWidth="3" />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 160 280"
                            to="360 160 280"
                            dur="2s"
                            repeatCount="indefinite" />
                    </g>
                    <circle cx="160" cy="280" r="40" stroke="black" strokeWidth="3" fill="transparent" />

                    <polygon className="frame" points="80,240 140,220 100,280 50,280" stroke="grey" strokeWidth="3" fill="transparent" />

                    <line x1="138" y1="210" x2="160" y2="280" stroke="grey" strokeWidth="3" />
                    <line x1="128" y1="210" x2="150" y2="210" stroke="black" strokeWidth="3" />

                    <line x1="70" y1="220" x2="100" y2="280" stroke="black" strokeWidth="3" />

                    <ellipse cx="70" cy="220" rx="15" ry="3" stroke="black" strokeWidth="3" />
                </g>

                <g className="person">
                    <circle className="head" cx="90" cy="150" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle className="eye1" cx="83" cy="145" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="eye2" cx="97" cy="145" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="nose" cx="90" cy="150" r="1.3" stroke="black" strokeWidth="1" fill="black" />
                    <path className="smile" d="M78,153 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <ellipse className="hatMain" cx="90" cy="133" rx="20" ry="7" fill="red" />
                    <ellipse className="hatTop" cx="90" cy="120" rx="7" ry="7" fill="red" />

                    <g>
                        <line className="arm1" x1="83" y1="180" x2="29" y2="173" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="thumb" x1="30" y1="173" x2="30" y2="160" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers1" x1="30" y1="170" x2="20" y2="170" stroke="#ffe5cc" strokeWidth="10" />
                        <line className="tshirtArm1" x1="83" y1="181" x2="65" y2="177" stroke="#ff5050" strokeWidth="8" />

                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 83 180"
                            to="25 83 180"
                            dur="0.5s"
                            repeatCount="indefinite" />
                    </g>

                    <line className="arm2" x1="83" y1="180" x2="130" y2="210" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="fingers2" x1="128" y1="210" x2="140" y2="210" stroke="#ffe5cc" strokeWidth="6" />

                    <line className="body" x1="90" y1="160" x2="70" y2="217" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="leg" x1="70" y1="215" x2="100" y2="280" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="shoe" x1="97" y1="280" x2="110" y2="280" stroke="#3366cc" strokeWidth="7" />
                    <line className="pants" x1="70" y1="215" x2="95" y2="270" stroke="#006600" strokeWidth="6" />
                    <line className="tshirt" x1="85" y1="178" x2="70" y2="217" stroke="#ff5050" strokeWidth="8" />
                    <line className="tshirtArm2" x1="83" y1="181" x2="100" y2="191" stroke="#ff5050" strokeWidth="8" />
                </g>
                <Sun />
            </svg>
        </div>

    );
}

export default Mbv;