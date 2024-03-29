import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Button.css'
import Button from 'react-bootstrap/Button'

//Button component that redirect to different page
//props:
//title: the title on the button
//target: the page the button is going to direct to
//size: aize of the button, must be Large or Small
//category: which category the button us linking to, optional
//category will also change the colour of the button
//options for category are: trigger, thing, feedback, animation

function LinkButton(props) {
    const [title] = useState(props.title)
    const [path] = useState(props.target)
    const [category] = useState(props.category)
    const [size] = useState(props.size + "Button")
    let colour = "#F08A00"
    let fontColour = "#F3EAC2"

    //change the colour of the button based on the category or page the button is connected to(sent with props)
    if (category === "things") {
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
            state: { category: category, color: colour, card: props.card }
        }} disabled={props.disabled}>
            <Button style={{ backgroundColor: colour, color: fontColour }} className={size} variant="primary" onClick={props.onClick} disabled={props.disabled}>{title}</Button>
        </Link>
    )
}

export default LinkButton
