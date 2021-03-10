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
                
                </g>
                
                <rect id="neck" x="80" y="57" height="8" width="15" fill="grey" stroke="black"/>
                <rect id="body" x="60" y="67" height="35" width="55" fill="grey" stroke="black"/>

               
            </svg>
        </div>
            
    );

}

export default Character;