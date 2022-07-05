// dependencies 
const mongoose = require('mongoose');

// set email to lowercase
function toLower (str) {
    return str.toLowerCase();
}

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 5,
        required: true,
        unique: true,
        trim: true
    },
    email: { 
        type: String,
        set: toLower, 
        unique: true,
        trim: true,
        required: true
    },
    password: { 
        type: String,
        min: 7,
        required: true,
    },
}, {timestamps: true})

const admin = mongoose.model('Admin', AdminSchema)

module.exports = admin