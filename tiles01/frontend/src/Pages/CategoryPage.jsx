//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React, {useState, useContext} from 'react';
//Component Imports
import TopContainer from '../Components/TopContainer';
import LinkButton from '../Components/LinkButton';
import CardContainer from "../Components/CardContainer";
//Css imports
import "../CSS/CardContainer.css";

function CategoryPage(props) {
    let category
    { props.location.state ? (category = props.location.state.category) : category = "trigger" }
    const [card, setCard] = useState(localStorage.getItem(category));
    var styling = { color: "#68C2C4" };
    { props.location.state ? (styling.color = props.location.state.color) : styling.color = "#F08A00" }
    var cardSelected = !(card == (null || "null"))
    console.log(cardSelected)
    //Function triggered when a card is selected
    function onCardClick(newValue) {
        setCard(newValue.src)
    }
    return (
        <div className="Page">
            <TopContainer
                text="some text that will be shown in the instruction box"
            />
            <div className="CardContainer">
                <div className="CardContainerTitle" style={styling}> {category[0].toUpperCase() + category.substring(1)}</div>

                <CardContainer category={category} onSelect={onCardClick} />
                <LinkButton target="/cards" title="Choose" size="Small" category={category} onClick={() => {localStorage.setItem(category, card)}} card={card} disabled={!cardSelected}  ></LinkButton>
            </div>
        </div>
    );
}

export default CategoryPage;

