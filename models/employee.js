const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Employee', employeeSchema);