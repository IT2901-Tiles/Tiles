import React from 'react';
import { Link } from "react-router-dom";
//COMPONENTS IMPORTS
import Logo from "../Components/Logo";
import TopContainer from '../Components/TopContainer';

function ChosenCardsPage() {
    return (
        <div className="Page">
        <TopContainer
            text = "Some text"
        />

            <p>ChosenCardsPage</p>
            <Link
                to={{
                    pathname: "/categories",
                    state: { category: "Trigger" }
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