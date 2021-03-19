import React from 'react';
import BookShelf from './BookShelf';
import Desk from './Desk';
import Pen from './Pen';
import Temperature from './Temperature';



function Tpc() {
    return (
        <div>
            <svg viewBox="0 0 300 400">
                <g>
                    <rect id="wall" width="300" height="400" fill="#b3e6ff" />
                    <BookShelf />
                    <Desk />
                    <Pen colour="blue;blue;red;red;blue;blue" keyTimes="0;0.3;0.31;0.7;0.71;1" dur="10" />
                    <g transform="translate(40, 0)">
                        <Temperature />
                    </g>
                </g>
            </svg>
        </div>

    );
}

export default Tpc;

