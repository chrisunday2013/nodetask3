First document in the collection

const assert = require("assert");

const findDocuments = function (db, callback) {

  const collection = db.collection("myMovies");

  collection.findOne({}).toArray(function (err, docs) {
      assert.equal(err, null);

      console.log("Found the following records");

      console.log(docs)
      callback(docs);

    })
};

module.exports = findDocuments;




Projection for names of movies only



const assert = require("assert");

const findDocuments = function (db, callback) {

  const collection = db.collection("myMovies");

  collection.find({}, {projection:{_id:0, movie:1 }})(function (err, docs) {
    assert.equal(err, null);

    console.log("Found the following records");

    console.log(docs)
    callback(docs);

  })
};

module.exports = findDocuments;



//to find first collections values


const assert = require("assert");

const findDocuments = function (db, callback) {

  const collection = db.collection("myMovies");

  collection.findOne({}).toArray(function (err, docs) {
    assert.equal(err, null);

    console.log("Found the following records");

    console.log(docs)
    callback(docs);

  })
};

module.exports = findDocuments



//All movies with the rating of 7


const assert = require("assert");

const findDocuments = function (db, callback) {

  const collection = db.collection("myMovies");

  collection.find({rate: 7}).toArray(function (err, docs) {
    assert.equal(err, null);

    console.log("Found the following records");

    console.log(docs)
    callback(docs);

  })
};

module.exports = findDocuments;

























const assert = require("assert");

const findDocuments = function (db, callback) {

  const collection = db.collection("myMovies");

  collection.find({}, { projection: { _id: 0, movie: 1 } })(function (err, docs) {
    assert.equal(err, null);

    console.log("Found the following records");

    console.log(docs)
    callback(docs);

  })
};

module.exports = findDocuments;




























