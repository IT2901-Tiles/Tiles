import React, { useState } from 'react'
const { MongoClient } = require("mongodb");

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
    console.log("databasE?")
    writeIdeaDB("yes","no","what","very nice")
    // Will fix the position when the animations are ready
    return (
        <div className="textAreaAnimationPage">
            <textarea id="textBoxAnimationPage" placeholder="Write your idea here..." onChange={newInput => setInput(newInput.target.value)}/>
                <button onClick={downloadFile} className="textButtonAnimationPage">Save</button>
        </div>
    );
}




 

                      
 async function writeIdeaDB(triggerCard,thingCard,feedbackCard,idea) {                                                                                                                                     
    const url = "mongodb+srv://Tiles:CoolCoolCool@tilescluster.87fob.mongodb.net/tilesCards?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    
    // The database to use
    const dbName = "tilesCards";
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         const ideas = db.collection("ideas");
        db.createCollection("Ass")                                                                                                                                             
         let ideaDocument = {
             "cards": { "trigger": triggerCard, "thing": thingCard,"feedback":feedbackCard },
             "idea": idea                                                                                                                               
         }
         // Insert a single document, wait for promise so we can read it back
         const p = await ideas.insertOne(ideaDocument);
         // Find one document
         const myDoc = await ideas.findOne();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}


export default FormFieldAnimationPage