// dependencies
const path = require('path')
const multer = require('multer')

// creating a storage variable for uploading images
const storage = multer.memoryStorage({
    destination: function(req, file, cb) {
        cb(null, '')
    }
})

// creating a extension name filter for the types of images
const filefilter = (req, file, cb) => {
    let extensionName = path.extname(file.originalname)

    if (extensionName !== ".jpeg" && extensionName !== ".jpg" && extensionName !== ".png") {
        cb(new Error("Unsupported file type!"), false)
    } else {
        cb(null , true)
    }
}

const fileUpload = multer({storage: storage, filefilter: filefilter})

module.exports = fileUpload
