import React from 'react';
import { Link } from "react-router-dom";

function ChosenCardsPage() {
    return (
        <div className="Page">
            <p>ChosenCardsPage</p>
            <Link
                to={{
                    pathname: "/categories",
                    state: { category: "Trigger"}
                }}>
                <p>Trigger</p></Link>
            <Link
                to={{
                    pathname: "/categories",
                    state: { category: "Things" }
                }}>
                <p>Things</p></Link>
            <Link
                to={{
                    pathname: "/categories",
                    state: { category: "Feedback" }
                }}>
                <p>Feedback</p></Link>
            <Link to="/animation"><p>Animation</p></Link>
            <Link to="/"><p>Main</p></Link>
        </div>
    );
}

export default ChosenCardsPage;