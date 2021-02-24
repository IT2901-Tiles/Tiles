import React from 'react';

function Tpv (){
    return(
        <div className="tpv">
            <h1>Temperature, pen, vibrate</h1>
            <svg height="400" width="300">
                <g id="thermometer">
                    {/*The backgroun of the thermometer */ }
                    <rect x="75" y="80" width="37.5" height="120" fill="#b3e6ff" stroke="black" />
                    <circle cx="93" cy="200" r="30" fill="#b3e6ff" />
                    <line x1="85" y1="90" x2="102" y2="90" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="100" x2="102" y2="100" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="110" x2="102" y2="110" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="120" x2="102" y2="120" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="130" x2="102" y2="130" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="140" x2="102" y2="140" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="150" x2="102" y2="150" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="160" x2="102" y2="160" stroke="black" strokeWidth="1"/>
                    <line x1="85" y1="170" x2="102" y2="170" stroke="black" strokeWidth="1"/>

                    {/*The Parts of the thermometer that are animated*/}
                    <line x1="94" y1="200" x2="94" y2="150" stroke="black" strokeWidth="10">
                        <animate 
                            attributeName="y2"
                            dur = "10s"
                            repeatCount = "indefinite"
                            values="200; 90; 200"
                            keyTimes="0;0.5;1"
                        />
                        <animate 
                            attributeName = "stroke"
                            dur = "10s"
                            repeatCount="indefinite"
                            values="blue;red;blue;"
                        />
                    </line>
                    <circle cx="93" cy="200" r="15" fill="black" >
                        <animate
                            attributeName="fill"
                            values="blue;red;blue;"
                            dur="10s"
                            repeatCount="indefinite"/>
                    </circle>
                </g>

                <g id="pen">
                    <rect x="200" y="200" height="120" width="30" fill="black"/>

                    <polygon points="200 320, 230 320, 215 340" fill="#FFE5A5"/>
                    <polygon points="208 330, 222 330, 215 340" fill="black"/>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from = "0 215 340"
                        to = "20 215 340"
                        begin = "2s"
                        dur="2s"
                        repeatCount= "indefinite"
                        />

                </g>

                



            </svg>
        </div>
    )
}

export default Tpv;

