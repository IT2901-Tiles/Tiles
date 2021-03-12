import React from "react"

function Character(){
    return(
       
        <g className="whole">
                <rect height="100%" width="100%" fill="#68C2C4"/> {/*Denne skal fjernes seinere */}

                <g className="HeadParts">
                    <rect id="head" x="60" y="36" height="35" width="55" fill="grey" stroke="black"/>
                    <rect id="lEar" x="53" y="46" height="15" width="5" fill="grey" stroke="black"/>
                    <rect id="rEar" x="117" y="46" height="15" width="5" fill="grey" stroke="black"/>
                    <rect id="topHead" x="80" y="28" height="6" width="15" fill="grey" stroke="black"/>
                    <circle id="smile" cx="87.5" cy="61" r="8" fill="red" stroke="black"/>
                    <rect id="smileRect" x="78" y="52" width="19" height="10" fill="grey"/>
                    <line id="topSmile" x1="79" y1="62" x2="96" y2="62" stroke="black"/>

                    

                </g>
                
                
                <g className="BodyParts">
                    <rect id="neck" x="80" y="73" height="8" width="15" fill="grey" stroke="black"/>
                    <rect id="body" x="60" y="83" height="35" width="55" fill="grey" stroke="black"/>
                    
                    <circle id="shoulderR" cx="121.5" cy="86" r="5" fill="grey" stroke="black" />           
                     <rect id="overarmR" x="118" y="93" height="16" width="7" fill="grey" stroke="black"/>
                    <circle id="elbowR" cx="121.5" cy="115.5" r="5" fill="grey" stroke="black" />
                    <rect id="underarmR" x="128" y="113" height="7" width="16" fill="grey" stroke="black" transform="rotate(-20 121.5 115.5)"/>
                    <rect id="handRL" x="140" y="103" height="5" width="13" fill="grey" stroke="black" transform="rotate(-30 140 101)"/>
                    <rect id="handRR" x="145" y="107" height="5" width="13" fill="grey" stroke="black" transform="rotate(10 145 107)"/>

                </g>
        </g>
        
            
    );

}

export default Character;