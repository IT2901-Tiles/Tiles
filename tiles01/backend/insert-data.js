const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        

                      
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
             "cards": { "trigger": "As", "thing": "ADS","feedback":5 },
             "idea": 2                                                                                                                              
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
writeIdeaDB().catch(console.dir);