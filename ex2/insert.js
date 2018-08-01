var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mymusic");
  var myobj = [
    {SongName:"Thaniye Thananthaniye",Film:"Rhythm",MusicDirector:"A.R.Rahman", Singer:"Shankar mahadevan"},
 {SongName:"Evano Oruvan",Film:"Alai Payuthey",MusicDirector:"A.R.Rahman", Singer:"Swarnalatha"},
 {SongName:"Roja Poonthoddam",Film:"Kannukkul Nilavu",MusicDirector:"Illayaraaja",Singer:"Unnikrishnan,Anuradha"},
 {SongName:"Vennilave Vennilave Vinaithaandi",Film:"Minsaara Kanavu", MusicDirector:"A.R.Rahman",Singer:"Hariharan,Sadhana Sargam"},
 {SongName:"Sollamal Thoddu Chellum", Film:"Dheena", MusicDirector:"Yuven Shankar Raja",Singer:"Hariharan"}
  ];
  dbo.collection("mysongdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
