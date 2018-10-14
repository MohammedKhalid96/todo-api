var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // for white spaces
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: Date.now
    }
});

var Todo =  mongoose.model('Todo', schema);

module.exports = {Todo};