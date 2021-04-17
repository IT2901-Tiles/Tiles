
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
        const myDoc = await ideas.findOne({}, {sort:{$natural:-1}})
        // Print to the console
        console.log(myDoc,"get newest idea");

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


async function readIdeaDB() {
    const url = process.env.DB_URL;
    const client = new MongoClient(url,{ useUnifiedTopology: true });

    // The database to use
    const dbName = "tilesCards";
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Find one document
        const myDoc = await ideas.findOne({}, {sort:{$natural:-1}})
        // Print to the console
        console.log(myDoc);
        
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

module.exports={readIdeaDB,writeIdeaDB}