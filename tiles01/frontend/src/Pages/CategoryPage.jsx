//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React, {useState} from 'react';
//Component Imports
import TopContainer from '../Components/TopContainer';
import LinkButton from '../Components/LinkButton';
import CardContainer from "../Components/CardContainer";
import CharThinking from "../Animations/Character/CharThinking";
//Css imports
import "../CSS/CardContainer.css";

function CategoryPage(props) {

    let category = "trigger"
    let styling = { color: "#F08A00" };
    try{
        category = props.location.state.category
        styling.color = props.location.state.color
    }catch{
        console.log("No category chosen, trigger chosen as default")
    }
    const [card, setCard] = useState(localStorage.getItem(category));
    
    let categoryInfoText = "Choose 1 card from this pile to ";
  
    if (category === "things"){
        categoryInfoText += "select a thing to perform the action on"
    } else if (category === "feedback"){
        categoryInfoText += "get some feedback after the trigger"
    } else {
        categoryInfoText += "trigger some action"
    }

    var cardSelected = !["null", null].includes(card)

     //Function triggered when a card is selected
     //newvalue represents the card chosen
    function onCardClick(newValue) {
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
                <div className="CardContainerTitle" style={styling}> {category[0].toUpperCase() + category.substring(1)}</div>

                <CardContainer category={category} onSelect={onCardClick} />
                <LinkButton target="/cards" title="Choose" size="Small" category={category} onClick={() => {localStorage.setItem(category, card)}} card={card} disabled={!cardSelected}  className="chooseCardsButton"></LinkButton>
            </div>
        </div>
    );
}

export default CategoryPage;

