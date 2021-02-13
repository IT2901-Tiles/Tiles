import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
import Button from 'react-bootstrap/Button';

//Button component 
//props:
//title: the title on the button
//target: tha page the button is going to direct to
//size: aize of the button, must be Large or Small
//category: which category the button us linking to, optional
//category will also change the colour of the button
//options for categoryare: trigger, thing, feedback, animation

function LinkButton(props) {
    const [title, setTitle] = useState(props.title)
    const [path, setPath] = useState(props.target)
    const [category, setCategory] = useState(props.category)
    const [size, setSize] = useState(props.size + "Button")

    let colour = "#F08A00"
    let fontColour = "#F3EAC2"

    if (category === "thing") {
        colour = "#D64539"
    } else if (category === "feedback") {
        colour = "#FFCD00"
        fontColour = "#484848"
    } else if (category === "animation") {
        colour = "#84AD64"
    }

    return (
        <Link
            to={{
                pathname: path,
                state: { category: category, card:props.card }
            }}>
            <Button style={{ backgroundColor: colour, color: fontColour }} className={size} variant="primary">{title}</Button>
        </Link>
    );
}

export default LinkButton;
