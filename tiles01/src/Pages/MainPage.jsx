import React from 'react';
import LinkButton from '../Components/LinkButton';

function MainPage() {
    return (
        <div className="Page">
            <p>MainPage</p>
            <LinkButton title="Let's begin!" target="/cards" size="Large"></LinkButton>
        </div>
    );
}

export default MainPage;