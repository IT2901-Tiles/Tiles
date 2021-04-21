// To start server, open a terminal and run
// cd tiles01
// npm run build && node server.js
require('dotenv').config()
const database = require("./database.js");
var express = require('express');
var path = require('path');
var app = express();

const db = process.env.DB_URL

console.log("Starting server ...");
console.log("http://localhost:8484/")
app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//used to add idea to database
app.post("/add_idea", (req, res) => {
    let data = req.body
    database.writeIdeaDB(db,data.trigger, data.thing, data.feedback, data.idea)
})
//used to fetch idea from the database
app.get("/read_idea", (req, res) => {
    let data = req.body
    const idea=database.readIdeaDB(db).then(result=>{

        res.send(JSON.stringify(result))
    })
    
})

app.get('/*', function (req, res) {
    console.log("Serving index ");
    res.sendFile(path.join(__dirname, '/../frontend/build', 'index.html'));
});

app.listen(process.env.PORT || 8484);

// End of server stuff

