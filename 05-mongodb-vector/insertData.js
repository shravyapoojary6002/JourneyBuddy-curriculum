// load our secret connection string from .env file
require("dotenv").config();

// import the mongodb tool
const { MongoClient } = require("mongodb");

// get the connection string
var uri = process.env.MONGO_URI;

// create a connection
var client = new MongoClient(uri);

// this function connects and adds one document
function run() {
  client.connect()
    .then(function () {
      console.log("Connected to MongoDB!");

      // pick database and collection 
      var db = client.db("journeybuddy");
      var collection = db.collection("articles");

      // this is our document 
      var myDocument = {
        author: "Jane Doe",
        category: "tech",
        timestamp: new Date(),
        vector: [0.1, 0.2, 0.3, 0.4, 0.5], // just some numbers for now
      };

      // insert it into the database
      return collection.insertOne(myDocument);
    })
    .then(function (result) {
      console.log("Document inserted with id:", result.insertedId);
    })
    .catch(function (error) {
      console.log("Something went wrong:", error);
    })
    .finally(function () {
      client.close();
    });
}

run();