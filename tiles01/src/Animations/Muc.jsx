import React from 'react';
import Cloud from './Cloud';
import Outdoors from './Outdoors';
import PersonUmbrella from './PersonUmbrella';

function Muc() {
    return (
        <div>
            <h1>Motion, Umbrella, Colour change</h1>
            <svg height="400" width="300">
                <Outdoors />
                <Cloud />
                <PersonUmbrella/>
                <g>
                    <line className="umbrella" x1="184" y1="265" x2="184" y2="170" stroke="#000000" strokeWidth="2" />
                    <path id="umbrellaMucLeft" className="umbrella" d="m 90,170 L185,170 L185,120 Q 184,100 90,170" fill="#000000" />
                    <path id="umbrellaMucRight" className="umbrella" d="m 280,170 L183,170 L183,120 Q 184,100 280,170" fill="#000000" />
                    <animate xlinkHref="#umbrellaMucLeft" attributeName="d" attributeType="XML" values="m 170,247 L184 247 L184,120;m 170,247 L184 247 L184,120;m 90,170 L185,170 L185,120 Q 184,100 90,170;m 90,170 L185,170 L185,120 Q 184,100 90,170;m 170,247 L184 247 L184,120" dur="20s" repeatCount="indefinite" />
                    <animate xlinkHref="#umbrellaMucLeft" attributeName="fill" attributeType="XML" values="black;black;yellow;yellow;black;black" keyTimes="0;0.39;0.4;0.85;0.86;1" dur="20s" repeatCount="indefinite" additive="sum" />
                    <animate xlinkHref="#umbrellaMucRight" attributeName="d" attributeType="XML" values="m 198 247 L184,247 L184,120;m 198 247 L184,247 L184,120;m 280,170 L183,170 L183,120 Q 184,100 280,170;m 280,170 L183,170 L183,120 Q 184,100 280,170;m 198 247 L184,247 L184,120" dur="20s" repeatCount="indefinite" />
                    <animate xlinkHref="#umbrellaMucRight" attributeName="fill" attributeType="XML" values="black;black;yellow;yellow;black;black" keyTimes="0;0.39;0.4;0.85;0.86;1" dur="20s" repeatCount="indefinite" additive="sum" />
                    <circle id="umbrellaMucTop" className="umbrella" cx="184" cy="115" r="2" fill="#0000000" >
                        <animate
                            attributeName="cy"
                            attributeType="XML"
                            values="120;120;115;115;120;120"
                            keyTimes="0;0.50;0.5001;0.745;0.7451;1"
                            dur="20s"
                            repeatCount="indefinite" />
                        <animate
                            attributeName="fill"
                            attributeType="XML"
                            values="black;black;yellow;yellow;black;black"
                            keyTimes="0;0.39;0.4;0.85;0.86;1"
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