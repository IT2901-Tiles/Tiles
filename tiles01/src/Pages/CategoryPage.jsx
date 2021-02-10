//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React from 'react';
import { Link } from "react-router-dom";
import CardContainer from './../Components/CardContainer'



function CategoryPage(props) {
    console.log({props},"categorypage")
    return (
        <div className="Page">
            <p>CategoryPage</p>
            <p>{props.location.state.category}</p>
            
            <CardContainer category={props.location.state.category}/>
            <Link to="/cards"><p>Cards</p></Link>
        </div>
    );
}

export default CategoryPage;