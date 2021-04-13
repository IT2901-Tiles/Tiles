import React from 'react';
//Component imports
import Logo from "../Components/Logo";
import LinkButton from '../Components/LinkButton';
import CharNormalMainPage from "../Components/CharNormalMainPage";
//img imports
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"

function MainPage() {

    return (
        <div className="Page mainPage">
            <Logo/>
            <img className="img2" src={img2} alt="stack of cards2"/>
            <div className="infoBox">
                <p>Welcome to the Tiles Internet of Things Invention! <br/>
                Pick one card from three different categories and create some smart creations.<br/>
                Click on the button below to start!</p>
            </div>
            <LinkButton title="Let's begin!" target="/cards" size="Large"></LinkButton>
            <img class="mainPage img1" src={img1} alt="stack of cards"/>
            <div id="charNormalMainWrapper">
                <CharNormalMainPage />
            </div>
        </div>
    );
}

export default MainPage;