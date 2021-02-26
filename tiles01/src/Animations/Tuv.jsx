import React from 'react';
import Cloud from '../Animations/Cloud';
import Sun from '../Animations/Sun';

function Tuv(){
    return(
        <div className='tuv'>
            <h1>Temperature, Umberella, Vibrate</h1>
            <svg width="300" height="400">
                <g> {/* Background */}
                    <rect id="sky" width="300" height="400" fill="#b3e6ff" />
                    <rect id="grass" x="0" y="300" width="300" height="100" fill="#8ccd7e" />
                    <Sun/>
                    <Cloud/>
                </g>

                <g id="thermometer">
                    {/*The backgroun of the thermometer */ }
                    <rect x="50" y="30" width="67.5" height="166" fill="#555555"/>
                    <rect x="70" y="40" width="27.5" height="120" fill="white"/>
                    <circle cx="83" cy="160" r="25" fill="white" />
                    <line x1="75" y1="50" x2="92" y2="50" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="60" x2="92" y2="60" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="70" x2="92" y2="70" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="80" x2="92" y2="80" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="90" x2="92" y2="90" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="100" x2="92" y2="100" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="110" x2="92" y2="110" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="120" x2="92" y2="120" stroke="black" strokeWidth="1"/>
                    <line x1="75" y1="130" x2="92" y2="130" stroke="black" strokeWidth="1"/>

                    {/*The Parts of the thermometer that are animated*/}
                    <line x1="83.5" y1="160" x2="83.5" y2="110" stroke="black" strokeWidth="10">
                        <animate 
                            attributeName="y2"
                            dur = "15s"
                            repeatCount = "indefinite"
                            values="50; 145; 50"
                            keyTimes="0;0.5;1"
                        />
                        <animate 
                            attributeName = "stroke"
                            dur = "13s"
                            repeatCount="indefinite"
                            values="red;blue;red;"
                        />
                    </line>
                    <circle cx="83" cy="160" r="15" fill="black" >
                        <animate
                            attributeName="fill"
                            values="red;blue;red;"
                            dur="13s"
                            repeatCount="indefinite"/>
                    </circle>
                </g>
            </svg>
        </div>
    );
}

export default Tuv;