/* 
Auther : MOHAMED ELSHAHAT 
YEAR : 2020 
this how to use mongodb native to connct to app .js
LINK : https://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/ 
Cnclusion :: using native mongodb by this way will waist your time as a developer 
 */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitdb';

// Use connect method to connect to the data in mongodp
MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  findDocuments(db, function() {
    client.close();
  });
});
/* insert a collection using mongo driver  */
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
     {
         name:"apple",
         score:8,
         review:"great fruit"
     } ,
     {
        name:"orange",
        score:5,
        review:"kinda sour"
    } , 
    {
        name:"banana",
        score:9,
        review:"great fruit "
    } 
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }
  /* this code will print the fruits inside your console 
  and then you can deal with the data as you want  */
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }