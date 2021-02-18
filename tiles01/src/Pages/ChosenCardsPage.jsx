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

            {/* Den gamle koden (har ikke problemet med at kortene endrer størrelse når ikke alle kort er valgt) */}
            {/* <div>
                {localStorage.getItem("trigger") === "null" ? <p className="cardNotChosenText">No "trigger" card chosen.</p> : <img src={localStorage.getItem("trigger")} className="chosenTrigger" alt='Picture of a "trigger" card' />}
                {localStorage.getItem("thing") === "null" ? <p className="cardNotChosenText">No "thing" card chosen.</p> : <img src={localStorage.getItem("thing")} className="chosenThing" alt='Picture of a "thing" card' />}
                {localStorage.getItem("feedback") === "null" ? <p className="cardNotChosenText">No "feedback" card chosen.</p> : <img src={localStorage.getItem("feedback")} className="chosenFeedback" alt='Picture of a "feedback" card' />}
            </div>  */}
            
            <div className="chosenCardsGrid">
                <div className="chosenCardsGrid2">
                    {/* <div className="triggerDiv"> */}
                        {localStorage.getItem("trigger") === "null" ? <div className="cardNotChosenText">No "trigger" card chosen. <br/> <LinkButton target="/categories" title="Choose!" category="trigger" size="Small"></LinkButton></div> : <div><img src={localStorage.getItem("trigger")} alt='Picture of a "trigger" card' className="chosenTrigger" /></div>}
                    {/* </div>
                    <div className="thingDiv"> */}
                        {localStorage.getItem("thing") === "null" ? <div className="cardNotChosenText">No "thing" card chosen. <br/> <LinkButton target="/categories" title="Choose!" category="thing" size="Small"></LinkButton></div> : <div><img src={localStorage.getItem("thing")} className="chosenThing" alt='Picture of a "thing" card' /></div>}
                    {/* </div>
                    <div className="feedbackDiv"> */}
                        {localStorage.getItem("feedback") === "null" ? <div className="cardNotChosenText">No "feedback" card chosen. <br/> <LinkButton target="/categories" title="Choose!" category="feedback" size="Small"></LinkButton></div> : <div><img src={localStorage.getItem("feedback")} className="chosenFeedback" alt='Picture of a "feedback" card' /></div>}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default ChosenCardsPage;