import React, { useState } from 'react';
import "./Card.css"


//


function Card(props) {
    function handleClick(event){
        props.onClick(event.target) 
        console.log("Card click")
    }

    var imageClass="card"
    if (parseInt(props.active) === parseInt(props.id)){
        imageClass="card card-active"

    }

    return (
            <img className={imageClass} onClick={handleClick} id={props.id} key={props.id} src={props.src} ></img>
    );
}

export default Card;