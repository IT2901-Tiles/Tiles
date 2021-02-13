import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import LinkButton from '../Components/LinkButton'

function ChosenCardsPage(props) {
    const [CardTrigger,setCardTrigger] = useState(null);
    const [CardThing,setCardThing] = useState(null);
    const [CardFeedback,setCardFeedback] = useState(null);
    console.log({CardTrigger}, props.location.state.card)
    localStorage.setItem(props.location.state.category,props.location.state.card)
    return (
        <div className="Page">
            <p>ChosenCardsPage</p>

            <LinkButton target="/categories" title="Trigger" category="trigger" size="Small"></LinkButton>
            <LinkButton target="/categories" title="Things" category="thing" size="Small"></LinkButton>
            <LinkButton target="/categories" title="Feedback" category="feedback" size="Small"></LinkButton>
            <LinkButton target="/animation" title="RUN!" category="animation" size="Large"></LinkButton>
            <LinkButton target="/" title="Back"></LinkButton>
            <img src={localStorage.getItem("trigger")}/>
            <img src={localStorage.getItem("thing")}/>
            <img src={localStorage.getItem("feedback")}/>
        </div>
    );
}

export default ChosenCardsPage;