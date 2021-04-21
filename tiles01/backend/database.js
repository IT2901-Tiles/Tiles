
const { MongoClient } = require("mongodb");

async function writeIdeaDB(db_url,triggerCard, thingCard, feedbackCard, idea, res) {

    const url = db_url;
    const client = new MongoClient(url,{ useUnifiedTopology: true });
    
    // The database to use
    const dbName = "tilesCards";
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        const ideas = db.collection("ideas");
        let ideaDocument = {
            "cards": { "trigger": triggerCard, "thing": thingCard, "feedback": feedbackCard },
            "idea": idea
        }
        console.log(ideaDocument);
        // Insert a single document, wait for promise so we can read it back
        const p = await ideas.insertOne(ideaDocument);
        // Find one document
        

        // res.send("Data successfully saved"); Should be added  
    }

    catch (err) {
        console.log(err.stack);
        // res.send("----- ERROR: " + err.stack); Should be added
    }

    finally {
        await client.close();
    }
}
function resolvePromise(promise){
    return promise
}

async function readIdeaDB(url) {
    console.log(url)
    const client = new MongoClient(url,{ useUnifiedTopology: true });
    // The database to use
    const dbName = "tilesCards";
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const ideas = db.collection("ideas");
        // Find one document
        const myDocPromise = await ideas.findOne({}, {sort:{$natural:-1}})
        const myDoc = await resolvePromise(myDocPromise)
        // Print to the console
        console.log(myDoc);
        console.log("ADsd")
        return myDoc
        // res.send("Data successfully saved"); Should be added  
    }

    catch (err) {
        console.log(err.stack);
        return "jeeez"
        // res.send("----- ERROR: " + err.stack); Should be added
    }

    finally {
        await client.close();
    }
}

module.exports={readIdeaDB,writeIdeaDB}