import React from 'react';
import AnimationsPreview from "../Components/AnimationsPreview"
import "../AnimationPage.css"
import { Link } from 'react-router-dom';
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