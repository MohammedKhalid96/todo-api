// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err) => {
    assert.equal(null, err); // for testing if the err = null 
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);

    db.collection('Todos').updateOne({text: 'Fuck u'}, { $set: {completed: false} }).then((result) => {
        console.log(result);
    });
});

