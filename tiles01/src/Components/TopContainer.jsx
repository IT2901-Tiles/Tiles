import React from 'react';
//import "../App.css";
import "../TopContainer.css";
//import { Link } from "react-router-dom";
import Logo from "./Logo";


function TopContainer(props) {

    /* SKAL SLETTES HVIS EXTERN CSS FUNKER
    const infoBoxStyle ={
        backgroundColor: "rgba(108, 143, 143, 0.589)",
        fontFamily: "'Comic Neue', cursive",
        color: "#F3EAC2",
        padding: "1%",
        borderRadius: "20px",
        textShadow: "2px 2px #252525ab",
        width: "70%",
        position: "fixed",
        left: "25%",
        bottom: "88%",
    } */

    
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