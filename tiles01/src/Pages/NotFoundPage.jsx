import React from 'react';
import LinkButton from '../Components/LinkButton';

function NotFoundPage() {
    return (
        <div className="Page">
            <h1>This page does not exist</h1>
            <LinkButton title="Main page" target="/" size="Large"></LinkButton>
            <LinkButton title="Selected cards" target="/cards" size="Large"></LinkButton>
        </div>
    );
}

export default NotFoundPage;