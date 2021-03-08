import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Component for link on images in ChosenCardsPage.jsx

function LinkToPage(props) {
    const [path] = useState(props.target)
    const [category] = useState(props.category)
    const [nameOfCardType] = useState(props.nameOfCardType) // name of card, e.g. trigger, thing, feedback
    const [classNameCard] = useState(props.classNameCard) // classname of the card


    return (
        <Link
            to={{
                pathname: path,
                state: { category: category, card:props.card}
            }}>
            <img src={nameOfCardType} className={classNameCard} />
        </Link>
    );
}

export default LinkToPage
