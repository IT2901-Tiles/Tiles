import React from 'react';
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div className="Page">
            <p>MainPage</p>
            <Link to="/cards"><p className="Logo">Cards</p></Link>
        </div>
    );
}

export default MainPage;