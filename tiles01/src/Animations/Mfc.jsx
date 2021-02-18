import React from 'react';

function Mfc() {
    return (
        <div>
            <svg height="400" width="300">
<g>
    <rect width="300" height="400" fill="#b3e6ff"/>
    <rect x="0" y="300" width="300" height="100" fill="#8ccd7e"/>
    <g>
                    <rect width="300" height="400" fill="#a3c2c2"/>
                    <rect x="0" y="300" width="300" height="100" fill="#006666"/>
                    <rect y="50" width="130" height="250" fill="#663300" >
                    <animate 
                        attributeName="fill" 
                        values=" #ff8c1a;#663300; #ff8c1a;"
                        dur="10s"
                        repeatCount="indefinite"
                        />
                    </rect>
                    <rect x="9" y="64" width="111" height="56" fill="#331a00" />
                    <rect x="9" y="129" width="111" height="56" fill="#331a00" />
                    <rect x="9" y="194" width="111" height="56" fill="#331a00" />
                    





                    <rect x="60" y="79" width="50" height="12" fill="#555555" />
                    <rect x="55" y="91" width="60" height="9" fill="#ccccff" />
                    <rect x="60" y="100" width="52" height="14" fill="#a3c2c2" />
                    <rect x="58" y="114" width="57" height="6" fill="#6b7d49" />
                    <rect x="30" y="175" width="65" height="10" fill="#6294a5" />
                    <rect x="32" y="166" width="61" height="9" fill="#dad5ba" />
                    <rect x="34" y="156" width="57" height="10" fill="#6b7d49" />
                    <rect x="9" y="240" width="65" height="10" fill="#6294a5" />
                    <rect x="9" y="231" width="61" height="9" fill="#c6ecd9" />
                    <rect x="9" y="221" width="57" height="10" fill="#339966" />
                    
                    

                    
                      
                </g>
</g>

    


    <g className="person" transform="translate(220,0) scale(-1, 1)">
    <circle id="head" cx="90" cy="190" r="20" stroke="#ffe5cc" stroke-width="1" fill="#ffe5cc"/>
    <circle id="eye1" cx="83" cy="185" r="2" stroke="black" stroke-width="1" fill="black"/>
    <circle id="eye2" cx="97" cy="185" r="2" stroke="black" stroke-width="1" fill="black"/>
    <circle id="nose" cx="90" cy="190" r="1.3" stroke="black" stroke-width="1" fill="black"/>
    <path id="smile" d="M78,193 a35,90 0 0,0 25,0" fill="transparent" stroke="black" stroke-width="2"/>

    <ellipse  id="hatMain" cx="90" cy="173" rx="20" ry="7" fill="red" />
    <ellipse id="hatTop" cx="90" cy="160" rx="7" ry="7" fill="red" />
    
    <g>
        <line id="arm1" x1="90" y1="220" x2="49" y2="253" stroke="#ffe5cc" stroke-width="4"/>
        <line id="fingers1" x1="54" y1="253" x2="40" y2="253" stroke="#ffe5cc" stroke-width="6"/>
        <line id="tshirtArm1" x1="90" y1="221" x2="65" y2="237" stroke="#ff5050" stroke-width="8"/>
    </g>
    <g>
    <line id="handle1" x1="30" y1="250" x2="30" y2="275" stroke="grey" stroke-width="4"/>
    <line id="handle2" x1="60" y1="250" x2="60" y2="275" stroke="grey" stroke-width="4"/>
    <line id="handle2" x1="30" y1="252" x2="60" y2="252" stroke="grey" stroke-width="4"/>
    <rect id="bucket" x="29" y="275" width="32" height="30" fill="grey" />
    <line id="drop1" x1="55" y1="275" x2="55" y2="290" stroke="#ff8c1a" stroke-width="4"/>
    </g>
    <g>
        <line id="arm2" x1="90" y1="220" x2="130" y2="253" stroke="#ffe5cc" stroke-width="4"/>
        
        <line id="paintBrush" x1="128" y1="250" x2="140" y2="250" stroke="pink" stroke-width="6">
        <animate 
            attributeName="stroke" 
            values=" #ff8c1a;#663300; #ff8c1a;"
            dur="10s"
            repeatCount="indefinite"
            />
            </line>
        <line id="tshirtArm2" x1="90" y1="221" x2="110" y2="237" stroke="#ff5050" stroke-width="8"/>
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 90 220"
          to="45 90 220"
          dur="2s"
                          repeatCount="indefinite"/>
    </g>

    <line id="body" x1="90" y1="200" x2="90" y2="320" stroke="#ffe5cc" stroke-width="4"/>
    <line id="shoe" x1="100" y1="320" x2="87" y2="320" stroke="#3366cc" stroke-width="7"/>
    <line id="pants" x1="90" y1="255" x2="90" y2="310" stroke="#006600" stroke-width="6"/>
    <line id="tshirt" x1="90" y1="218" x2="90" y2="257" stroke="#ff5050" stroke-width="8"/>
</g>

</svg>

        </div>
        
    );
}

export default Mfc;

