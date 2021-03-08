import React from 'react';
import LinkButton from './LinkButton';
import FormFieldAnimationPage from './FormFieldAnimationPage'
// Component for the preview of the animations + the selected cards. 
// This component uses the grid-property in html and css

function AnimationsPreview() {

    return(
        <div className="gridAnimationsPage">
            <div className="gridAnimationItem3">
                <div className="card1AnimationsPage">
                    {/* Checking if the user has picked a card or not */}
                    {localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null ? <p>No "trigger" card chosen.</p> : <img src={localStorage.getItem("trigger")} className="triggerAnimationsPage" alt="A 'trigger' card" />}
                </div>
                <div className="card2AnimationsPage">
                    {localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null ? <p>No "thing" card chosen.</p> : <img src={localStorage.getItem("thing")} className="thingAnimationsPage" alt="A 'thing' card" />}
                </div>
                <div className="card3AnimationsPage">
                    {localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null ? <p>No "feedback" card chosen.</p> : <img src={localStorage.getItem("feedback")} className="feedbackAnimationsPage" alt="A 'feedback' card" />}
                </div>
            </div>
            {/* The div below is where the animations will appear */}
            <div className="gridAnimationItem4">
                    Area for the animations based off the selected cards
                    {/* Suggestion for text-area field */}
                    <FormFieldAnimationPage triggerCard="test" thingCard="test" feedbackCard="test" /> 
            </div>
            {/* "Try again!"-button */}
            <div className="gridAnimationItem5">
                <LinkButton title="Try again!" target="/" size="Large" category="animation"></LinkButton>
            </div>
        </div>
    )
}

export default AnimationsPreview