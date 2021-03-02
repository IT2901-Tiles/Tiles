import React from 'react';
import Temperature from './Temperature';


function Tfc (){
    return(
        <div className="tfv">
            <h1>Temperature, Furniture, Colour change</h1>
            <svg width="300" height="400">
            <g>
                    <rect width="300" height="400" fill="#b3e6ff" />
                    <rect x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    <g>
                        <rect width="300" height="400" fill="#a3c2c2" />
                        <rect x="0" y="300" width="300" height="100" fill="#006666" />
                        <rect y="50" width="130" height="250" fill="#663300" >
                            <animate
                                attributeName="fill"
                                values="blue;red;blue;"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </rect>
                        <rect x="9" y="64" width="111" height="56" fill="#331a00" />
                        <rect x="9" y="129" width="111" height="56" fill="#331a00" />
                        <rect x="9" y="194" width="111" height="56" fill="#331a00" />


                        <rect x="60" y="79" width="50" height="12" fill="#555555" />
                        <rect x="55" y="91" width="60" height="9" fill="#ccccff" />
                        <rect x="60" y="100" width="52" height="14" fill="#a3c2c2" />
                        <rect x="58" y="114" width="57" height="6" fill="#6b7d49" />
                        <rect x="30" y="175" width="65" height="10" fill="#6294a5" />
                        <rect x="32" y="166" width="61" height="9" fill="#dad5ba" />
                        <rect x="34" y="156" width="57" height="10" fill="#6b7d49" />
                        <rect x="9" y="240" width="65" height="10" fill="#6294a5" />
                        <rect x="9" y="231" width="61" height="9" fill="#c6ecd9" />
                        <rect x="9" y="221" width="57" height="10" fill="#339966" />

                    </g>
                </g>
                <g transform="translate(0, 20)"><Temperature/></g>
            </svg>
        </div>
    );
}


export default Tfc;
