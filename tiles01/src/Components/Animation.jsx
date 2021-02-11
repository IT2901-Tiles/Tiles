import React from 'react';

function Animation() {

    
    
    return (
        <div className="Animation">
            <svg height="200" width="300"> 
                <g className="bike">  
                    <line x1="20" y1="55" x2="80" y2="108" stroke="black" stroke-width="3"></line>
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
                    <g>
                        <circle cx="240" cy="20" r="10" stroke="black" stroke-width="1" fill="#ffd966"></circle>
                        <circle cx="237" cy="17" r="1" stroke="black" stroke-width="1" fill="black"></circle>
                        <circle cx="243" cy="17" r="1" stroke="black" stroke-width="1" fill="black"></circle>
                        <circle cx="240" cy="24" r="3" stroke="black" stroke-width="1" fill="red"></circle>
                    </g>
                
                    <circle cx="190" cy="25" r="10" stroke="black" stroke-width="1" fill="#ffd966"/>
                    <circle cx="187" cy="22" r="1" stroke="black" stroke-width="1" fill="black"/>
                    <circle cx="193" cy="22" r="1" stroke="black" stroke-width="1" fill="black"/>
                    <line x1="185" y1="29" x2="195" y2="29" stroke="black" stroke-width="2"/>

                    <circle cx="225" cy="60" r="10" stroke="black" stroke-width="1" fill="#ffd966"/>
                    <circle cx="222" cy="57" r="1" stroke="black" stroke-width="1" fill="black"/>
                    <circle cx="228" cy="57" r="1" stroke="black" stroke-width="1" fill="black"/>
                    <path d="M219,63 a40,180 0 0,0 12,0" fill="transparent" stroke="black" stroke-width="2"/>
                
                    <circle cx="155" cy="20" r="10" stroke="black" stroke-width="1" fill="#ffd966"/>
                    <circle cx="152" cy="17" r="3" stroke="black" stroke-width="1" fill="black"/>
                    <circle cx="158" cy="17" r="3" stroke="black" stroke-width="1" fill="black"/>
                    <line x1="145" y1="17" x2="152" y2="17" stroke="black" stroke-width="2"/>
                    <line x1="158" y1="17" x2="165" y2="17" stroke="black" stroke-width="2"/>
                    <path d="M149,23 a40,180 0 0,0 12,0" fill="transparent" stroke="black" stroke-width="2"/>
                </g>
            </svg>
        </div> 
    );
}

export default Animation;


/*


 <circle cx="240" cy="20" r="10" stroke="black" stroke-width="1" fill="#ffd966">
                        <animate attributeName="cx" from="240" to="350" dur="5s" repeatCount="indefinite"/>
                        <animate attributeName="cy" from="20" to="180" dur="5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="237" cy="17" r="1" stroke="black" stroke-width="1" fill="black">
                        <animate attributeName="cx" from="237" to="350" dur="5s" repeatCount="indefinite"/>
                        <animate attributeName="cy" from="17" to="180" dur="5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="243" cy="17" r="1" stroke="black" stroke-width="1" fill="black">
                        <animate attributeName="cx" from="243" to="350" dur="5s" repeatCount="indefinite"/>
                        <animate attributeName="cy" from="17" to="180" dur="5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="240" cy="24" r="3" stroke="black" stroke-width="1" fill="red">
                        <animate attributeName="cx" from="240" to="350" dur="5s" repeatCount="indefinite"/>
                        <animate attributeName="cy" from="24" to="180" dur="5s" repeatCount="indefinite"/>
                    </circle>


*/