import React from "react"
import Character from './Character'

function CharHappy() {
    return (
        <div className='CharHappy'>

            <svg height="150" width="165">
                <Character/> 
                <g className="LightBulb">
                    <line id="lightStick1" x1="77" y1="4" x2="82" y2="9" stroke="black" strokeWidth="2"/>
                    <line id="lightStick2" x1="83" y1="2" x2="85" y2="8" stroke="yellow" strokeWidth="2"/>
                    <line id="lightStick3" x1="91" y1="2" x2="89" y2="8" stroke="black" strokeWidth="2"/>
                    <line id="lightStick4" x1="97" y1="4" x2="93" y2="9" stroke="yellow" strokeWidth="2"/>
                    <circle id="lightBulb" cx="87.5" cy="15" r="5" fill="yellow" stroke="black"/>
                    <line id="lightStickMain" x1="87.5" y1="20" x2="87.5" y2="28" stroke="black" strokeWidth="2"/>


                </g>
                <path id="eyeL" d="M.6,263.3 a20,90 0 0,0 15,0" fill="transparent" stroke="black" strokeWidth="2" />
                
                   
            </svg>
        </div>
    )
}

export default CharHappy;
