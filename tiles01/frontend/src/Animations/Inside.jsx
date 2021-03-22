import React from 'react';

function Inside() {
    return (
            <g className="inside">
                <rect id="wall" width="300" height="400" fill="#a3c2c2" />
                <rect id="floor" x="0" y="300" width="300" height="100" fill="#006666" />
            </g>
    );
}

export default Inside;
