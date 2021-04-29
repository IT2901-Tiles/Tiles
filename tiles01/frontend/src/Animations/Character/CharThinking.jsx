import React from "react"
import Character from './Character'

function CharThinking() {
    return (
        <div className='CharThinking'>
            <svg viewBox="0 0 165 150" className="svgCharacter">
                <Character/> 
                <g className="LightBulb">
                    <g className="LightBulbAnimation">
                        <line id="lightStick1" x1="62" y1="14" x2="55" y2="10" stroke="black" stroke-width="2"/>
                        <line id="lightStick2" x1="65" y1="9" x2="60" y2="3" stroke="yellow" stroke-width="2"/>
                        <line id="lightStick3" x1="69" y1="7" x2="68" y2="1" stroke="black" stroke-width="2"/>
                        <line id="lightStick4" x1="73" y1="8" x2="76" y2="3" stroke="yellow" stroke-width="2"/>
                        <circle id="lightBulb" cx="70" cy="14" r="5" fill="yellow" stroke="black"/>                    
                        <line id="lightStickMain2" x1="84" y1="20.5" x2="75" y2="15" stroke="black" stroke-width="2"/>
                        <animateTransform
                            attributeName = "transform"
                            attributeType = "XML"
                            type = "rotate"
                            keyTimes = "0; 0.25; 0.5; 0.75; 1"
                            values = "-2 84 20.5;-15 84 20.5; -2 84 20.5; -15 84 20.5; -2 84 20.5;"
                            begin = "0s"
                            dur = "4s"
                            repeatCount = "indefinite"
                        />
                    </g>
                <line id="lightStickMain1" x1="87.5" y1="28" x2="84" y2="20" stroke="black" stroke-width="2"/>
                </g>
               
                    <circle id="leftEye" cx="75" cy="50" r="7" stroke="black">
                        <animate
                            attributeName = "r"
                            keyTimes="0;0.5;1"
                            values="7;5;7"
                            dur="2s"                        
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle id="rightEye" cx="92" cy="50" r="5" stroke="black">
                        <animate
                            attributeName = "r"
                            keyTimes="0;0.5;1"
                            values="5;7;5"
                            dur="2s"                        
                            repeatCount="indefinite"
                        />
                    </circle>

                <g className="leftArm"> 
                    <circle id="shoulderL" cx="53.5" cy="86" r="5" fill="grey" stroke="black" />
                    <rect id="overarmL" x="55" y="67" height="16" width="7" fill="grey" stroke="black" transform="rotate(-120 55 89.5)"/>
                    <circle id="elbowL" cx="28" cy="101" r="5" fill="grey" stroke="black" />
                    <rect id="underarmL" x="24" y="78" height="16" width="6.5" fill="grey" stroke="black" transform="rotate(18 28 101)"/>
                    <rect id="handLL" x="30" y="62" height="14" width="5" fill="grey" stroke="black" transform="rotate(-10 32.5 68.5)"/>
                    <rect id="handLR" x="39" y="62" height="14" width="5" fill="grey" stroke="black" transform="rotate(30 39.5 68.5)"/>
                    <animateTransform
                        attributeName = "transform"
                        attributeType = "XML"
                        type = "rotate"
                        keyTimes = "0; 0.25; 0.5; 0.60; 0.80; 1"
                        values = "5 53.5 86;40 53.5 86; 40 53.5 86; 40 53.5 86; 5 53.5 86;5 53.5 86;"
                        begin = "0s"
                        dur = "5s"
                        repeatCount = "indefinite"
                    />
                </g>
                <g className="rightArm">
                    <circle id="shoulderR" cx="121.5" cy="86" r="5" fill="grey" stroke="black" />           
                    <rect id="overarmR" x="118" y="93" height="16" width="7" fill="grey" stroke="black"/>
                    <circle id="elbowR" cx="121.5" cy="115.5" r="5" fill="grey" stroke="black" />
                    <rect id="underarmR" x="128" y="113" height="7" width="16" fill="grey" stroke="black" transform="rotate(-20 121.5 115.5)"/>
                    <rect id="handRL" x="140" y="103" height="5" width="13" fill="grey" stroke="black" transform="rotate(-30 140 101)"/>
                    <rect id="handRR" x="145" y="107" height="5" width="13" fill="grey" stroke="black" transform="rotate(10 145 107)"/> 
                </g> 
                <g className="thinkingCloud">
                    <circle cx="10" cy="14" r="8" fill="white"/>
                    <circle cx="20" cy="11" r="8" fill="white"/>
                    <circle cx="30" cy="14" r="8" fill="white"/>
                    <circle cx="40" cy="16" r="6" fill="white"/>
                    <circle cx="4" cy="18" r="3.5" fill="white"/>
                    <circle cx="12" cy="20" r="8" fill="white"/>
                    <circle cx="22" cy="22" r="8" fill="white"/>
                    <circle cx="32" cy="26" r="6" fill="white"/>
                    <circle cx="38" cy="22" r="4" fill="white"/>

                    <g className="thinkingBubbles">
                        <circle cx="35" cy="38" r="3" fill="white">
                            <animate
                                attributeName = "fill"
                                keyTimes="0;0.5;0.8;1"
                                values="white;#68C2C4;white;white"
                                dur="3s"                        
                                repeatCount="indefinite"
                            /> 
                        </circle>
                        <circle cx="42" cy="44" r="2" fill="white"> 
                            <animate
                                attributeName = "fill"
                                keyTimes="0;0.3;1"
                                values="#68C2C4;white;white"
                                dur="3s"                        
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>

                </g> 
            </svg>
        </div>
    )
}

export default CharThinking;
