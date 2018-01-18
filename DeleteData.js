//delete data entries from database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");
    var queryEntry = {game: /^R/};

    dbObj.collection("games").deleteMany(queryEntry, (e,res) =>
    {
        if(e)throw e;
        console.log(res.result.n + " docs deleted");
        db.close();
    });
    
})