// import dependencies
const http = require('http')
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { config } = require('dotenv');
const { connectDB } = require('./connection/connectDB')

// import routes
const userRoutes = require('./routes/homeRoutes')
const galleryRoutes = require('./routes/galleryRoutes')
const galleryImageRoutes = require('./routes/galleryImageRoutes')
const adminAuthRoutes = require('./routes/authRoutes')

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
app.use('/js', express.static(path.join(__dirname, 'public/assets/js')))
app.use('/css', express.static(path.join(__dirname, 'public/assets/css')))
app.use('/logos', express.static(path.join(__dirname, 'public/assets/logos')))
app.use('/images', express.static(path.join(__dirname, 'public/assets/images')))
app.use('/svgs', express.static(path.join(__dirname, 'public/assets/page-svgs')))
app.use('/favicon', express.static(path.join(__dirname, 'public/assets/favicon')))

// routes
app.use('/', userRoutes)
app.use('/gallery', galleryRoutes)
app.use('/image', galleryImageRoutes)
app.use('/api/auth', adminAuthRoutes)

// error handling page
app.all('*', (req, res) => {
    res.status(404).render('404')
})

// Server setup 
const server = http.createServer(app)
const PORT = process.env.PORT || 4000
server.listen(PORT, () => { 
    console.log(`⚡ [server]: server is listening on ${PORT}....`)
})
