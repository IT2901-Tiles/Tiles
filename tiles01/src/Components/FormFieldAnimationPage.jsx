import React, { useState } from 'react'


function FormFieldAnimationPage(props) {
    const [input, setInput] = useState('')
    const [triggerCard] = useState(props.triggerCard) // props to pass to AnimationsPreview.jsx
    const [thingCard] = useState(props.thingCard) // props to pass to AnimationsPreview.jsx
    const [feedbackCard] = useState(props.feedbackCard) // props to pass to AnimationsPreview.jsx
    let outputStandardText = `Cards chosen:\nTrigger: ${triggerCard}\nThing: ${thingCard}\nFeedback: ${feedbackCard}\n\nYour idea:\n` // passed as first parameter in the downloadFile Blob

    // The following function gathers the content from the textarea and inserts it into a external txt-file
    function downloadFile() {
        const htmlElement = document.createElement("a") // creates an "a" element in the html page, where we'll "store" the value of the user input
        const valueInput = new Blob([outputStandardText + document.getElementById("textBoxAnimationPage").value], {type: 'text/plain'}) // value of txt file must be passed in the first parameter of Blob
        htmlElement.href = URL.createObjectURL(valueInput)
        htmlElement.download = "tiles.txt"
        document.body.appendChild(htmlElement)
        htmlElement.click()
    }

    // Will fix the position when the animations are ready
    return (
        <div className="textAreaAnimationPage">
            <label>Your idea:
                <br/>
                <textarea id="textBoxAnimationPage" onChange={newInput => setInput(newInput.target.value)}/>
                <br/>
                <button onClick={downloadFile} className="textButtonAnimationPage">Save</button>
                </label>
        </div>
    );
}

export default FormFieldAnimationPage