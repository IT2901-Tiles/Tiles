import React, {useState} from 'react';

function Cloud(props) {
    const [durTime] = useState(props.dur ? props.dur : "13s");
    const [beginTime] = useState(props.begin ? props.begin: "0s");
    
    return (
        <g className="cloud">
            {/* <ellipse cx="200" cy="50" rx="70" ry="40" fill="#ababab" />
                    <ellipse cx="120" cy="60" rx="60" ry="35" fill="#ababab" /> */}
            <circle className="cloud" cx="-170" cy="80" r="35" fill="#ababab" />
            <circle className="cloud" cx="-130" cy="50" r="45" fill="#ababab" />
            <circle className="cloud" cx="-85" cy="50" r="30" fill="#ababab" />
            <circle className="cloud" cx="-60" cy="80" r="35" fill="#ababab" />
            <rect className="cloud" x="-170" y="75" width="110" height="40" fill="#ababab" />
            <line className="rain" x1="-175" y1="130" x2="-190" y2="160" stroke="#ababab" strokeWidth="7" />
            <line className="rain" x1="-135" y1="130" x2="-150" y2="160" stroke="#ababab" strokeWidth="7" />
            <line className="rain" x1="-95" y1="130" x2="-110" y2="160" stroke="#ababab" strokeWidth="7" />
            <line className="rain" x1="-55" y1="130" x2="-70" y2="160" stroke="#ababab" strokeWidth="7" />
            <animateTransform attributeName="transform"
                attributeType="XML"
                type="translate"
                from="0 0" 
                to="500 0"
                begin = {beginTime}
                dur= {durTime}
                repeatCount="indefinite" />
        </g>

    );
}

export default Cloud;