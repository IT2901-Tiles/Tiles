
const { MongoClient } = require("mongodb");

//used to add an idea to the database
//db_url is the url to the database
//Card arguments are the cards selected in the different categories
async function writeIdeaDB(db_url,triggerCard, thingCard, feedbackCard, idea) {

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
        const p = await ideas.insertOne(ideaDocument);
    }

    catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

function resolvePromise(promise){
    return promise
}

//used to fetch the latest idea added to the database
async function readIdeaDB(url) {
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
        return myDoc
    }
    catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

module.exports={readIdeaDB,writeIdeaDB}