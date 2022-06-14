// dependencies
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post