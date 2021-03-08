import React, { useState } from 'react';
import Card from "./Card"

//imports all of the images
function importAll(r) {
    console.log(r)
    console.log(r.keys())
    console.log(r.keys().map(r))
    return r.keys().map(r);
  }

//paths tp where the different image sets are
var cardPaths={
    "thing":require.context("./../images/things", false, /\.(png|jpe?g|svg)$/),
    "trigger":require.context("./../images/triggers", false, /\.(png|jpe?g|svg)$/),
    "feedback":require.context("./../images/feedbacks", false, /\.(png|jpe?g|svg)$/)
}
//props:
//category: the category of the cardcontainer, used to find the cards
//onSelect: function to pass selected card to CategoryPage,
//variables:
//image: the image file
//index: the index of the image file in listOfImages

function CardContainer(props) {
    const listOfImages=importAll(cardPaths[props.category]);
    const [activeCard,setActiveCard] = useState(null);

    //called when a card in the container is clicked, sets the card as active 
    function handleCardClick(newValue){
        console.log(newValue)
        props.onSelect(newValue)
        setActiveCard(newValue.id)
    }
    //gets card name from path
    function getName(path){
        console.log(path.default)
        let index=path.default.indexOf(".")
        return path.default.slice(14,index)
    }


    //map function maps the files imported in listOfImages to Card components
    return (
        <div>
        
        {listOfImages.map(
            
            (image,index) =>  <Card active={activeCard} name={getName(image)} onClick={handleCardClick} id={index} key={index} src={image.default}  />
        )}
        </div>
    );
}

export default CardContainer;