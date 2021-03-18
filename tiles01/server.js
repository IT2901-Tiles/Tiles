// To start server, open a terminal and run
// cd tiles01
// npm run build && node server.js

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const { MongoClient } = require("mongodb");
console.log("Starting server ...");
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.post("/add_idea",(req,res)=>{
    console.log(req.body)
    let data=req.body
    writeIdeaDB(data.trigger,data.thing,data.feedback,data.idea)
})





async function writeIdeaDB(triggerCard,thingCard,feedbackCard,idea) {                                                                                                                                     
    
    console.log("wrote")
    const url = "mongodb+srv://Tiles:CoolCoolCool@tilescluster.87fob.mongodb.net/tilesCards?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    console.lo
    // The database to use
    const dbName = "tilesCards";
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         const ideas = db.collection("ideas");                                                                                                                                             
         let ideaDocument = {
             "cards": { "trigger": triggerCard, "thing": thingCard,"feedback":feedbackCard },
             "idea": idea                                                                                                                               
         }
         console.log(ideaDocument)
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






app.get('/', function (req, res) {
    console.log("Serving index ");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8484);