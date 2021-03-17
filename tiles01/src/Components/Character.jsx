import React from "react"

function Character(){
    return(
       
        <g className="whole">
                <rect height="100%" width="100%" fill="#68C2C4" stroke="black"/> {/*Denne skal fjernes seinere */}

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
                </g>
        </g>
        
            
    );

}

export default Character;