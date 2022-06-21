// dependencies
const express = require('express');
const router = express.Router()
const { check } = require('express-validator')
const { getHome, getPrivacyPolicy, formHandler } = require('../controllers/homeController')

// routes
router.get('', getHome)
router.get('/privacy_policy', getPrivacyPolicy)
router.post('', [
    check('name', 'Your name must be at least 3 characters long')
        .exists()
        .isLength({ min: 3, max: 30}),
    check('email', 'Your email must be a valid email address')
        .exists()
        .isEmail()
        .normalizeEmail(),
    check('phone', 'Your phone number must be at 11 numbers long and be valid')
        .exists()
        .isLength({ min: 11})
        .isNumeric(), 
    check('message', 'Your message must be at least 2 characters long')
        .exists()
        .isLength({ min: 2})
        .escape()
], formHandler)

module.exports = router