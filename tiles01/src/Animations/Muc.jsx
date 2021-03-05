import React from 'react';
import Cloud from './Cloud';
import Outdoors from './Outdoors';

function Muc() {
    return (
        <div>
            <h1>Motion, Umbrella, Colour change</h1>
            <svg height="400" width="300">
                <Outdoors />
                <Cloud />

                <g className="person">
                    <circle className="head" cx="140" cy="210" r="20" stroke="#ffe5cc" strokeWidth="1" fill="#ffe5cc" />
                    <circle className="eye1" cx="133" cy="205" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="eye2" cx="147" cy="205" r="2" stroke="black" strokeWidth="1" fill="black" />
                    <circle className="nose" cx="140" cy="210" r="1.3" stroke="black" strokeWidth="1" fill="black" />


                    <ellipse className="hatMain" cx="140" cy="193" rx="20" ry="7" fill="red" />
                    <ellipse className="hatTop" cx="140" cy="180" rx="7" ry="7" fill="red" />
                    <path className="smile" d="M128,213 a35,90 0 0,0 25,0" fill="transparent" stroke="black" strokeWidth="2" />

                    <g>
                        <line className="arm1" x1="140" y1="235" x2="120" y2="280" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers1" x1="110" y1="285" x2="122" y2="280" stroke="#ffe5cc" strokeWidth="6" />
                        <line className="tshirtArm1" x1="139" y1="238" x2="124" y2="267" stroke="#ff5050" strokeWidth="8" />
                    </g>
                    <g>
                        <line className="arm2" x1="140" y1="235" x2="180" y2="260" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="fingers2" x1="178" y1="260" x2="190" y2="260" stroke="#ffe5cc" strokeWidth="6" />
                        <line className="tshirtArm2" x1="141" y1="238" x2="170" y2="255" stroke="#ff5050" strokeWidth="8" />
                    </g>
                    <line className="body" x1="140" y1="220" x2="140" y2="275" stroke="#ffe5cc" strokeWidth="4" />
                    <line className="tshirt" x1="140" y1="238" x2="140" y2="277" stroke="#ff5050" strokeWidth="8" />



                    <g>
                        <line className="leg1" x1="140" y1="275" x2="150" y2="340" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="pant1" x1="140" y1="275" x2="150" y2="330" stroke="#006600" strokeWidth="7" />
                        <line className="shoe1" x1="145" y1="340" x2="160" y2="340" stroke="#3366cc" strokeWidth="7" />

                    </g>
                    <g>
                        <line className="leg2" x1="140" y1="275" x2="130" y2="340" stroke="#ffe5cc" strokeWidth="4" />
                        <line className="pant2" x1="140" y1="275" x2="130" y2="330" stroke="#006600" strokeWidth="7" />
                        <line className="shoe2" x1="120" y1="340" x2="135" y2="340" stroke="#3366cc" strokeWidth="7" />

                    </g>
                </g>
                <g>
                    <line className="umbrella" x1="184" y1="265" x2="184" y2="170" stroke="#000000" strokeWidth="2" />
                    <path id="umbrellaMucLeft" className="umbrella" d="m 90,170 L185,170 L185,120 Q 184,100 90,170" fill="#000000" />
                    <path id="umbrellaMucRight" className="umbrella" d="m 280,170 L183,170 L183,120 Q 184,100 280,170" fill="#000000" />
                    <animate xlinkHref="#umbrellaMucLeft" attributeName="d" attributeType="XML" values="m 170,247 L184 247 L184,120;m 170,247 L184 247 L184,120;m 90,170 L185,170 L185,120 Q 184,100 90,170;m 90,170 L185,170 L185,120 Q 184,100 90,170;m 170,247 L184 247 L184,120" dur="20s" repeatCount="indefinite" />
                    <animate xlinkHref="#umbrellaMucLeft" attributeName="fill" attributeType="XML" values="black;black;black;yellow;yellow;yellow;black" dur="20s" repeatCount="indefinite" additive="sum" />
                    <animate xlinkHref="#umbrellaMucRight" attributeName="d" attributeType="XML" values="m 198 247 L184,247 L184,120;m 198 247 L184,247 L184,120;m 280,170 L183,170 L183,120 Q 184,100 280,170;m 280,170 L183,170 L183,120 Q 184,100 280,170;m 198 247 L184,247 L184,120" dur="20s" repeatCount="indefinite" />
                    <animate xlinkHref="#umbrellaMucRight" attributeName="fill" attributeType="XML" values="black;black;black;yellow;yellow;yellow;black" dur="20s" repeatCount="indefinite" additive="sum" />
                    <circle id="umbrellaMucTop" className="umbrella" cx="184" cy="115" r="2" fill="#0000000" >
                        <animate
                            attributeName="cy"
                            attributeType="XML"
                            values="120;120;115;115;120;120"
                            keyTimes="0;0.375;0.37501;0.875;0.8751;1"
                            dur="20s"
                            repeatCount="indefinite" />
                        <animate
                            attributeName="fill"
                            attributeType="XML"
                            values="black;black;black;yellow;yellow;yellow;black"
                            dur="20s"
                            repeatCount="indefinite"
                            additive="sum" /></circle>
                    <path className="smile" d="M183.6,263.3 a20,90 0 0,0 15,0" fill="transparent" stroke="#000000" strokeWidth="2" />
                </g >

            </svg >


        </div >
    );
}

export default Muc;