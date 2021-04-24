// To run with https set to to true
const useHttps = false;

const httpPort = 8484;
const httpsPort = 443;

require('dotenv').config()
const database = require("./database.js");

var express = require('express');
var path = require('path');
var app = express();
var https = require('https');
var http = require('http');
var fs = require('fs');

const db = process.env.DB_URL

// Redirect any http request to https. Only if useHttps is set, otherwise there's nothing listening.
app.use (function (req, res, next) {
    if ( ! useHttps ) {
	next();
    }
    else {
	if (req.secure) {
                // request was via https, so do no special handling
                next();
        } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
        }
    }
});


app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/add_idea", (req, res) => {
    let data = req.body
    database.writeIdeaDB(db,data.trigger, data.thing, data.feedback, data.idea)
})
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

// Starting http server
console.log("Starting server ...");
console.log("http://localhost:" + httpPort)
var httpServer = http.createServer(app);
httpServer.listen(httpPort); 

// If useHttps is set, start secure server. Requires certificate
if ( useHttps) {

        console.log("Starting secure server ...");
        console.log("https://localhost:" + httpsPort)
	// Certificate
	const privateKey = fs.readFileSync('privkey.pem', 'utf8');
	const certificate = fs.readFileSync('cert.pem', 'utf8');
	const ca = fs.readFileSync('fullchain.pem', 'utf8');

	const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
	};


    var httpsServer = https.createServer(credentials, app);
	httpsServer.listen(httpsPort);
 }

//app.listen(process.env.PORT || 80);

// End of server stuff