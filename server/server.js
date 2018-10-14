var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// var newTodo = new Todo({
//     text: 'Walk the dog'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 2))
// }, (e) => {
//     console.log('Unable to save todo', e)
// });
const port = process.env.PORT || 3000; // for heroku
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });   

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e); 
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = {app};