import React from 'react';
import LinkButton from './LinkButton';
import FormFieldAnimationPage from './FormFieldAnimationPage'
// Component for the preview of the animations + the selected cards. 
// This component uses the grid-property in html and css
import {Mbc,Mbv,Mcc,Mcv,Mfc,Mfv,Mpc,Mpv,Muc,Tbc,Tbv,Dbc,Dbv,Muv,Tcc,Tfc,Tfv,Tpc,Tpv,Tcv,Tuc,Tuv} from '../Animations';
function AnimationsPreview() {
    let animationDictionary={
        "drop":{"bike":{"color_change":<Dbc/>,"vibrate":<Dbv/>},"clothing":{"color_change":null,"vibrate":null},"furniture":{"color_change":null,"vibrate":null},"pen":{"color_change":null,"vibrate":null},"umbrella":{"color_change":null,"vibrate":null}},
        "motion":{"bike":{"color_change":<Mbc/>,"vibrate":<Mbv/>},"clothing":{"color_change":<Mcc/>,"vibrate":<Mcv/>},"furniture":{"color_change":<Mfc/>,"vibrate":<Mfv/>},"pen":{"color_change":<Mpc/>,"vibrate":<Mpv/>},"umbrella":{"color_change":<Muc/>,"vibrate":<Muv/>}},
        "temperature":{"bike":{"color_change":<Tbc/>,"vibrate":<Tbv/>},"clothing":{"color_change":<Tcc/>,"vibrate":<Tcv/>},"furniture":{"color_change":<Tfc/>,"vibrate":<Tfv/>},"pen":{"color_change":<Tpc/>,"vibrate":<Tpv/>},"umbrella":{"color_change":<Tuc/>,"vibrate":<Tuv/>}},

    }
    //takes in the path of the file and returns the name of the card
    function getCardName(path){
        let indexstartname=path.lastIndexOf("/")+1
        let filename=path.slice(indexstartname)
        let indexendname=filename.indexOf(".")
        console.log(indexendname)
        let cardname=filename.slice(0,indexendname)
        return cardname
        
    }
    getCardName(localStorage.getItem("trigger"))
    var animation=animationDictionary[getCardName(localStorage.getItem("trigger"))][getCardName(localStorage.getItem("thing"))][getCardName(localStorage.getItem("feedback"))]
    console.log(animation)
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
                    {animation}
                    {/* Suggestion for text-area field */}
                    {/*<FormFieldAnimationPage />*/}
            </div>
            {/* "Try again!"-button */}
            <div className="gridAnimationItem5">
                <LinkButton title="Try again!" target="/" size="Large" category="animation"></LinkButton>
            </div>
        </div>
    )
}

export default AnimationsPreview