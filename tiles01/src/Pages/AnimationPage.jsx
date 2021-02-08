import React from 'react';
import { Link } from 'react-router-dom';

function AnimationPage() {
    return (
        <div className="Page">
            <p>AnimationPage</p>
            <Link to="/cards"><p className="Logo">Back</p></Link>

        </div>
    );
}

export default AnimationPage;