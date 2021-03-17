import React from "react"
import Character from './Character'

function CharNormal() {
    return (
        <div className='CharNormal'>

            <svg height="150" width="165">
                <Character/> 
                <g className="LightBulb">
                    <line id="lightStick1" x1="77" y1="4" x2="82" y2="9" stroke="black" strokeWidth="2"/>
                    <line id="lightStick2" x1="83" y1="2" x2="85" y2="8" stroke="yellow" strokeWidth="2"/>
                    <line id="lightStick3" x1="91" y1="2" x2="89" y2="8" stroke="black" strokeWidth="2"/>
                    <line id="lightStick4" x1="97" y1="4" x2="93" y2="9" stroke="yellow" strokeWidth="2"/>
                    <circle id="lightBulb" cx="87.5" cy="15" r="5" fill="yellow" stroke="black"/>
                    <line id="lightStickMain" x1="87.5" y1="20" x2="87.5" y2="28" stroke="black" strokeWidth="2"/>
                    <animateTransform
                        attributeName = "transform"
                        attributeType = "XML"
                        type = "rotate"
                        keyTimes = "0; 0.25; 0.5; 0.75; 1"
                        values = "0 87.5 28;10 87.5 28; 0 87.5 28; -10 87.5 28; 0 87.5 28;"
                        begin = "0s"
                        dur = "2s"
                        repeatCount = "indefinite"
                    />
                </g>

                <g className="eyes"> 
                    <polygon id="eyeL" points="75 44, 68 56, 82 56" fill="black"/>
                    <polygon id="eyeR" points="97 44, 90 56, 104 56" fill="black"/>
                </g>
                <g className="leftArm"> 
                    <g className="leftArmOver">
                    <circle id="shoulderL" cx="53.5" cy="86" r="5" fill="grey" stroke="black" />
                    <rect id="overarmL" x="50" y="93" height="16" width="7" fill="grey" stroke="black"/>
                    </g>
                    <g className="leftArmUnder">
                    <circle id="elbowL" cx="53.5" cy="115.5" r="5" fill="grey" stroke="black" />
                    <rect id="underarmL" x="31" y="113" height="7" width="16" fill="grey" stroke="black" transform="rotate(20 53.5 115.5)"/>
                    <rect id="handLL" x="16" y="112" height="5" width="13" fill="grey" stroke="black" transform="rotate(10 53.5 115.5)"/>
                    <rect id="handLR" x="17" y="117" height="5" width="13" fill="grey" stroke="black" transform="rotate(35 53.5 115.5)"/>
                    <animateTransform
                        attributeName = "transform"
                        attributeType = "XML"
                        type = "rotate"
                        keyTimes = "0; 0.20; 0.3; 0.4; 0.5; 0.75; 1"
                        values = "-20 53.5 115.5;-47 53.5 115.5; -20 53.5 115.5; -47 53.5 115.5; -20 53.5 115.5; -20 53.5 115.5; -20 53.5 115.5;"
                        begin = "0.75s"
                        dur = "5s"
                        repeatCount = "indefinite"
                    />
                    </g>
                    <animateTransform
                        attributeName = "transform"
                        attributeType = "XML"
                        type = "rotate"
                        keyTimes = "0; 0.25; 0.5; 0.75; 0.90; 1"
                        values = "5 53.5 86;90 53.5 86; 90 53.5 86; 90 53.5 86; 5 53.5 86; 5 53.5 86;"
                        begin = "0s"
                        dur = "5s"
                        repeatCount = "indefinite"
                    />
                </g>  
            </svg>
        </div>
    )
}

export default CharNormal;
