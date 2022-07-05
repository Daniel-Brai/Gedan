// dependencies
const express = require('express');
const router = express.Router()
const { getGallery, getGalleryUpload, getGalleryLogin } = require('../controllers/galleryControllers')

// routes
router.get('', getGallery)
// router.get('/auth/register', getGalleryRegister)
router.get('/auth/admin/login', getGalleryLogin)
router.get('/upload', getGalleryUpload)

// export router
module.exports = router