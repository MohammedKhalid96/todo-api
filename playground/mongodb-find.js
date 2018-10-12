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

    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
//     db.collection('Todos').find().count().then((count) => {
//         console.log(`Todos count ${count}`);
//         // console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos', err);
//     });

//     client.close();
// });    
    client.close();
});

