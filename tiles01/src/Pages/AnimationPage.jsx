import React from 'react';
import AnimationsPreview from "../Components/AnimationsPreview"
import "../CSS/AnimationPage.css"
import { Link } from 'react-router-dom';
import TopContainer from '../Components/TopContainer'
import Animation from '../Components/Animation';




function AnimationPage() {
    return (

        <div className="Page AnimationPage">
            <div className="Page">
                <TopContainer
                    text="Wow! Look at the amazing creation you have created! If you would like to try again you can touch the Try again! button!"
                />
                <AnimationsPreview />

            </div>
        </div>
    );
}

export default AnimationPage;