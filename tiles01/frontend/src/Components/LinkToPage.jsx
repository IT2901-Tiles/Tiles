import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Component for link on images in ChosenCardsPage.jsx

function LinkToPage(props) {
    const [path] = useState(props.target)
    const [category] = useState(props.category)
    const [nameOfCategory] = useState(props.nameOfCategory) // name of card, e.g. trigger, thing, feedback
    const [classNameCard] = useState(props.classNameCard) // classname of the card

    let colour = "#F08A00";

    if (category === "things") {
        colour = "#D64539"
    } else if (category === "feedback") {
        colour = "#FFCD00"
    } else if (category === "animation") {
        colour = "#84AD64"
    }

    return (
        <Link
            to={{
                pathname: path,
                state: { category: category, color: colour, card: props.card }
            }}>
            <img src={nameOfCategory} className={classNameCard} />
        </Link>
    );
}

export default LinkToPage
