//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React from 'react';
import { Link } from "react-router-dom";
import LinkButton from '../Components/LinkButton';

function CategoryPage(props) {
    return (
        <div className="Page">
            <p>CategoryPage</p>
            <p>{props.location.state.category}</p>
            <LinkButton target="/cards" title="Choose" size="Small" category={props.location.state.category}></LinkButton>
        </div>
    );
}

export default CategoryPage;