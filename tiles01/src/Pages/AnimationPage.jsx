import React from 'react';
<<<<<<< HEAD
import AnimationsPreview from "../Components/AnimationsPreview"
import "../AnimationPage.css"
import { Link } from 'react-router-dom';
=======
>>>>>>> 2b3a82c75540b359e4275681a8ca7e2703e81f07
import TopContainer from '../Components/TopContainer'
import LinkButton from '../Components/LinkButton'


function AnimationPage() {
    return (
        <div className="Page">      
            <TopContainer
                text="some text that will be shown in the instruction box"
            />
            <AnimationsPreview /> 
        </div>
    );
}

export default AnimationPage;