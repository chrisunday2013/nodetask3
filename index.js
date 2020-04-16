const MongoClient = require("mongodb").MongoClient;
const assert = require ("assert");
const insertDocuments = require("./interns")
const findDocuments = require("./findInterns")


const url = "mongodb://localhost:27017";

const dbName = "chrisunday2013db";

const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true});


client.connect(function (err) {
assert.equal(null, err);
console.log("connected successfully to server");

const db = client.db(dbName);

insertDocuments(db, function() {
findDocuments(db, function() {

    client.close();

  })
  
})
})
