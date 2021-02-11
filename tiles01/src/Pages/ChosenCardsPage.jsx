import React from 'react';
import { Link } from "react-router-dom";

//COMPONENTS IMPORTS
import TopContainer from '../Components/TopContainer';
import LinkButton from '../Components/LinkButton'


function ChosenCardsPage() {
    return (
        <div className="Page">
        <TopContainer
            text = "Some text"
        />

            <p>ChosenCardsPage</p>
            <LinkButton target="/categories" title="Trigger" category="trigger" size="Small"></LinkButton>
            <LinkButton target="/categories" title="Things" category="thing" size="Small"></LinkButton>
            <LinkButton target="/categories" title="Feedback" category="feedback" size="Small"></LinkButton>
            <LinkButton target="/animation" title="RUN!" category="animation" size="Large"></LinkButton>
            <LinkButton target="/" title="Back"></LinkButton>
        </div>
    );
}

export default ChosenCardsPage;