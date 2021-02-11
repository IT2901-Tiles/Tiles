import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../Components/LinkButton'

function AnimationPage() {
    return (
        <div className="Page">
            <p>AnimationPage</p>
            <LinkButton title="Try again!" target="/" size="Large" category="animation"></LinkButton>
            <p>Test</p>
        </div>
    );
}

export default AnimationPage;