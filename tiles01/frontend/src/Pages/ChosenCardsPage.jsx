import React from 'react'
import LinkButton from '../Components/LinkButton'
import placeholderImage from '../images/blankImg.png'
import TopContainer from '../Components/TopContainer'
import LinkToPage from '../Components/LinkToPage'
import CharNormal from "../Animations/Character/CharNormal"

function ChosenCardsPage() {
  
    const trigger = "trigger"
    const things = "things"
    const feedback = "feedback"
    const triggerChosen = !["null", null].includes(localStorage.getItem(trigger)) // fetches the image of the trigger-card that the user has chosen
    const thingChosen = !["null", null].includes(localStorage.getItem(things)) // fetches the image of the thing-card that the user has chosen
    const feedbackChosen = !["null", null].includes(localStorage.getItem(feedback)) // fetches the image of the feedback-card that the user has chosen
    
    let colorBorder // color of border and font when no card is picked
    const buttonActive = triggerChosen && thingChosen && feedbackChosen    // This variable checks which cards are checked off and sets a bool value


    // If bool value category is true, then this function is returned. This returns the image and uses the LinkToPage-component
    function trueValue(category) {
            let categoryName = category.charAt(0).toUpperCase() + category.substring(1)
            return <LinkToPage target="/categories" title={categoryName} category={category} nameOfCard={localStorage.getItem(category)} classNameCard={"chosen" + categoryName}></LinkToPage>
    }

    // If bool value category is false, then this function is returned. This function returns a placeholder image and a button
    function falseValue(category) {
            // Checks which type of card it is and sets the color of the border
            let classNameOfCard
            if (category === trigger) {
                classNameOfCard = "noCardChosenTrigger"
                colorBorder = "#F08A00"
            } else if (category === things) {
                classNameOfCard = "noCardChosenThings"
                colorBorder = "#E53D2F"
            } else if (category === feedback) {
                classNameOfCard = "noCardChosenFeedback"
                colorBorder = "#FFCD00"
            }

            // Returns the placeholder image and button
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

    return (
        <div className="Page ChosenCardsPage">
        <TopContainer
            text = 'To select a card, click on the "Choose!" button!'
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
            <LinkButton target="/animation" title="RUN!" category="animation" size="Large" disabled={!buttonActive} ></LinkButton>
        </div>
    )
}

export default ChosenCardsPage