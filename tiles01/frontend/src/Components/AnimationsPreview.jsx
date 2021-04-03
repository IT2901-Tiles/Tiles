import React, {useContext} from 'react';
import LinkButton from './LinkButton';
import FormFieldAnimationPage from './FormFieldAnimationPage'
import AudioFieldAnimationPage from './AudioFieldAnimationPage'
import {

    Redirect,
} from "react-router-dom";
// Component for the preview of the animations + the selected cards. 
// This component uses the grid-property in html and css
import { Mbc, Mbv, Mcc, Mcv, Mfc, Mfv, Mpc, Mpv, Muc, Tbc, Tbv, Dbc, Dbv, Muv, Tcc, Tfc, Tfv, Tpc, Tpv, Tcv, Tuc, Tuv, Dcc, Dcv, Dfc, Dfv, Dpc, Dpv, Duc, Duv } from '../Animations';
import {CardsContext} from '../App.js'

function AnimationsPreview() {
    const cardsContext = useContext(CardsContext)

    //Redirect if cards are not chosen
    if (cardsContext.trigger === "null" || cardsContext.things === "null" || cardsContext.feedback === "null") {
        return < Redirect to="/404" />
    }
    //dictionary used to find the correct animation
    const animationDictionary = {
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

    const triggerName = getCardName(cardsContext.trigger)
    const thingName = getCardName(cardsContext.things)
    const feedbackName = getCardName(cardsContext.feedback)
    //select the correct animation based on the selected cards
    const animation = animationDictionary[triggerName][thingName][feedbackName]

    //resets cards when try again is clicked
    function resetCards() {
        console.log("HER")
        cardsContext.updateCard("trigger", "");
        console.log("context")
        console.log(cardsContext.trigger)
        console.log(cardsContext.things)
        console.log(cardsContext.feedback)
        cardsContext.updateCard("things", "");
        console.log("context")
        console.log(cardsContext.trigger)
        console.log(cardsContext.things)
        console.log(cardsContext.feedback)
        cardsContext.updateCard("feedback", "");
        console.log("context")
        console.log(cardsContext.trigger)
        console.log(cardsContext.things)
        console.log(cardsContext.feedback)
    }


    return (
        <div className="gridAnimationsPage">
            <div className="gridAnimationItem1">
                <div className="card1AnimationsPage">
                    <img src={cardsContext.trigger} className="triggerAnimationsPage" alt="A 'trigger' card" />
                </div>
                <div className="card2AnimationsPage">
                    <img src={cardsContext.things} className="thingAnimationsPage" alt="A 'thing' card" />
                </div>
                <div className="card3AnimationsPage">
                    <img src={cardsContext.feedback} className="feedbackAnimationsPage" alt="A 'feedback' card" />
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
                <LinkButton title="Try again!" target="/cards" size="Large" category="animation" onClick={resetCards} ></LinkButton> {/* "Try Again!" button */}
            </div>
        </div>
    )
}

export default AnimationsPreview