import React from 'react';

import { Link } from "react-router-dom";
//import './App.css'; 
//Component imports
import Logo from "../Components/Logo";
import motionCard from "../img/triggers/motion.png"
import colorChangeCard from "../img/feedback/colorChange.png"
import bikeCard from "../img/things/bike.png"
import dropCard from "../img/triggers/drop.png"
import LinkButton from '../Components/LinkButton';

function MainPage() {

    return (
        <div>
        <div className="Page mainPage">
        <div>
            <img className="motionCardTop"  alt="The motion card" src={motionCard} />
            <img className="colorChangeCardTop" alt="ColorChangeCard" src={colorChangeCard}/>
            <img className="dropCardTop" alt="Drop card" src={dropCard} />
        </div>
            <Logo/>
            <div className="infoBox">
            <p>Welcome to the Tiles Internet of Things Invention! <br/>
            Let’s create some smart creations! </p>
            </div>
            
            <LinkButton target="/cards" title="Let's Begin" category="trigger" size="Large"></LinkButton>
            <div>
                <img className="motionCard"  alt="The motion card" src={motionCard} />
                <img className="colorChangeCard" alt="ColorChangeCard" src={colorChangeCard}/>
                <img className="bikeCard" alt="Bike card" src={bikeCard} />
            </div>


        </div>
        </div>
    );
}

export default MainPage;