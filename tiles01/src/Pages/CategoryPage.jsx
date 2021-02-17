//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React, {useState} from 'react';
import { Link } from "react-router-dom";
import TopContainer from '../Components/TopContainer';
import "../CardContainer.css";
import LinkButton from '../Components/LinkButton';
import CardContainer from "../Components/CardContainer"

function CategoryPage(props) {
    const [category] = useState(props.location.state.category)
    var styling = {color : "#68C2C4"}  
    styling.color=props.location.state.color

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
                    <div className="CardContainerTitle" style={styling}> {category}</div>
 
                <CardContainer category={props.location.state.category} onSelect={onCardClick}/>
                <LinkButton target="/cards" title="Choose" size="Small" category={props.location.state.category}></LinkButton>
            </div>

            

        </div>
    );
}

export default CategoryPage;