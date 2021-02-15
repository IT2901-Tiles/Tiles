import React from 'react';
import LinkButton from '../Components/LinkButton'

function ChosenCardsPage(props) {
    localStorage.setItem(props.location.state.category,props.location.state.card)

    return (
        <div className="Page">
            <p>ChosenCardsPage</p>
            <LinkButton target="/categories" title="Trigger" category="trigger" size="Small"></LinkButton>
            <LinkButton target="/categories" title="Things" category="thing" size="Small"></LinkButton>
            <LinkButton target="/categories" title="Feedback" category="feedback" size="Small"></LinkButton>
            <LinkButton target="/animation" title="RUN!" category="animation" size="Large"></LinkButton>
            <LinkButton target="/" title="Back"></LinkButton>

            <div>
                {localStorage.getItem("trigger") === "null" ? <p className="cardNotChosenText">No "trigger" card chosen.</p> : <img src={localStorage.getItem("trigger")} className="chosenCard" alt='Picture of a "trigger" card' />}
                {localStorage.getItem("thing") === "null" ? <p className="cardNotChosenText">No "thing" card chosen.</p> : <img src={localStorage.getItem("thing")} className="chosenCard" alt='Picture of a "thing" card' />}
                {localStorage.getItem("feedback") === "null" ? <p className="cardNotChosenText">No "feedback" card chosen.</p> : <img src={localStorage.getItem("feedback")} className="chosenCard" alt='Picture of a "feedback" card' />}
            </div> 
        </div>
    );
}

export default ChosenCardsPage;