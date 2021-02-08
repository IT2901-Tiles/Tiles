//tenker at det blir sendt med en prop hit om hvilke kategori det gjelder,
//men hvis personen som lager denne siden er uenig i det er det bare å si ifra

import React from 'react';
import { Link } from "react-router-dom";


function CategoryPage() {
    return (
        <div className="Page">
            <p>CategoryPage</p>
            <Link to="/cards"><p className="Logo">Cards</p></Link>
        </div>
    );
}

export default CategoryPage;