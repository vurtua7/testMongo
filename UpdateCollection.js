//Update collection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (e,db) =>
{
    if(e) throw e;
    
    var dbObj = db.db("mydb");
    var queryData = {genre: "Not Overwatch"};
    var newData = {genre: "Def Not Overwatch"};
    var update = {$set:newData};

    dbObj.collection("games").updateOne(queryData, update, (e,res) =>
    {
        if(e)throw e;
        console.log("doc updated");
        db.close();
    });
    
})