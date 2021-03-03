import React from 'react';
import BookShelf from './BookShelf';
import Desk from './Desk';
import Pen from './Pen';

function Mpc() {
    return (
        <div>
            <h1>Motion, Pen/pencil, Colour change</h1>
            <svg height="400" width="300">
                <g>
                    <rect width="300" height="400" fill="#b3e6ff" />
                    <BookShelf/>
                    <Desk/>
                    <g>
                        <Pen colour="black;green;red;black" dur="8"/>
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            dur="13s"
                            keyTimes="0;0.5;1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 0; 150 -10;0 0"
                            calcMode="linear"
                        />
                        <animateTransform attributeName="transform"
                            attributeType="XML"
                            dur="3s"
                            keyTimes="0;0.5;1"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0;10;0"
                            calcMode="linear"
                            additive="sum" />
                    </g>
                </g>
            </svg>


        </div >
    );
}

export default Mpc;