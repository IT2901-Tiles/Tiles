import React from 'react';
import Sun from './Sun';
import Outdoors from './Outdoors';

function Dbv() {
    return (
        <div className='Dbv'>
            <svg viewBox="0 0 300 400">
                <g>
                    <Outdoors />
                    <polygon points="0,300 0,160 150,300" fill="#8ccd7e" strokeWidth="3" />
                </g>
                <Sun />
                {/* Bike */}
                <g className="bike">

                    <g className="wheel1">
                        <line x1="20" y1="55" x2="80" y2="108" stroke="black" strokeWidth="3" />
                        <line x1="60" y1="40" x2="40" y2="120" stroke="black" strokeWidth="3" />
                        <line x1="88" y1="68" x2="12" y2="95" stroke="black" strokeWidth="3" />
                    </g>
                    <circle cx="50" cy="80" r="40" stroke="black" strokeWidth="3" fill="transparent" />
                    <g className="wheel2">
                        <line x1="130" y1="55" x2="190" y2="108" stroke="black" strokeWidth="3" />
                        <line x1="170" y1="40" x2="150" y2="120" stroke="black" strokeWidth="3" />
                        <line x1="198" y1="68" x2="122" y2="95" stroke="black" strokeWidth="3" />
                    </g>
                    <circle cx="160" cy="80" r="40" stroke="black" strokeWidth="3" fill="transparent" />

                    <polygon points="80,40 140,20 100,80 50,80" stroke="pink" strokeWidth="3" fill="transparent" />
                    <line x1="138" y1="10" x2="160" y2="80" stroke="pink" strokeWidth="3" />

                    <line x1="128" y1="10" x2="150" y2="10" stroke="black" strokeWidth="3" />
                    <line x1="70" y1="20" x2="100" y2="80" stroke="black" strokeWidth="3" />
                    <ellipse cx="70" cy="20" rx="15" ry="3" stroke="black" strokeWidth="3" />


                    {/* Person */}

                    <circle className="head" cx="90" cy="-50" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle className="eye1" cx="83" cy="-55" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="eye2" cx="97" cy="-55" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="nose" cx="90" cy="-50" r="1.3" stroke="black" strokeWidth="1" fill="black" />
                    <path className="smile" d="M78,-47 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <ellipse className="hatMain" cx="90" cy="-67" rx="20" ry="7" fill="red" />
                    <ellipse className="hatTop" cx="90" cy="-80" rx="7" ry="7" fill="red" />

                    <g>
                        <line className="arm1" x1="83" y1="-20" x2="29" y2="-27" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="thumb" x1="30" y1="-27" x2="30" y2="-40" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers1" x1="30" y1="-30" x2="20" y2="-30" stroke="#ffe5cc" strokeWidth="10" />
                        <line className="tshirtArm1" x1="83" y1="-19" x2="65" y2="-23" stroke="#ff5050" strokeWidth="8" />
                    </g>

                    <line className="arm2" x1="83" y1="-20" x2="130" y2="10" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="fingers2" x1="128" y1="10" x2="140" y2="10" stroke="#ffe5cc" strokeWidth="6" />

                    <line className="body" x1="90" y1="-40" x2="70" y2="17" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="leg" x1="70" y1="15" x2="100" y2="80" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="shoe" x1="97" y1="80" x2="110" y2="80" stroke="#3366cc" strokeWidth="7" />
                    <line className="pants" x1="70" y1="15" x2="95" y2="70" stroke="#006600" strokeWidth="6" />
                    <line className="tshirt" x1="85" y1="-22" x2="70" y2="17" stroke="#ff5050" strokeWidth="8" />
                    <line className="tshirtArm2" x1="83" y1="-19" x2="100" y2="-9" stroke="#ff5050" strokeWidth="8" />
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        keyTimes="0; 0.5; 0.53; 0.56; 0.59; 0.62; 0.65; 0.68; 0.71; 0.74; 0.77; 0.80; 0.83; 0.86; 0.89; 1;"
                        values="0 0; 80 190; 100 190; 90 190; 110 190; 100 190; 120 190; 110 190; 130 190; 120 190; 140 190; 130 190; 150 190; 140 190; 160 190; 200 190;"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </g>

            </svg>
        </div>
    );
}

export default Dbv;