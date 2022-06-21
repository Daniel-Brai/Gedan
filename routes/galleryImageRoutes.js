//  dependencies
const { config } = require('dotenv')
const express = require('express')
const router = express.Router()
const { getUploadedImages, postGalleryImage } = require('../controllers/galleryImageControllers')
const fileUpload = require('../utils/multer')

// read env variables
config({path: './.env'})

// routes
router.get('/uploaded', getUploadedImages)
router.post('/upload',  fileUpload.single('galleryImage') , postGalleryImage)


module.exports = router