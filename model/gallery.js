// dependencies
const mongoose = require('mongoose')

// gallery Image schema
const galleryImageSchema = new mongoose.Schema({
    img_desc: {
        type: String,
        required: true
    },
    img_url: {
        type: String
    }
})

const img = mongoose.model('galleryImage', galleryImageSchema)

module.exports = img