import React, { useState } from 'react';
import "./../css/CardContainer.css"
import Card from "./Card"


function importAll(r) {
    return r.keys().map(r);
  }
var cardPaths={
    "Things":require.context("./../images/things", false, /\.(png|jpe?g|svg)$/),
    "Trigger":require.context("./../images/sensors", false, /\.(png|jpe?g|svg)$/),
    "Feedback":require.context("./../images/feedbacks", false, /\.(png|jpe?g|svg)$/)
}


function CardContainer(props) {
    const listOfImages=importAll(cardPaths[props.category]);
    const [activeCard,setActiveCard] = useState(null);
    function handleCardClick(newValue){
        setActiveCard(newValue.id)
        console.log("cardcointainer cardclick")
    }
    return (
        <div>
        {listOfImages.map(
            (image,index) =>  <Card active={activeCard} onClick={handleCardClick} id={index} key={index} src={image.default}  />
        )}
        </div>
    );
}

export default CardContainer;