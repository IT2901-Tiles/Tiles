import React from "react"
import Character from './Character'

function CharThinking() {
    return (
        <div className='CharThinking'>

            <svg height="150" width="165">
                <Character/> 
                <g className="LightBulb">
                <line id="lightStick1" x1="62" y1="14" x2="55" y2="10" stroke="black" stroke-width="2"/>
                <line id="lightStick2" x1="65" y1="9" x2="60" y2="3" stroke="yellow" stroke-width="2"/>
                <line id="lightStick3" x1="69" y1="7" x2="68" y2="1" stroke="black" stroke-width="2"/>
                <line id="lightStick4" x1="73" y1="8" x2="76" y2="3" stroke="yellow" stroke-width="2"/>
                <circle id="lightBulb" cx="70" cy="14" r="5" fill="yellow" stroke="black"/>                    <line id="lightStickMain1" x1="87.5" y1="28" x2="84" y2="20" stroke="black" stroke-width="2"/>
                <line id="lightStickMain2" x1="84" y1="20.5" x2="75" y2="15" stroke="black" stroke-width="2"/>


                </g>
               
                    <circle id="leftEye" cx="75" cy="50" r="7" stroke="black"/>
                    <circle id="rightEye" cx="92" cy="50" r="5" stroke="black"/>

                <g className="leftArm"> 
                    <circle id="shoulderL" cx="53.5" cy="86" r="5" fill="grey" stroke="black" />
                    <rect id="overarmL" x="55" y="67" height="16" width="7" fill="grey" stroke="black" transform="rotate(-120 55 89.5)"/>
                    <circle id="elbowL" cx="28" cy="101" r="5" fill="grey" stroke="black" />
                    <rect id="underarmL" x="24" y="78" height="16" width="6.5" fill="grey" stroke="black" transform="rotate(18 28 101)"/>
                    <rect id="handLL" x="30" y="62" height="14" width="5" fill="grey" stroke="black" transform="rotate(-10 32.5 68.5)"/>
                    <rect id="handLR" x="39" y="62" height="14" width="5" fill="grey" stroke="black" transform="rotate(30 39.5 68.5)"/>
                </g>  
            </svg>
        </div>
    )
}

export default CharThinking;
