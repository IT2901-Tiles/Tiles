import React from 'react';
//Component imports
import Logo from "../Components/Logo";
import LinkButton from '../Components/LinkButton';
//img imports
/*import motionCard from "./../images/triggers/motion.png"
import colorChangeCard from "./../images/feedbacks/color_change.png"
import bikeCard from "./../images/things/bike.png"
import dropCard from "./../images/triggers/drop.png"*/
import stylingImg1 from "./../images/mainPageStyling1.png"
import stylingImg2 from "./../images/mainPageStyling2.png"
import img1 from "./../images/img1.png"
import img2 from "./../images/img2.png"

function MainPage() {

    return (
        <div className="Page mainPage">
            <Logo/>
            <img className="img2" src={img2} alt="stack of cards2"/>
            <div className="infoBox">
                <p>Welcome to the Tiles Internet of Things Invention! <br/>
                Let’s create some smart creations! </p>
            </div>
            <LinkButton title="Let's begin!" target="/cards" size="Large"></LinkButton>
            <div>
            </div>
            <img class="mainPage img1" src={img1} alt="stack of cards"/>
        </div>
    );
}

export default MainPage;