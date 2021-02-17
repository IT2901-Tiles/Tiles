//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React, {useState} from 'react';
import { Link } from "react-router-dom";
//Component Imports
import TopContainer from '../Components/TopContainer';
import LinkButton from '../Components/LinkButton';
import CardContainer from "../Components/CardContainer";
//Css imports
import "../CSS/CardContainer.css";

function CategoryPage(props) {
    console.log({props},"categorypage")
    const [Card,setCard] = useState(null);
    const [category] = useState(props.location.state.category)
    var styling = {color : "#68C2C4"}  
    styling.color=props.location.state.color


    //Make the category titles first letter upper case, and ads an s to the thing(s) category
    let categoryName = category;
    if (categoryName === "thing"){
        categoryName = "things";
    }
    categoryName = categoryName[0].toUpperCase()+categoryName.substring(1);

    //Function triggered when a card is selected
    function onCardClick(newValue){
        console.log(newValue)
        setCard(newValue.src)
    }

    return (
        <div className="Page">

        <TopContainer
            text = "some text that will be shown in the instruction box"
        />
            <div className="CardContainer">
                    <div className="CardContainerTitle" style={styling}> {categoryName}</div>
                     <CardContainer category={props.location.state.category} onSelect={onCardClick}/>
                <LinkButton target="/cards" title="Choose" size="Small" category={props.location.state.category}></LinkButton>
            </div>

            

        </div>
    );
}

export default CategoryPage;