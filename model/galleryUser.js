// dependencies 
const mongoose = require('mongoose');

const galleryUserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        unique: true,
        required: true
    },
    password: { 
        type: String,
        min: 7,
        required: true,
    },
})

const user = mongoose.model('galleryUser', galleryUserSchema)

module.exports = user