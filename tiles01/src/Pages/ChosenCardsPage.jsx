import React from 'react'
import LinkButton from '../Components/LinkButton'
import placeholderImage from '../images/blankImg.png'
import TopContainer from '../Components/TopContainer'
import LinkToPage from '../Components/LinkToPage'

function ChosenCardsPage(props) {
    localStorage.setItem(props.location.state.category,props.location.state.card)
    let triggerChosen = false;
    let thingChosen = false;
    let feedbackChosen = false;
    let triggerNotChosenId = "textNoCardChosen1";
    let thingNotChosenId = "textNoCardChosen2";
    let feedbackNotChosenId = "textNoCardChosen3";
    let triggerChosenId = "trigger";
    let thingChosenId = "thing";
    let feedbackChosenId = "feedback";
    let errorOccured = false;

    function CheckCards() {
        if ((localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null) && (localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null) && (localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null)) {
            triggerChosen = false;
            thingChosen = false;
            feedbackChosen = false;
        } else if ((!(localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null)) && (localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null) && (localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null)) {
            triggerChosen = true;
            thingChosen = false;
            feedbackChosen = false;
        } else if ((!(localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null)) && (!(localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null)) && (localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null)) {
            triggerChosen = true;
            thingChosen = true;
            feedbackChosen = false;
        } else if ((!(localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null)) && (!(localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null)) && (!(localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null))) {
            triggerChosen = true;
            thingChosen = true;
            feedbackChosen = true;
        } else {
            errorOccured = true;
            return <h1>Please try again, you probably have some cards that are checked off already (try unchecking all)</h1>
        }
    }

    function trueValue(cardType) {
        let cardTypeName = cardType.charAt(0).toUpperCase()+cardType.substring(1)
        return <LinkToPage target="/categories" title={cardTypeName} category={cardType} nameOfCardType={localStorage.getItem(cardType)}></LinkToPage>
    }

    function falseValue(cardType) {
        let classNameOfCard;
        if (cardType === triggerChosenId) {
            classNameOfCard = triggerNotChosenId;
        } else if (cardType === thingChosenId) {
            classNameOfCard = thingNotChosenId;
        } else if (cardType === feedbackChosenId) {
            classNameOfCard = feedbackNotChosenId;
        }

        return <div className="wrapperCardNotChosen">
        <img src={placeholderImage} alt="test" className="noImgChosen" />
        <div id={classNameOfCard}>
            {cardType.charAt(0).toUpperCase() + cardType.substring(1)}
        <br/>
        { ((cardType === triggerChosenId) && (!(thingChosen)) && (!(feedbackChosen))) ? <LinkButton target="/categories" title="Trigger" category="trigger" size="Small"></LinkButton> : <br/>}
        { ((cardType === thingChosenId) && (triggerChosen) && (!(feedbackChosen))) ? <LinkButton target="/categories" title="Things" category="thing" size="Small"></LinkButton> : <br/>}
        { ((cardType === feedbackChosenId) && (triggerChosen) && (thingChosen)) ? <LinkButton target="/categories" title="Feedback" category="feedback" size="Small"></LinkButton> : <br/>}
        </div>
        </div>
        }

    return (
        <div className="Page">
        <TopContainer
            text = "Some text"
        />
            <div className="chosenCardsGrid">
            <div className="chosenCardsGrid2">
            {CheckCards()}
            {(triggerChosen) ? <div className="chosenCardContainer">{trueValue(triggerChosenId)}</div> : falseValue(triggerChosenId)}
            {(thingChosen) ? <div className="chosenCardContainer">{trueValue(thingChosenId)}</div> : falseValue(thingChosenId)}
            {(feedbackChosen) ? <div className="chosenCardContainer">{trueValue(feedbackChosenId)}</div> : falseValue(feedbackChosenId)}
            </div>
            </div>
        </div>
    );
}

export default ChosenCardsPage