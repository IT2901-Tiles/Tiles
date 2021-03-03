import React from 'react';
import BookShelf from './BookShelf';
import Desk from './Desk';
import Pen from './Pen';
import Temperature from './Temperature';



function Tpc() {
    return (
        <div>
            <h1>Temperature, Pen/pencil, Colour change</h1>
            <svg height="400" width="300">
                <g>
                    <rect id="wall" width="300" height="400" fill="#b3e6ff" />
                    <BookShelf/>
                    <Desk/>           
                    <Pen colour="blue;red;blue" dur="10"/>
                    <g transform="translate(40, 0)">
                        <Temperature/>
                    </g> 
                </g> 
            </svg>
        </div>

    );
}

export default Tpc;

