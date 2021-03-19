import React from "react"
import Character from './Character'

function CharHappy() {
    return (
        <div className='CharHappy'>

            <svg viewBox="0 0 165 150">
                <Character/> 
                <g className="LightBulb">
                    <line id="lightStick1" x1="77" y1="4" x2="82" y2="9" stroke="black" strokeWidth="2">¨
                        <animate
                            attributeName = "stroke"
                            keyTimes="0;0.25;0.5;0.75;1"
                            values="black;yellow;yellow;black;black"
                            dur="0.75s"                        
                            repeatCount="indefinite" 
                        />
                    </line>
                    <line id="lightStick2" x1="83" y1="2" x2="85" y2="8" stroke="yellow" strokeWidth="2">
                        <animate
                            attributeName = "stroke"
                            keyTimes="0;0.25;0.5;0.75;1"
                            values="yellow;yellow;yellow;black;black"
                            dur="0.75s"                        
                            repeatCount="indefinite" 
                            />
                    </line>
                    <line id="lightStick3" x1="91" y1="2" x2="89" y2="8" stroke="black" strokeWidth="2">
                        <animate
                            attributeName = "stroke"
                            keyTimes="0;0.25;0.5;0.75;1"
                            values="black;yellow;yellow;black;black"
                            dur="0.75s"                        
                            repeatCount="indefinite"
                            />
                    </line>
                    <line id="lightStick4" x1="97" y1="4" x2="93" y2="9" stroke="yellow" strokeWidth="2">
                        <animate
                            attributeName = "stroke"
                            keyTimes="0;0.25;0.5;0.75;1"
                            values="yellow;yellow;yellow;black;black"
                            dur="0.75s"                        
                            repeatCount="indefinite" 
                        />
                    </line>
                    <circle id="lightBulb" cx="87.5" cy="15" r="5" fill="yellow" stroke="black">
                        <animate
                            attributeName = "fill"
                            keyTimes="0;0.25;0.5;0.75;1"
                            values="yellow;yellow;yellow;#ffcc00;#ffcc00"
                            dur="0.5s"                        
                            repeatCount="indefinite" 
                            />
                    </circle>
                    <line id="lightStickMain" x1="87.5" y1="20" x2="87.5" y2="28" stroke="black" strokeWidth="2"/>

                </g>
                <g className="happyEyes"> 
                    <path id="leftEyeHappy" d="M 72 53 q 6 -11 11 0" stroke="black" stroke-width="3" fill="none"/>
                    <path id="rightEyeHappy" d="M 90 53 q 6 -11 11 0" stroke="black" stroke-width="3" fill="none"/>
                    <animateTransform
                        attributeName = "transform"
                        attributeType = "XML"
                        type = "translate"
                        keyTimes = "0; 0.5; 1"
                        values = "0 0; 0 -2; 0 0"
                        dur = "1s"
                        repeatCount = "indefinite"
                    />
                </g>
                
                <g className="leftArm" transform="rotate(40 53.5 86)"> 
                    <circle id="shoulderL" cx="53.5" cy="86" r="5" fill="grey" stroke="black" />
                    <rect id="overarmL" x="50" y="93" height="16" width="7" fill="grey" stroke="black"/>
                    <g className="leftArmUnder">
                        <circle id="elbowL" cx="53.5" cy="115.5" r="5" fill="grey" stroke="black" />
                        <rect id="underarmL" x="31" y="113" height="7" width="16" fill="grey" stroke="black" transform="rotate(20 53.5 115.5)"/>
                        <rect id="handLL" x="16" y="112" height="5" width="13" fill="grey" stroke="black" transform="rotate(10 53.5 115.5)"/>
                        <rect id="handLR" x="17" y="117" height="5" width="13" fill="grey" stroke="black" transform="rotate(35 53.5 115.5)"/>
                        <animateTransform
                        attributeName = "transform"
                        attributeType = "XML"
                        type = "rotate"
                        keyTimes = "0; 0.5; 1"
                        values = "5 53.5 115.5;30 53.5 115.5; 5 53.5 115.5"
                        dur = "1s"
                        repeatCount = "indefinite"
                    />
                    </g>
                </g>
                <g className="rightArm" transform="rotate(-40 121.5 86)">
                    <circle id="shoulderR" cx="121.5" cy="86" r="5" fill="grey" stroke="black" />           
                    <rect id="overarmR" x="118" y="93" height="16" width="7" fill="grey" stroke="black"/>
                    <g className="rightArmUnder">
                        <circle id="elbowR" cx="121.5" cy="115.5" r="5" fill="grey" stroke="black" />
                        <rect id="underarmR" x="128" y="113" height="7" width="16" fill="grey" stroke="black" transform="rotate(-20 121.5 115.5)"/>
                        <rect id="handRL" x="140" y="103" height="5" width="13" fill="grey" stroke="black" transform="rotate(-30 140 101)"/>
                        <rect id="handRR" x="145" y="107" height="5" width="13" fill="grey" stroke="black" transform="rotate(10 145 107)"/> 
                        <animateTransform
                            attributeName = "transform"
                            attributeType = "XML"
                            type = "rotate"
                            keyTimes = "0; 0.5; 1"
                            values = "-5 121.5 115.5;-30 121.5 115.5; -5 121.5 115.5"
                            dur = "1s"
                            repeatCount = "indefinite"
                        />
                    </g>
                </g>  
            </svg>
        </div>
    )
}

export default CharHappy;
