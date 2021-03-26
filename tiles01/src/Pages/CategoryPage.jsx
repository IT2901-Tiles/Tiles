//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React from 'react';
import { useState } from 'react';
//Component Imports
import TopContainer from '../Components/TopContainer';
import LinkButton from '../Components/LinkButton';
import CardContainer from "../Components/CardContainer";
//Css imports
import "../CSS/CardContainer.css";
import CharThinking from '../Components/CharThinking';

function CategoryPage(props) {
    console.log({ props }, "categorypage")
    const [category] = useState(props.location.state.category)
    const [Card, setCard] = useState(localStorage.getItem(category));
    var styling = { color: "#68C2C4" };
    styling.color = props.location.state.color;


    //Make the category titles first letter upper case, and ads an s to the thing(s) category
    // AND Set the text of the info-box based on the category
    let categoryName = category;
    let categoryInfoText = "Choose 1 card from this pile to ";
  
    if (category === "thing"){
        categoryName = "things";
        categoryInfoText += "select a thing to perform the action on"
    }else if(category === "feedback"){
        categoryInfoText += "get some feedback after the trigger"
    }else{
        categoryInfoText += "trigger some action"
    }
    categoryName = categoryName[0].toUpperCase() + categoryName.substring(1);

 

    //Function triggered when a card is selected
    function onCardClick(newValue) {
        console.log(newValue)
        setCard(newValue.src)
    }

    return (
        <div className="Page">
        <TopContainer
            text = {categoryInfoText}
        />
        <div id="charThinkingWrapper">
            <CharThinking/>
        </div>
            <div className="CardContainer">
                    <div className="CardContainerTitle" style={styling}> {categoryName}</div>
                     <CardContainer category={props.location.state.category} onSelect={onCardClick}/>
                <LinkButton target="/cards" title="Choose" size="Small" category={props.location.state.category} card={Card} className="chooseCardsButton"></LinkButton>
            </div>
        </div>
    );
}

export default CategoryPage;