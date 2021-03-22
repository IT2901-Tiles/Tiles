import React from 'react';
import Outdoors from './Outdoors';
import Cloud from './Cloud';
import ClosedUmbrella from './ClosedUmbrella';
import PersonUmbrella from './PersonUmbrella';


function Muv() {
    return (
        <div className="Muv">
            <svg height="400" width="300">
                <Outdoors />
                <Cloud />
                <PersonUmbrella />


                <g>
                    <line className="umbrella" x1="184" y1="265" x2="184" y2="170" stroke="#000000" strokeWidth="2" />
                    <path id="umbrellaMuvLeft" className="umbrella" d="m 90,170 L185,170 L185,120 Q 184,100 90,170" fill="#000000" />
                    <path id="umbrellaMuvRight" className="umbrella" d="m 280,170 L183,170 L183,120 Q 184,100 280,170" fill="#000000" />
                    <animate xlinkHref="#umbrellaMuvLeft" attributeName="d" attributeType="XML" values="m 170,247 L184 247 L184,120;m 170,247 L184 247 L184,120;m 90,170 L185,170 L185,120 Q 184,100 90,170;m 90,170 L185,170 L185,120 Q 184,100 90,170;m 170,247 L184 247 L184,120" dur="20s" repeatCount="indefinite" />
                    <animate xlinkHref="#umbrellaMuvRight" attributeName="d" attributeType="XML" values="m 198 247 L184,247 L184,120;m 198 247 L184,247 L184,120;m 280,170 L183,170 L183,120 Q 184,100 280,170;m 280,170 L183,170 L183,120 Q 184,100 280,170;m 198 247 L184,247 L184,120" dur="20s" repeatCount="indefinite" />
                    <circle id="umbrellaMuvTop" className="umbrella" cx="184" cy="115" r="2" fill="#0000000" >
                        <animate
                            attributeName="cy"
                            attributeType="XML"
                            values="120;120;115;115;120;120"
                            keyTimes="0;0.50;0.5001;0.745;0.7451;1"
                            dur="20s"
                            repeatCount="indefinite" />
                    </circle>
                    <path className="umbrella" d="M183.6,263.3 a20,90 0 0,0 15,0" fill="transparent" stroke="#000000" strokeWidth="2" />
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        values="0 183 247;0 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;5 183 247;-5 183 247;0 183 247;0 183 247"
                        keyTimes="0;0.4;0.405;0.410;0.415;0.42;0.425;0.43;0.435;0.44;0.445;0.45;0.455;0.46;0.465;0.470;0.475;0.48;0.485;0.49;0.495;0.5;0.505;0.51;0.515;0.52;0.525;0.53;0.5350;0.54;0.545;0.55;0.555;0.56;0.565;0.57;0.575;0.58;0.585;0.59;0.595;0.6;0.605;0.61;0.615;0.62;0.625;0.63;0.635;0.64;0.645;0.65;0.655;0.66;0.665;0.67;0.675;0.68;0.685;0.69;0.695;0.7;0.705;0.71;0.715;0.72;0.725;0.73;0.735;0.74;0.745;0.75;0.755;0.76;0.765;0.77;0.775;0.78;0.785;0.79;0.795;0.8;0.805;0.81;0.815;0.82;0.825;0.83;0.835;0.84;0.845;0.85;0.855;0.86;0.865;0.87;0.875;0.88;0.885;0.89;1"
                        dur="20s"
                        repeatCount="indefinite" />
                </g >
            </svg >
        </div >
    );
}

export default Muv;