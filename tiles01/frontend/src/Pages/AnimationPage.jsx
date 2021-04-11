import React from 'react';
import AnimationsPreview from "../Components/AnimationsPreview"
import "../CSS/AnimationPage.css"
import TopContainer from '../Components/TopContainer'
import CharHappy from "../Components/CharHappy"




function AnimationPage() {
    return (

        <div className="Page AnimationPage">
            <div className="Page">
                <TopContainer
                    text='Wow! Look at the amazing creation you have created! If you would like to try again you can click the "Try again!" button!'
                />
                <div id="charHappyWrapper">
                    <CharHappy />
                </div>
                <AnimationsPreview />

            </div>
        </div>
    );
}

export default AnimationPage;