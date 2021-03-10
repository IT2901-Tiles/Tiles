import React, { useState } from 'react'


function FormFieldAnimationPage(props) {
    const [input, setInput] = useState('')
    const [triggerCard] = useState(props.triggerCard) // props to pass to AnimationsPreview.jsx
    const [thingCard] = useState(props.thingCard) // props to pass to AnimationsPreview.jsx
    const [feedbackCard] = useState(props.feedbackCard) // props to pass to AnimationsPreview.jsx
    let outputStandardText = `Cards chosen:\n- Trigger: ${triggerCard}\n- Thing: ${thingCard}\n- Feedback: ${feedbackCard}\n\nYour idea:\n- ` // passed as first parameter in the downloadFile Blob

    // The following function gathers the content from the textarea and inserts it into a external txt-file
    function downloadFile() {
        let userInputValue // will change depending on the user writes something or not 
        if (document.getElementById("textBoxAnimationPage").value === "") { // if user does not write anything in the textarea
            userInputValue = "Oops! Looks like no brilliant ideas were written down..." 
        } else { // if the user writes something in the textare
            userInputValue = document.getElementById("textBoxAnimationPage").value
        }
        const htmlElement = document.createElement("a") // creates an "a" element in the html page, where we'll "store" the value of the user input
        const valueInput = new Blob([outputStandardText + userInputValue], {type: 'text/plain'}) // value of txt file must be passed in the first parameter of Blob
        htmlElement.href = URL.createObjectURL(valueInput)
        htmlElement.download = "tiles.txt"
        document.body.appendChild(htmlElement)
        htmlElement.click()
    }

    // Will fix the position when the animations are ready
    return (
        <div className="textAreaAnimationPage">
            <textarea id="textBoxAnimationPage" placeholder="Write your idea here..." onChange={newInput => setInput(newInput.target.value)}/>
                <button onClick={downloadFile} className="textButtonAnimationPage">Save</button>
        </div>
    );
}

export default FormFieldAnimationPage