import React from 'react';
import "../CSS/Card.css";

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
            <img className={imageClass} name={props.name} onClick={handleClick} id={props.id} key={props.id} src={props.src} alt="A card" ></img>
    );
}

export default Card;