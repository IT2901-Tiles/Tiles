import React from 'react';
import LinkButton from './LinkButton';
import FormFieldAnimationPage from './FormFieldAnimationPage'
import AudioFieldAnimationPage from './AudioFieldAnimationPage'
// Component for the preview of the animations + the selected cards. 
// This component uses the grid-property in html and css
import { Mbc, Mbv, Mcc, Mcv, Mfc, Mfv, Mpc, Mpv, Muc, Tbc, Tbv, Dbc, Dbv, Muv, Tcc, Tfc, Tfv, Tpc, Tpv, Tcv, Tuc, Tuv, Dcc, Dcv, Dfc, Dfv, Dpc, Dpv, Duc, Duv } from '../Animations';
function AnimationsPreview() {
    //dictionary used to find the correct animation
    let animationDictionary = {
        "drop": { "bike": { "color_change": <Dbc />, "vibrate": <Dbv /> }, "clothing": { "color_change": <Dcc />, "vibrate": <Dcv /> }, "furniture": { "color_change": <Dfc />, "vibrate": <Dfv /> }, "pen": { "color_change": <Dpc />, "vibrate": <Dpv /> }, "umbrella": { "color_change": <Duc />, "vibrate": <Duv /> } },
        "motion": { "bike": { "color_change": <Mbc />, "vibrate": <Mbv /> }, "clothing": { "color_change": <Mcc />, "vibrate": <Mcv /> }, "furniture": { "color_change": <Mfc />, "vibrate": <Mfv /> }, "pen": { "color_change": <Mpc />, "vibrate": <Mpv /> }, "umbrella": { "color_change": <Muc />, "vibrate": <Muv /> } },
        "temperature": { "bike": { "color_change": <Tbc />, "vibrate": <Tbv /> }, "clothing": { "color_change": <Tcc />, "vibrate": <Tcv /> }, "furniture": { "color_change": <Tfc />, "vibrate": <Tfv /> }, "pen": { "color_change": <Tpc />, "vibrate": <Tpv /> }, "umbrella": { "color_change": <Tuc />, "vibrate": <Tuv /> } },

    }
    //takes in the path of the file and returns the name of the card
    function getCardName(path) {
        let indexstartname = path.lastIndexOf("/") + 1
        let filename = path.slice(indexstartname)
        let indexendname = filename.indexOf(".")
        let cardname = filename.slice(0, indexendname)
        return cardname

    }
    let triggerName = getCardName(localStorage.getItem("trigger"))
    let thingName = getCardName(localStorage.getItem("thing"))
    let feedbackName = getCardName(localStorage.getItem("feedback"))
    //select the correct animation based on the selected cards
    var animation = animationDictionary[getCardName(localStorage.getItem("trigger"))][getCardName(localStorage.getItem("thing"))][getCardName(localStorage.getItem("feedback"))]

    return (
        <div className="gridAnimationsPage">
            <div className="gridAnimationItem1">
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
            <div className="gridAnimationItem2">
                {animation}
                {/* Suggestion for text-area field */}
            </div>
            {/* "Try again!"-button */}
            <div className="gridAnimationItem3">
                <FormFieldAnimationPage triggerCard={triggerName} thingCard={thingName} feedbackCard={feedbackName} /> {/* The textarea */}
                <AudioFieldAnimationPage triggerCard={triggerName} thingCard={thingName} feedbackCard={feedbackName} /> {/* Audio recording */}
                <LinkButton title="Try again!" target="/" size="Large" category="animation"></LinkButton> {/* "Try Again!" button */}
            </div>
        </div>
    )
}

export default AnimationsPreview