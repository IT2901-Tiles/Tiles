import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../Components/LinkButton'
import AnimationsPreview from "../Components/AnimationsPreview"
import "../AnimationPage.css" 

function AnimationPage() {
    return (
        <div className="Page">
            <p>
                AnimationPage
            </p>
                <AnimationsPreview />
        </div>
    );
}

export default AnimationPage;