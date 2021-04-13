import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Button.css';
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
    const [title] = useState(props.title)
    var [path] = useState(props.target)
    const [category] = useState(props.category)
    const [size] = useState(props.size + "Button")
    const [active,setActive] = useState(props.active);
    let colour = "#F08A00";
    let fontColour = "#F3EAC2";


    if (category === "things") {
        colour = "#D64539"
    } else if (category === "feedback") {
        colour = "#FFCD00"
        fontColour = "#484848"
    } else if (category === "animation") {
        colour = "#84AD64"
    }

    if( props.disabled === true){
        return <Button style={{ backgroundColor: colour, color: fontColour }} disabled={true} className={size} variant="primary"  >{title}</Button>
    }
    

    
    
    
    return (
        <Link
        to={{
            pathname: path,
            state: { category: category, color: colour, card: props.card }
            // state: { category: category, color:colour }
        }} >
            <Button style={{ backgroundColor: colour, color: fontColour }} className={size} variant="primary" onClick={props.onClick} >{title}</Button>
        </Link>
    );
}




export default LinkButton;
