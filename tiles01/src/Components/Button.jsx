import React from 'react';
import { Link } from 'react-router-dom';

function Button() {
    return (
        <Link to="/"><div className="Button">
            <p>MAIN</p>


        </div></Link>
    );
}

export default Button;