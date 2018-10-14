var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
}); 

var User = mongoose.model('User', schema);

module.exports = {User};