import React from 'react'
import LinkButton from '../Components/LinkButton'
import placeholderImage from '../images/blankImg.png'
import TopContainer from '../Components/TopContainer'
import LinkToPage from '../Components/LinkToPage'
import { useHistory } from "react-router-dom";
import { useState } from 'react';

function ChosenCardsPage(props) {

    try {
        localStorage.setItem(props.location.state.category, props.location.state.card)
    } catch (error) {
        console.log("no cards chosen")
    }

    var triggerChosen = !["null", null].includes(localStorage.getItem("trigger"))
    var thingChosen = !["null", null].includes(localStorage.getItem("things"))
    var feedbackChosen = !["null", null].includes(localStorage.getItem("feedback"))

    let triggerNotChosenId = "textNoCardChosen1";
    let thingNotChosenId = "textNoCardChosen2";
    let feedbackNotChosenId = "textNoCardChosen3";
    let triggerChosenId = "trigger";
    let thingChosenId = "things";
    let feedbackChosenId = "feedback";
    let errorOccured = false; // value turns true if error occured 
    let colorBorder; // color of border and font when no card is picked
    const [buttonActive, setButtonActive] = useState(triggerChosen && thingChosen && feedbackChosen);
    // This function checks which cards are checked off and sets a bool value


    // If bool value is true, then this function is returned. This returns the image and uses the LinkToPage-component
    function trueValue(cardType) {
        if (errorOccured) { // error-solution for now, this will be fixed more professionally later on
            return <LinkButton target="/categories" title={cardType.charAt(0).toUpperCase + cardType.substring(1)} category={cardType} size="Small"></LinkButton>
        } else {
            let cardTypeName = cardType.charAt(0).toUpperCase() + cardType.substring(1)
            return <LinkToPage target="/categories" title={cardTypeName} category={cardType} nameOfCardType={localStorage.getItem(cardType)} classNameCard={"chosen" + cardTypeName}></LinkToPage>
        }
    }

    // If bool value is false, then this function is returned. This function returns a placeholder image and a button
    function falseValue(cardType) {
        if (errorOccured) { // error-solution for now, this will be fixed
            return <LinkButton target="/categories" title={cardType} category={cardType} size="Small"></LinkButton>
        } else {
            // Checks which type of card it is + sets the color of the border
            let classNameOfCard;
            if (cardType === triggerChosenId) {
                classNameOfCard = triggerNotChosenId;
                colorBorder = "#F08A00";
            } else if (cardType === thingChosenId) {
                classNameOfCard = thingNotChosenId;
                colorBorder = "#E53D2F";
            } else if (cardType === feedbackChosenId) {
                classNameOfCard = feedbackNotChosenId;
                colorBorder = "#FFCD00";
            }

            // Returns the placeholder image and button
            // (fjern kommentar: kanskje litt dårlig navngivning på divene og kanskje unødvendig mange, men ble finest og mest responsivt med 2 diver)
            return <div id="firstWrapperCardNotChosen"><div className="wrapperCardNotChosen">
                <img src={placeholderImage} alt="test" className="noImgChosen" style={{ border: `${colorBorder}`, borderStyle: "solid", borderWidth: "0.65vw" }} />
                <div id={classNameOfCard} style={{ color: `${colorBorder}` }}>
                    {cardType.charAt(0).toUpperCase() + cardType.substring(1)}
                </div>
                <br />
            </div>
                <div id="buttonChosenCardsPage">
                    {/* Following code decides whether button is going to be enabled or not */}
                    {((cardType === triggerChosenId) && (!(thingChosen)) && (!(feedbackChosen))) ? <LinkButton target="/categories" title="Choose!" category="trigger" size="chosenCards" className="buttonChosenCardsPage"></LinkButton> : ""}
                    {((cardType === thingChosenId) && (triggerChosen) && (!(feedbackChosen))) ? <LinkButton target="/categories" title="Choose!" category="things" size="chosenCards" className="buttonChosenCardsPage"></LinkButton> : ""}
                    {((cardType === feedbackChosenId) && (triggerChosen) && (thingChosen)) ? <LinkButton target="/categories" title="Choose!" category="feedback" size="chosenCards" className="buttonChosenCardsPage"></LinkButton> : ""}

                </div>
            </div>

        }
    }
    return (
        <div className="Page">
            <TopContainer
                text="Some text"
            />

            <div className="chosenCardsGrid">
                <div className="chosenCardsGrid2">

                    {/* If-else statements to check the bool-variables */}
                    {(triggerChosen) ? <div className="chosenCardContainer">{trueValue(triggerChosenId)}</div> : falseValue(triggerChosenId)}
                    {(thingChosen) ? <div className="chosenCardContainer">{trueValue(thingChosenId)}</div> : falseValue(thingChosenId)}
                    {(feedbackChosen) ? <div className="chosenCardContainer">{trueValue(feedbackChosenId)}</div> : falseValue(feedbackChosenId)}
                </div>
            </div>



            <br />
            <LinkButton target="/animation" title="RUN!" category="animation" size="Large" active={buttonActive} buttonError={"Please select one card in each category"}   ></LinkButton>
        </div>
    );
}
//checks if cards have been selected


export default ChosenCardsPage