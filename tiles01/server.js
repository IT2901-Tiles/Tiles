// To start server, open a terminal and run
// cd tiles01
// npm run build && node server.js

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

console.log("Starting server ...");
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    console.log("Serving index ");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8484);