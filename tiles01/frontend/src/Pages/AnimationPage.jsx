import React from 'react';
import AnimationsPreview from "../Components/AnimationsPreview"
import "../CSS/AnimationPage.css"
import TopContainer from '../Components/TopContainer'

function AnimationPage() {
    return (

        <div className="Page">
            <div className="Page">
                <TopContainer
                    text="some text that will be shown in the instruction box"
                />
                <AnimationsPreview />
            </div>
        </div>
    );
}

export default AnimationPage;