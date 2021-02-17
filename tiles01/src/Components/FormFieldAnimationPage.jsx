import React, { useState } from 'react'


function FormFieldAnimationPage() {
    const [input, setInput] = useState('')

    // The following function gathers the content from the textarea and inserts it into a external txt-file
    function downloadFile() {
        if (input === ''){
            alert("No text found")
        } else {
            const htmlElement = document.createElement("a")
            const valueInput = new Blob([document.getElementById("textBoxAnimationPage").value], {type: 'text/plain'})
            htmlElement.href = URL.createObjectURL(valueInput)
            htmlElement.download = "tiles.txt"
            document.body.appendChild(htmlElement)
            htmlElement.click()
        }
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