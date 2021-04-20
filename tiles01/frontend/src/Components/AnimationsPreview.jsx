import React from 'react';
import LinkButton from './LinkButton';
import FormFieldAnimationPage from './FormFieldAnimationPage'
import AudioFieldAnimationPage from './AudioFieldAnimationPage'
import {
    Redirect,
} from "react-router-dom";
// Component for the preview of the animations + the selected cards. 
// This component uses the grid-property in html and css
import { Mbc, Mbv, Mcc, Mcv, Mfc, Mfv, Mpc, Mpv, Muc, Tbc, Tbv, Dbc, Dbv, Muv, Tcc, Tfc, Tfv, Tpc, Tpv, Tcv, Tuc, Tuv, Dcc, Dcv, Dfc, Dfv, Dpc, Dpv, Duc, Duv } from '../Animations';
import AudioOnAnimations from './AudioOnAnimations';



function AnimationsPreview() {
    const trigger = "trigger";
    const things = "things";
    const feedback = "feedback";
    //Redirect if cards are not chosen
    if (localStorage.getItem(trigger) === (null || "null") ||localStorage.getItem(things) === (null || "null") ||localStorage.getItem(feedback) === (null || "null")) {
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

    const triggerName = getCardName(localStorage.getItem(trigger))
    const thingName = getCardName(localStorage.getItem(things))
    const feedbackName = getCardName(localStorage.getItem(feedback))
    //select the correct animation based on the selected cards
    const animation = animationDictionary[triggerName][thingName][feedbackName]

    return (
        <div className="gridAnimationsPage">
            <div className="gridAnimationCards">
                <div className="card1AnimationsPage">
                    <img src={localStorage.getItem(trigger)} className="triggerAnimationsPage" alt="A 'trigger' card" />
                </div>
                <div className="card2AnimationsPage">
                    <img src={localStorage.getItem(things)} className="thingAnimationsPage" alt="A 'thing' card" />
                </div>
                <div className="card3AnimationsPage">
                    <img src={localStorage.getItem(feedback)} className="feedbackAnimationsPage" alt="A 'feedback' card" />
                </div>
            </div>
            {/* The div below is where the animations will appear */}
            <div className="gridAnimationAnimation">
                {animation}
            </div>
            {/* "Try again!"-button */}
            <div className="gridAnimationSaving">
                <FormFieldAnimationPage triggerCard={triggerName} thingCard={thingName} feedbackCard={feedbackName} /> {/* The textarea */}
                <AudioFieldAnimationPage triggerCard={triggerName} thingCard={thingName} feedbackCard={feedbackName} /> {/* Audio recording */}
                <AudioOnAnimations triggerCard={triggerName} thingCard={thingName} feedbackCard={feedbackName} /> {/* Audio for some animations */}
                <LinkButton title="Try again!" target="/cards" size="tryagain" category="animation" onClick={resetCards} id="tryagainButton"></LinkButton> {/* "Try Again!" button */}
            </div>
        </div>
    )
}

export default AnimationsPreview

//resets cards
export function resetCards() {
    localStorage.setItem('trigger', null);
    localStorage.setItem('things', null);
    localStorage.setItem('feedback', null);
}