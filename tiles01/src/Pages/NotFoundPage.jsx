import React from 'react';
import LinkButton from '../Components/LinkButton';
import '../CSS/PageNotFound.css';
//IMG imports
import bikeCard from "../img/things/bike.png";
import colorChangeCard from "../img/feedback/colorChange.png";
import motionCard from "../img/triggers/motion.png"
import dropCard from "../img/triggers/drop.png"
import penCard from "../img/things/pen.png";
import shakeCard from "../img/triggers/shake.png"
import umbrellaCard from "../img/things/umbrella.png"
import emojiCard from "../img/feedback/emoji.png"; //Byttes ut med kortet vi ender opp med? 

function NotFoundPage() {
    return (
        <div className="PageNotFound">
            <div className="pageNotFoundTitle">
                <h1>This page does not exist</h1>
            </div>

            <img src={bikeCard} alt="TheBikeCard" className="image bikeCard"/>
            <img src={colorChangeCard} alt="Card" className="image colorChangeCard"/>
            <img src={motionCard} alt="A card" className="image motionCard"/>
            <img src={dropCard} alt="a card" className="image dropCard"/>
            <img src={penCard} alt="a card" className="image penCard"/>

            <img src={colorChangeCard} alt="a card" className="image colorChangeCard2"/>
            <img src={shakeCard} alt="a card" className="image shakeCard"/>
            <img src={umbrellaCard} alt="a card" className="image umbrellaCard"/>
            <img src={emojiCard} alt="a card" className="image emojiCard"/>
            <img src={motionCard} alt="a card" className="image motionCard2"/>

            <div className="middleContainer">
                <p>It seems like you are a bit lost. 
                    Let me help you find your way back! </p>
            </div>

            <div className="bottomContainer">
            <div className="mainPageButton"> 
              <LinkButton title="Main page" target="/" size="Large"></LinkButton>
            </div>
            <div className="cardsButton"> 
             <LinkButton title="Back to the cards" target="/cards" size="Large"></LinkButton>
            </div>
            </div>
        </div>
    );
}

export default NotFoundPage;