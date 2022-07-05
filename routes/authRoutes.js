// dependencies
const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

// import controllers
const { registerAdmin, loginAdmin } = require('../controllers/authControllers')

// routes
router.post('/admin/register', registerAdmin)
router.post('/admin/login',  [
    check('username', 'Your username is too short').exists().isLength({ min: 5}),
    check('password', 'Your password is invalid').exists().isLength({ min: 7})
] , loginAdmin)


// export the router
module.exports = router