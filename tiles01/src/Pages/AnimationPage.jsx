import React from 'react';
import { Link } from 'react-router-dom';
import TopContainer from '../Components/TopContainer'
import LinkButton from '../Components/LinkButton'


function AnimationPage() {
    return (
        <div className="Page">
        <TopContainer
            text = "some text that will be shown in the instruction box"
        />
            <p>AnimationPage</p>
            <LinkButton title="Try again!" target="/" size="Large" category="animation"></LinkButton>
        </div>
    );
}

export default AnimationPage;