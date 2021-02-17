import React, { useState } from 'react'


function FormFieldAnimationPage() {
    const [input, setInput] = useState('')
    let boolInput

    // The following function gathers the content from the textarea and inserts it into a external txt-file
    function downloadFile() {
        if (input === ''){
            boolInput = false;
            alert("Type something to save the file...")
        } else {
            boolInput = true;
            const htmlElement = document.createElement("a")
            const valueInput = new Blob([document.getElementById("textBoxAnimationPage").value], {type: 'text/plain'})
            htmlElement.href = URL.createObjectURL(valueInput)
            htmlElement.download = "tiles.txt"
            document.body.appendChild(htmlElement)
            htmlElement.click()
        }
    }

    return (
        <div className="textAreaAnimationPage">
            <label>Your idea: </label>
                <br/>
                <textarea id="textBoxAnimationPage" onChange={newInput => setInput(newInput.target.value)}/>
                <button onClick={downloadFile} className="textButtonAnimationPage">Save</button>
        </div>
    );
}

export default FormFieldAnimationPage