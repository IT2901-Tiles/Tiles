import React from 'react';
import "../CSS/TopContainer.css";
import Logo from "./Logo";


function TopContainer(props) {
    
    return (
        <div className="TopContainer">
            <Logo/>
            <div className="infoBox">
            <p>{props.text}</p>
            </div>
        </div>

    );
}

export default TopContainer;