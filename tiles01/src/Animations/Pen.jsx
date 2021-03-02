import React, {useState} from 'react';

function Pen(props) {
    const [colour] = useState(props.colour ? props.colour : "blue");
    const [durTime] = useState(props.dur ? props.dur : "10s")

    return (
        <g className="pen">    
            <line id="penMain" x1="80" y1="260" x2="190" y2="140" stroke="red" strokeWidth="25">
                <animate
                    attributeName="stroke"
                    values={colour}
                    dur={durTime}            
                    repeatCount="indefinite"/>
            </line>
            <line id="penBack" x1="195" y1="134.5" x2="208" y2="120.5" stroke="red" strokeWidth="25">
                <animate
                    attributeName="stroke"
                    values={colour}
                    dur={durTime}
                    repeatCount="indefinite"/>
            </line>
            <polygon id="penTip" points="64.5,258.5 83,276 50,292" fill="red">
                <animate
                    attributeName="fill"
                    values={colour}
                    dur={durTime}
                    repeatCount="indefinite"/>
            </polygon>       
            <polygon id="pen4" points="64.5,258.5 83,276 89.5,268.5 71,251" fill="#ffffff" />
            <polygon id="pen4" points="180.5,132 199,149 205,142 186.5,125" fill="#ffffff" /> 
                       
        </g>
    );
}

export default Pen;