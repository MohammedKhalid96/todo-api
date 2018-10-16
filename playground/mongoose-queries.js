const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5bc5ef3f7d03553470dff1f5';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.findById(id).then((todo) => {
    if (!todo) {
       return console.log("ID not found");
    }
    console.log('Todo by id', JSON.stringify(todo, undefined, 2));
}).catch((e) => console.log(e));