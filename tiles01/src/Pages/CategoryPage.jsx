//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React, {useState} from 'react';
import { Link } from "react-router-dom";
import TopContainer from '../Components/TopContainer';
import "../CardContainer.css";

function CategoryPage(props) {
    const [category] = useState(props.location.state.category)
    var styling = {color : "#68C2C4"}
    if(category === "Things"){
        styling.color = "#D64539";
    }else if(category === "Feedback"){
        styling.color = "#F7CA14";
        styling.fontSize = "1.5rem";
    }    
        
    return (
        <div className="Page">
        <TopContainer
            text = "some text that will be shown in the instruction box"
        />
            <div className="CardContainer">
                    <div className="CardContainerTitle" style={styling}>{category}</div>
                <p>CategoryPage</p>
                <p>{props.location.state.category}</p>
                <Link to="/cards"><p>Cards</p></Link>
            </div>
        </div>
    );
}

export default CategoryPage;