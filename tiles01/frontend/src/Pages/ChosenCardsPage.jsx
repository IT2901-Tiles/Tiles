import React, { useContext } from 'react'
import LinkButton from '../Components/LinkButton'
import placeholderImage from '../images/blankImg.png'
import TopContainer from '../Components/TopContainer'
import LinkToPage from '../Components/LinkToPage'
import CharNormal from "../Components/CharNormal";

function ChosenCardsPage(props) {

    //try {
    //    localStorage.setItem(props.location.state.category, props.location.state.card)
    //} catch (error) {
    //    console.log("no cards chosen")
    //}
  
    const trigger = "trigger";
    const things = "things";
    const feedback = "feedback";
    const triggerChosen = !["null", null].includes(localStorage.getItem(trigger))
    const thingChosen = !["null", null].includes(localStorage.getItem(things))
    const feedbackChosen = !["null", null].includes(localStorage.getItem(feedback))

    
    let errorOccured = false; // value turns true if error occured 
    let colorBorder; // color of border and font when no card is picked
    const buttonActive = triggerChosen && thingChosen && feedbackChosen
    // This function checks which cards are checked off and sets a bool value

    // If bool value is true, then this function is returned. This returns the image and uses the LinkToPage-component
    function trueValue(category) {
        if (errorOccured) { // error-solution for now, this will be fixed more professionally later on
            return <LinkButton target="/categories" title={category.charAt(0).toUpperCase + category.substring(1)} category={category} size="Small"></LinkButton>
        } else {
            let categoryName = category.charAt(0).toUpperCase() + category.substring(1)
            return <LinkToPage target="/categories" title={categoryName} category={category} nameOfCard={localStorage.getItem(category)} classNameCard={"chosen" + categoryName}></LinkToPage>
        }
    }

    // If bool value is false, then this function is returned. This function returns a placeholder image and a button
    function falseValue(category) {
        if (errorOccured) { // error-solution for now, this will be fixed
            return <LinkButton target="/categories" title={category} category={category} size="Small"></LinkButton>
        } else {
            // Checks which type of card it is + sets the color of the border
            let classNameOfCard;
            if (category === trigger) {
                classNameOfCard = "noCardChosenTrigger";
                colorBorder = "#F08A00";
            } else if (category === things) {
                classNameOfCard = "noCardChosenThings";
                colorBorder = "#E53D2F";
            } else if (category === feedback) {
                classNameOfCard = "noCardChosenFeedback";
                colorBorder = "#FFCD00";
            }

            // Returns the placeholder image and button
            // (fjern kommentar: kanskje litt dårlig navngivning på divene og kanskje unødvendig mange, men ble finest og mest responsivt med 2 diver)
            return <div id="firstWrapperCardNotChosen"><div className="wrapperCardNotChosen">
            <img src={placeholderImage} alt="test" className="noImgChosen" style={{ border: `${colorBorder}`, borderStyle: "solid", borderWidth: "0.65vw" }} />
            <div id={classNameOfCard} style={{ color: `${colorBorder}`}}>
                {classNameOfCard === "noCardChosenThings" ? category.charAt(0).toUpperCase() + category.substring(1) : category.charAt(0).toUpperCase() + category.substring(1)}

                </div>
                <br />
            </div>
                <div id="buttonChosenCardsPage">
                    {/* Following code decides whether button is going to be enabled or not */}
                    {(category === trigger) ? <LinkButton target="/categories" title="Choose!" category="trigger" size="chosenCards" className="buttonChosenCardsPage"></LinkButton> : ""}
                    {((category === things) && triggerChosen) ? <LinkButton target="/categories" title="Choose!" category="things" size="chosenCards" className="buttonChosenCardsPage"></LinkButton> : ""}
                    {((category === feedback) && (triggerChosen) && (thingChosen)) ? <LinkButton target="/categories" title="Choose!" category="feedback" size="chosenCards" className="buttonChosenCardsPage"></LinkButton> : ""}
                </div>
            </div>

        }
    }

    return (
        <div className="Page ChosenCardsPage">
        <TopContainer
            text = "Press the Choose button to select a card from this category!"
        />
        <div id="charNormalWrapper">
            <CharNormal/>
        </div>
            <div className="chosenCardsGrid">
                <div className="chosenCardsGrid2">
                    {/* If-else statements to check the bool-variables */}
                    {(triggerChosen) ? <div className="chosenCardContainer">{trueValue(trigger)}</div> : falseValue(trigger)}
                    {(thingChosen) ? <div className="chosenCardContainer">{trueValue(things)}</div> : falseValue(things)}
                    {(feedbackChosen) ? <div className="chosenCardContainer">{trueValue(feedback)}</div> : falseValue(feedback)}
                </div>
            </div>
            <br />
            <LinkButton target="/animation" title="RUN!" category="animation" size="Large" disabled={!buttonActive}    ></LinkButton>
        </div>
    );
}
//checks if cards have been selected

export default ChosenCardsPage