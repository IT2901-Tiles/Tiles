//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React from 'react';
import { Link } from "react-router-dom";
import TopContainer from '../Components/TopContainer';


function CategoryPage(props) {
    return (
        <div className="Page">
        <TopContainer
            text = "some text that will be shown in the instruction box"
        />
            <p>CategoryPage</p>
            <p>{props.location.state.category}</p>
            <Link to="/cards"><p>Cards</p></Link>
        </div>
    );
}

export default CategoryPage;