// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: true
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); 
    });

//     db.collection('Users').insertOne({
//         name: 'Mohammed-khalid',
//         age: 22,
//         location: 'Cairo'
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2)); 
//     });

    client.close();
});