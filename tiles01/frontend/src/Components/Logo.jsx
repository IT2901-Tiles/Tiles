import React from 'react';

function Logo(props) {
    const styling ={
        backgroundColor : "#E53D2FEE",
        color: "#F3EAC2",
        borderRadius: "30px",
        fontFamily: 'Roboto',
        textShadow: "2px 2px #252525ab",
        border: "0.25px solid #72140C",
        boxShadow: "1px 1px 3px #000000AA"
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