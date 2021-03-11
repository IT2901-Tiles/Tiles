import React from "react"

function Character(){
    return(
        <div className="Character">
            <svg height="140" width="165">
                <rect height="100%" width="100%" fill="white"/> {/*Denne skal fjernes seinere */}

                <g className="HeadParts">
                    <rect id="head" x="60" y="20" height="35" width="55" fill="grey" stroke="black"/>
                    <rect id="lEar" x="53" y="30" height="15" width="5" fill="grey" stroke="black"/>
                    <rect id="rEar" x="117" y="30" height="15" width="5" fill="grey" stroke="black"/>
                    <rect id="topHead" x="80" y="12" height="6" width="15" fill="grey" stroke="black"/>
                    <polygon id="eyeL" points="75 28, 68 40, 82 40" fill="black"/>
                    <polygon id="eyeR" points="97 28, 90 40, 104 40" fill="black"/>

                </g>
                
                <g className="BodyParts">
                    <rect id="neck" x="80" y="57" height="8" width="15" fill="grey" stroke="black"/>
                    <rect id="body" x="60" y="67" height="35" width="55" fill="grey" stroke="black"/>
                    <circle id="shoulderL" cx="53.5" cy="70" r="5" fill="grey" stroke="black" />
                    <circle id="shoulderR" cx="121.5" cy="70" r="5" fill="grey" stroke="black" />
                    <rect id="overarmL" x="50" y="77" height="16" width="7" fill="grey" stroke="black"/>
                    <circle id="elbowL" cx="53.5" cy="99.5" r="5" fill="grey" stroke="black" />
                    <rect id="overarmR" x="118" y="77" height="16" width="7" fill="grey" stroke="black"/>
                    <circle id="elbowR" cx="121.5" cy="99.5" r="5" fill="grey" stroke="black" />
                    <rect id="underarmR" x="128" y="97" height="7" width="16" fill="grey" stroke="black" transform="rotate(-20 121.5 99.5)"/>
                    <rect id="underarmL" x="31" y="97" height="7" width="16" fill="grey" stroke="black" transform="rotate(20 53.5 99.5)"/>
                    <rect id="handLL" x="16" y="96" height="5" width="13" fill="grey" stroke="black" transform="rotate(10 53.5 99.5)"/>
                    <rect id="handLR" x="17" y="101" height="5" width="13" fill="grey" stroke="black" transform="rotate(35 53.5 99.5)"/>
                    <rect id="handRL" x="140" y="87" height="5" width="13" fill="grey" stroke="black" transform="rotate(-30 140 85)"/>
                    <rect id="handRR" x="145" y="91" height="5" width="13" fill="grey" stroke="black" transform="rotate(10 145 91)"/>
                </g>
            </svg>
        </div>
            
    );

}

export default Character;