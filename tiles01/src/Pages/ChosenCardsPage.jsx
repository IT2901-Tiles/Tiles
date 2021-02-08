import React from 'react';
import { Link } from "react-router-dom";

function ChosenCardsPage() {
    return (
        <div className="Page">
            <p>ChosenCardsPage</p>
            <Link to="/categories"><p className="Logo">Categories</p></Link>
            <Link to="/animation"><p className="Logo">Animation</p></Link>
            <Link to="/"><p className="Logo">Main</p></Link>
        </div>
    );
}

export default ChosenCardsPage;