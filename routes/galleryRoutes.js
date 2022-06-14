// dependencies
const express = require('express');
const router = express.Router()
const { getGallery } = require('../controllers/galleryControllers')

// router
router.get('', getGallery)

module.exports = router