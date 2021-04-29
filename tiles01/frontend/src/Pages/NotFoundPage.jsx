import React from 'react';
import LinkButton from '../Components/LinkButton';
import '../CSS/PageNotFound.css';
import bikeCard from "../images/things/bike.png";
import colorChangeCard from "../images/feedbacks/color_change.png";
import motionCard from "../images/triggers/motion.png"
import dropCard from "../images/triggers/drop.png"
import penCard from "../images/things/pen.png";
import temperatureCard from "../images/triggers/temperature.png"
import umbrellaCard from "../images/things/umbrella.png"
import vibrateCard from "../images/feedbacks/vibrate.png"; 

function NotFoundPage() {

    return (
        <div className="PageNotFound">
            <div className="pageNotFoundTitle">
                <h1>Page not found</h1>
            </div>

            <div className="ImagesPageNotFound">
                {/* Left side of the 404-page */}
            <img src={bikeCard} alt="TheBikeCard" className="image bikeCard"/>
            <img src={colorChangeCard} alt="Card" className="image colorChangeCard"/>
            <img src={motionCard} alt="A card" className="image motionCard"/>
            <img src={dropCard} alt="a card" className="image dropCard"/>
            <img src={penCard} alt="a card" className="image penCard"/>

                {/* Right side of the 404-page */}
            {/* <img src={colorChangeCard} alt="a card" className="image colorChangeCard2"/> */}
            <img src={temperatureCard} alt="a card" className="image temperatureCard"/>
            <img src={umbrellaCard} alt="a card" className="image umbrellaCard"/>
            <img src={vibrateCard} alt="a card" className="image vibrateCard"/>
            <img src={motionCard} alt="a card" className="image motionCard2"/>
            <img src={dropCard} alt="a card" className="image dropCard2"/>
            </div>

            <div className="middleContainer">
                <p>It seems like you are a bit lost. 
                    Let me help you find your way back! </p>
            </div>

            <div className="bottomContainer">
            <div className="cardsButton"> 
             <LinkButton title="Back to the cards" target="/cards" size="wider Large"></LinkButton>
            </div>
            <div className="mainPageButton"> 
              <LinkButton title="Main page" target="/" size="wider Large"></LinkButton>
            </div>
            </div>
        </div>

    );
}

export default NotFoundPage;