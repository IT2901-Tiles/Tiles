import React from 'react';
//import { Link } from "react-router-dom";


function Logo() {
    const styling ={
        backgroundColor : "#E53D2FEE",
        color: "#F3EAC2",
        borderRadius: "30px",
        fontFamily: 'Roboto',
        textShadow: "2px 2px #252525ab",
        border: "0.5px solid #72140C",
    }
    const textStyle ={
        padding: "0",
        position: "center",
        margin: "15px 0",
    }
    return (
        <div style={styling} className="Logo">
            <h1 style={textStyle}>TILES</h1>
        </div>

    );
}

export default Logo;