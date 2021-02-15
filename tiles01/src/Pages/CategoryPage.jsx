//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React from 'react';
import { useState } from 'react';
import CardContainer from './../Components/CardContainer'
import LinkButton from '../Components/LinkButton';


function CategoryPage(props) {
    console.log({props},"categorypage")
    const [Card,setCard] = useState(null);
    function onCardClick(newValue){
        console.log(newValue)
        setCard(newValue.src)
    }
    return (
        <div className="Page">
            <p>CategoryPage</p>
            <p>{props.location.state.category}</p>
            <CardContainer category={props.location.state.category} onSelect={onCardClick}/>
            <LinkButton target="/cards" title="Choose" size="Small" category={props.location.state.category} card={Card} ></LinkButton>

        </div>
    );
}

export default CategoryPage;