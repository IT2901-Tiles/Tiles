import React from 'react';
//Component imports
import Logo from "../Components/Logo";
import LinkButton from '../Components/LinkButton';
import CharNormal from "../Components/CharNormal";
//img imports
import img1 from "./../images/img1.png"
import img2 from "./../images/img2.png"

function MainPage() {

    return (
        <div className="Page mainPage" id="mainPage">
            <Logo/>
            <img className="img2" src={img2} alt="stack of cards2"/>
            <div className="infoBox">
                <p>Welcome to the Tiles Internet of Things Invention! <br/>
                Let’s create some smart creations! </p>
            </div>
            <LinkButton title="Let's begin!" target="/cards" size="Large"></LinkButton>
            <img class="mainPage img1" src={img1} alt="stack of cards"/>
            <div className="charNormalWrapper">
                <CharNormal />
            </div>
        </div>
    );
}

export default MainPage;