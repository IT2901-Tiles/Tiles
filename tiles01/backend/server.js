// To run with https set to true
const useHttps = false;

const httpPort = 8484; // http server will listen on this port
const httpsPort = 443; // if useHttps is true, the https server will listen on this port

require("dotenv").config()
const database = require("./database.js");

var express = require("express"); 
var path = require("path");
var app = express();
var https = require("https");
var http = require("http");
var fs = require("fs"); // standard node package for file processing 

const db = process.env.DB_URL

// Redirect any http request to https. Only if useHttps is set, otherwise there is nothing listening
app.use(function (req, res, next) {
    if (!useHttps) {
        next();
    }
    else {
        if (req.secure) {
            // request was via https, so do no special handling
            next();
        } else {
            // request was via http, so redirect to https
            res.redirect("https://" + req.headers.host + req.url);
        }
    }
});

app.use(express.static(path.join(__dirname, "/../frontend/build"))); // Find static files, like icons etc. from tiles01/frontend/build
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Input request handling using json, read more: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded


// Used to receive post request to add idea to database
app.post("/add_idea", (req, res) => {
    let data = req.body
    database.writeIdeaDB(db,data.trigger, data.thing, data.feedback, data.idea)
})

// Used to receive and repond with latest idea added to database
app.get("/read_idea", (req, res) => {
    let data = req.body
    const idea=database.readIdeaDB(db).then(result=>{
        res.send(JSON.stringify(result))
    })
    
})

// End of server actions, send all other requests ("/*"") to frontend. 
// Routing is done by React, see the file tiles01\frontend\src\App.js for details
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../frontend/build", "index.html"));
});


// The rest of the code is for starting the server(s)
// Starting http server (this always starts, also when useHttps is true)
console.log("Starting server ...");
console.log("http://localhost:" + httpPort)
var httpServer = http.createServer(app);  // The server will only listen at its given port, redirecting the processing to "app" (hence "app" as a parameter)
httpServer.listen(httpPort); 

// If useHttps is set, start secure server. We will then have two severs communicating with "app", defined in the top, 
// listening at different ports. Using https requires a valid certificate
if (useHttps) {
        console.log("Starting secure server ...");
        console.log("https://localhost:" + httpsPort)
	
    // Certificate
	const privateKey = fs.readFileSync("privkey.pem", "utf8");
	const certificate = fs.readFileSync("cert.pem", "utf8");
	const ca = fs.readFileSync("fullchain.pem", "utf8");

	const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
	};


    var httpsServer = https.createServer(credentials, app);
	httpsServer.listen(httpsPort);
 }
