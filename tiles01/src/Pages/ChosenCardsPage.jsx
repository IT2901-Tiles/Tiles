import React from 'react';
import { Link } from "react-router-dom";

function ChosenCardsPage() {
    return (
        <div className="Page">
            <p>ChosenCardsPage</p>
            <Link
                to={{
                    pathname: "/categories",
                    state: { category: "Trigger" }
                }}>
                <p className="Logo">Trigger</p></Link>
            <Link
                to={{
                    pathname: "/categories",
                    state: { category: "Things" }
                }}>
                <p className="Logo">Things</p></Link>
            <Link
                to={{
                    pathname: "/categories",
                    state: { category: "Feedback" }
                }}>
                <p className="Logo">Feedback</p></Link>
            <Link to="/animation"><p className="Logo">Animation</p></Link>
            <Link to="/"><p className="Logo">Main</p></Link>
        </div>
    );
}

export default ChosenCardsPage;