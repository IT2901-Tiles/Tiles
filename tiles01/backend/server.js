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
app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/add_idea", (req, res) => {
    console.log(req.body)
    let data = req.body
    console.log(db)
    database.writeIdeaDB(db,data.trigger, data.thing, data.feedback, data.idea)
})

app.get('/*', function (req, res) {
    console.log("Serving index ");
    res.sendFile(path.join(__dirname, '/../frontend/build', 'index.html'));
});

app.listen(process.env.PORT || 8484);

// End of server stuff

