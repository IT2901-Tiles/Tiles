import React from 'react'
import "../CSS/Card.css"

// Card component which displays the image of one card
function Card(props) {
    function handleClick(event) {
        props.onClick(event.target)
    }
    let imageClass = "card"
    //check if this card is chosen
    if (parseInt(props.active) === parseInt(props.id)) {
        imageClass = "card card-active"
    }

    return (
        <img className={imageClass} name={props.name} onClick={handleClick} id={props.id} key={props.id} src={props.src} alt="A card" ></img>
    )
}

export default Card