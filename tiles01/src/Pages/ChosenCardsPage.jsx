import React from 'react';
import LinkButton from '../Components/LinkButton'
import placeholderImage from '../images/blankImg.png';

function ChosenCardsPage(props) {
    localStorage.setItem(props.location.state.category,props.location.state.card)
    var test123;

    function CheckCards() {
        if ((localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null) && (localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null) && (localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null)) {
            return <div className="chosenCardsGrid">
            <div className="chosenCardsGrid2">
            <div className="wrapperCardNotChosen">
                <img src={placeholderImage} alt="test" className="noImgChosen" />
                <div id="textNoCardChosen1">
                    Trigger
                    <br/>
                    <LinkButton target="/categories" title="Trigger" category="trigger" size="Small"></LinkButton>
                </div>
            </div>
            <div className="wrapperCardNotChosen">
                <img src={placeholderImage} alt="test" className="noImgChosen" />
                <div id="textNoCardChosen2">
                    Things
                    <br/>
                </div>
            </div>
            <div className="wrapperCardNotChosen">
                <img src={placeholderImage} alt="test" className="noImgChosen" />
                <div id="textNoCardChosen3">
                    Feedback
                    <br/>
                </div>
            </div>
            </div>
            </div>

        } else if ((!(localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null)) && (localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null) && (localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null)) {
            return  <div className="chosenCardsGrid">
            <div className="chosenCardsGrid2">
            <div className="chosenCardContainer">
                <img src={localStorage.getItem("trigger")} alt='Picture of a "trigger" card' className="chosenTrigger" />
            </div>
            <div className="wrapperCardNotChosen">
                <img src={placeholderImage} alt="test" className="noImgChosen" />
                <div id="textNoCardChosen2">
                    Things
                    <br/>
                    <LinkButton target="/categories" title="Things" category="thing" size="Small"></LinkButton>
                </div>
            </div>
            <div className="wrapperCardNotChosen">
                <img src={placeholderImage} alt="test" className="noImgChosen" />
                <div id="textNoCardChosen3">
                    Feedback
                    <br/>
                </div>
            </div>
            </div>
            </div>
        } else if ((!(localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null)) && (!(localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null)) && (localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null)) {
            return <div className="chosenCardsGrid">
            <div className="chosenCardsGrid2">
            <div className="chosenCardContainer">
                <img src={localStorage.getItem("trigger")} alt='Picture of a "trigger" card' className="chosenTrigger" />
            </div>
            <div className="chosenCardContainer">
                <img src={localStorage.getItem("thing")} className="chosenThing" alt='Picture of a "thing" card' />
            </div>
            <div className="wrapperCardNotChosen">
                <img src={placeholderImage} alt="test" className="noImgChosen" />
                <div id="textNoCardChosen3">
                    Feedback
                    <br/> 
                    <LinkButton target="/categories" title="Feedback" category="feedback" size="Small"></LinkButton>
                </div>
            </div>
            </div>
            </div>
        } else if ((!(localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null)) && (!(localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null)) && (!(localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null))) {
            return <div className="chosenCardsGrid">
            <div className="chosenCardsGrid2">
            <div className="chosenCardContainer">
                <img src={localStorage.getItem("trigger")} alt='Picture of a "trigger" card' className="chosenTrigger" />
            </div>
            <div className="chosenCardContainer">
                <img src={localStorage.getItem("thing")} className="chosenThing" alt='Picture of a "thing" card' />
            </div>
            <div className="chosenCardContainer">
                <img src={localStorage.getItem("feedback")} className="chosenFeedback" alt='Picture of a "feedback" card' />
            </div>
            </div>
            </div>
        } else {
            return <h1>Please try again, you probably have some cards that are checked off already (try unchecking all)</h1>
        }
    }

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
            
            {/* <div className="chosenCardsGrid">
                <div className="chosenCardsGrid2">
                        {localStorage.getItem("trigger") === "null" || localStorage.getItem("trigger") === null ? <div className="wrapperCardNotChosen"><img src={placeholderImage} alt="test" className="noImgChosen" /><div id="textNoCardChosen1">Trigger<br/><LinkButton target="/categories" title="Trigger" category="trigger" size="Small"></LinkButton></div></div> : <div className="chosenCardContainer"><img src={localStorage.getItem("trigger")} alt='Picture of a "trigger" card' className="chosenTrigger" /></div>}
                        {localStorage.getItem("thing") === "null" || localStorage.getItem("thing") === null ? <div className="wrapperCardNotChosen"><img src={placeholderImage} alt="test" className="noImgChosen" /><div id="textNoCardChosen2">Things<br/><LinkButton target="/categories" title="Things" category="thing" size="Small"></LinkButton></div></div> : <div className="chosenCardContainer"><img src={localStorage.getItem("thing")} className="chosenThing" alt='Picture of a "thing" card' /></div>}
                        {localStorage.getItem("feedback") === "null" || localStorage.getItem("feedback") === null ? <div className="wrapperCardNotChosen"><img src={placeholderImage} alt="test" className="noImgChosen" /><div id="textNoCardChosen3">Feedback<br/> <LinkButton target="/categories" title="Feedback" category="feedback" size="Small"></LinkButton></div></div> : <div className="chosenCardContainer"><img src={localStorage.getItem("feedback")} className="chosenFeedback" alt='Picture of a "feedback" card' /></div>}
                </div>
            </div> */}
            {CheckCards()}
        </div>
    );
}

export default ChosenCardsPage;