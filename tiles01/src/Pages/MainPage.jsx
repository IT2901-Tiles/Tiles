import React from 'react';
import { Link } from "react-router-dom";
//import './App.css'; 
//Component imports
import Logo from "../Components/Logo";
import motionCard from "../img/triggers/motion.png"
import colorChangeCard from "../img/feedback/colorChange.png"
import bikeCard from "../img/things/bike.png"
import dropCard from "../img/triggers/drop.png"


function MainPage() {

    return (
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
            <div className="Button">
            <Link to="/cards">
            <p>Let's begin!</p>
            </Link>
            </div>
            <div>
                <img className="motionCard"  alt="The motion card" src={motionCard} />
                <img className="colorChangeCard" alt="ColorChangeCard" src={colorChangeCard}/>
                <img className="bikeCard" alt="Bike card" src={bikeCard} />
            </div>

        </div>
    );
}

export default MainPage;