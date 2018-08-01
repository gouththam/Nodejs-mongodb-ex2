var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";

 MongoClient.connect(url, function(err, db) {
 if(err) throw err;
   var dbo = db.db("mymusic");
   dbo.collection("mysongdetails").findOne({"Film":"Minsara Kanavu", "Singer":"Hariharan"}, function(err, res){
     if(err) throw err;
     console.log(res);
     db.close();
   });
  });
