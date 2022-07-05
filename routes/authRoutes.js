// dependencies
const express = require('express')
const router = express.Router()

// import controllers
const { registerAdmin, loginAdmin } = require('../controllers/authControllers')

// routes
router.post('/admin/register', registerAdmin)
router.post('/admin/login', loginAdmin)


// export the router
module.exports = router