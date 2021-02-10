import React from 'react';
import { Link } from 'react-router-dom';
import TopContainer from "../Components/TopContainer";

function AnimationPage() {
    return (
        <div className="Page">
        <TopContainer
            text = "some text that will be shown in the instruction box"
        />
            <p>AnimationPage</p>
            <Link to="/cards"><p>Back</p></Link>

        </div>
    );
}

export default AnimationPage;