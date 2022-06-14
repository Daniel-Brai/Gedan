// import dependencies
const http = require('http')
const path = require('path')
const express = require('express')
const mongoose = require('mongoose');
const helmet = require('helmet')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { config } = require('dotenv');
const { connectDB } = require('./connection/connectDB')
const { check, validationResult } = require('express-validator')

// import routes
const userRoute = require('./routes/homeRoutes')
const galleryRoutes = require('./routes/galleryRoutes')

// import models 
const User = require('./model/user')

// read environment variables
config({path: './.env'})

// Initiliazing express app
const app = express()

// connect to Database
connectDB()

// app utilites
app.use(helmet())
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(session({
    secret: 'John is a cat man' || process.env.SESSION_SECRET_KEY,
    saveUninitialized: false,
    resave: false
}));
app.use(express.static(path.join(__dirname, 'public/views')))
app.use('/js', express.static(path.join(__dirname, 'public/assets/js')))
app.use('/css', express.static(path.join(__dirname, 'public/assets/css')))
app.use('/logos', express.static(path.join(__dirname, 'public/assets/logos')))
app.use('/images', express.static(path.join(__dirname, 'public/assets/images')))
app.use('/svgs', express.static(path.join(__dirname, 'public/assets/page-svgs')))
app.use('/favicon', express.static(path.join(__dirname, 'public/assets/favicon')))

// routes
app.use('/', userRoute)
app.use('/gallery', galleryRoutes)

app.post('/', 
[
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
]
, async (req, res) => { 

    const user = new User({
		name: req.body.name,
		email: req.body.email,
        phone: req.body.phone, 
        message: req.body.message
	});

    const errors = validationResult(req).array();

    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.status(308).redirect('/');
    } else {
        req.session.success = true;
        res.status(308).redirect('/');
    }
    console.log(errors)

    try {
        // wait till user is validated before
        // saving the user to the database
        await user.save() 
    } catch (error) {
        // log error
        console.log(`An error occurred - ${error.message}}`)
    }
})

// Server setup 
const server = http.createServer(app)
const PORT = process.env.PORT || 3005
server.listen(PORT, () => { 
    console.log(`⚡ [server]: server is listening on ${PORT}....`)
})
