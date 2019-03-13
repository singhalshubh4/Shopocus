const mongoose = require('mongoose');

var singup_schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'This field is required.'
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    mobile_number: {
        type: String
    },
    password: {
        type: String
    }
});


mongoose.model('Signup', singup_schema);