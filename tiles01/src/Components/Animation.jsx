import React from 'react';

function Animation() {
    
    return (
        <div className="Animation">
            <svg height="200" width="300"> 
                <g className="bike">  
                    <line x1="20" y1="55" x2="80" y2="108" stroke="black" stroke-width="3" />
                    <line x1="60" y1="40" x2="40" y2="120" stroke="black" stroke-width="3" />
                    <line x1="88" y1="68" x2="12" y2="95" stroke="black" stroke-width="3" />
                    <circle cx="50" cy="80" r="40" stroke="black" stroke-width="3" fill="transparent"/>

                    <line x1="130" y1="55" x2="190" y2="108" stroke="black" stroke-width="3" />
                    <line x1="170" y1="40" x2="150" y2="120" stroke="black" stroke-width="3" />
                    <line x1="198" y1="68" x2="122" y2="95" stroke="black" stroke-width="3" />
                    <circle cx="160" cy="80" r="40" stroke="black" stroke-width="3" fill="transparent"/>
                
                    <polygon points="80,40 140,20 100,80 50,80" stroke="lightblue" stroke-width="3" fill="transparent" />
                
                    <line x1="138" y1="10" x2="160" y2="80" stroke="lightblue" stroke-width="3" />
                    <line x1="128" y1="10" x2="150" y2="10" stroke="black" stroke-width="3" />
                  
                    <line x1="70" y1="20" x2="100" y2="80" stroke="black" stroke-width="3" />
               
                    <ellipse cx="70" cy="20" rx="15" ry="3" stroke="black" stroke-width="3"  />
                </g>
                <g>
                    <circle cx="240" cy="20" r="10" stroke="black" stroke-width="1" fill="#ffd966"/>
                    <circle cx="190" cy="25" r="10" stroke="black" stroke-width="1" fill="#ffd966"/>
                    <circle cx="225" cy="60" r="10" stroke="black" stroke-width="1" fill="#ffd966"/>
                    <circle cx="155" cy="20" r="10" stroke="black" stroke-width="1" fill="#ffd966"/>
                </g>
            </svg>
            
        </div> 
    );
}

export default Animation;