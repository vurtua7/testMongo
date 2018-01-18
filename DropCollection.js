//Drop Collection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");

    dbObj.dropCollection("games", (e,delOK) =>
    {
        if(e)throw e;
        (delOK) ? console.log("collection deleted"): console.log("there was an error");
        db.close();
    });
    
})