import React from 'react';
import { Link } from "react-router-dom";
//import './App.css'; 
//Component imports
import Logo from "../Components/Logo";

function MainPage() {
    return (
        <div className="Page mainPage">
            <Logo/>
            <div className="infoBox">
            <p>Welcome to the Tiles Internet of Things Invention! <br/>
            Let’s create some smart creations! </p>
            </div>
            <div className="Button">
            <Link to="/cards">
            <p>Let's begin!</p>
            </Link>
            </div>

        </div>
    );
}

export default MainPage;