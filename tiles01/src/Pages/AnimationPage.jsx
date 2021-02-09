import React from 'react';
import { Link } from 'react-router-dom';
import Animation from '../Components/Animation';


function AnimationPage() {
    return (
        <div className="Page">
            <p>AnimationPage</p>
            <Animation></Animation>
            <Link to="/cards"><p>Back</p></Link>

        </div>
    );
}

export default AnimationPage;