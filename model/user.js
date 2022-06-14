// dependencies 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: { 
        type: String, 
        required: true
    },
    phone: { 
        type: String,
        min: 12,
        required: true,
    },
    message: { 
        type: String, 
        min: 2,
        required: true
    }
})

const user = mongoose.model('User', userSchema)

module.exports = user