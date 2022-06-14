// Dependencies
const http = require('http')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const { check, validationResult } = require('express-validator')
const userRoute = require('./routes/homeRoutes')
const galleryRoutes = require('./routes/galleryRoutes')
const { connectDB } = require('./connection/connectDB')

// Initiliazing express app
const app = express()

// conncet to Database
connectDB()

// app utilites
app.use(helmet())
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
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

app.post('/',(req, res) => { 

    // const newUser = {
	// 	name: req.body.fullname,
	// 	email: req.body.email,
    //     phone: req.body.phone, 
    //     message: req.body.message
	// };

	// res.status(201).json(newUser);
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) { 
    //     const inputErrs = errors.array()
    //     res.render('/', { inputErrs })
    //     // res.redirect('/')
    // } 
    console.log(req.body)

})

// [
//     check('fullname', 'Your name must be at least 3 characters long')
//         .exists()
//         .isLength({ min: 3, max: 30}),
//     check('email', 'Your email must be a valid email address')
//      .exists()
//      .isEmail()
//      .normalizeEmail(),
//     check('phone', 'Your phone number must be at 11 numbers long and be valid')
//         .exists()
//         .isLength({ min: 11})
//         .isNumeric(), 
//     check('Message', 'Your message must be at least 2 characters long')
//         .exists()
//         .isLength({ min: 2})
//         .escape()
// ],  

// Server setup 
const server = http.createServer(app)
const PORT = process.env.PORT || 3005
server.listen(PORT, () => { 
    console.log(`⚡ [server]: server is listening on ${PORT}....`)
})
