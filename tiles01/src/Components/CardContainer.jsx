import React, { useState } from 'react';

import Card from "./Card"
import LinkButton from "./LinkButton"

function importAll(r) {
    return r.keys().map(r);
  }
var cardPaths={
    "thing":require.context("./../images/things", false, /\.(png|jpe?g|svg)$/),
    "trigger":require.context("./../images/sensors", false, /\.(png|jpe?g|svg)$/),
    "feedback":require.context("./../images/feedbacks", false, /\.(png|jpe?g|svg)$/)
}


function CardContainer(props) {
    console.log(props.category)
    const listOfImages=importAll(cardPaths[props.category]);
    const [activeCard,setActiveCard] = useState(null);
    function handleCardClick(newValue){
        props.onSelect(newValue)
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