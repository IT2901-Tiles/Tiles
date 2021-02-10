import React, { useState } from 'react';
import "./../css/Card.css"





function Card(props) {
    function handleClick(event){
        props.onClick(event.target) 
        console.log("Card click")
    }
    console.log("card render")
    var imageClass="card"
    if (parseInt(props.active) === parseInt(props.id)){
        imageClass="card card-active"

    }

    return (
            <img className={imageClass} onClick={handleClick} id={props.id} key={props.id} src={props.src} ></img>
    );
}

export default Card;