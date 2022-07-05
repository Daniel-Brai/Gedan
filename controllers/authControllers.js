// dependencies
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")

// import admin user model
const Admin = require('../model/admin')

const registerAdmin = async (req, res) => { 

    // destructuring from the body
    let { username, email, password } = req.body

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10)

    let encryptedPassword = await bcrypt.hash(password, salt)

    // generate a new Admin user
    const newAdmin = new Admin({
        username: username,
        email: email, 
        password: encryptedPassword
    })
 
    // checks if new admin exist, email and password
    if (!username && !email && !password) { 
        res.status(400).json({"Error": "Missing credentials! Try again"})
    }

    try {
        const admin = await newAdmin.save()
        res.status(201).json({"Message": "Admin created succesfully!"})
    } catch (error) {
        res.status(400).json({"Error": error.message || "An error occured - Unable to register admin!"})
    }
}

const loginAdmin = async (req, res) => {

    // destructuring from the body
    let { username, password } = req.body

    // defining error to render
    const errors = [
        {"message": "Invalid username!"},
        {"message": "Invalid password!"}
    ]

    // find an sd
    const admin = await Admin.findOne({username})

    try {
        let validPassword = await bcrypt.compare(password, admin.password)

        if (!admin && !errors.length) { 
            res.status(404).json({"Error": "Invalid credentials - Admin not found!"})
        }
        
        if (validPassword) {
            res.redirect('/gallery/upload')
        }
    } catch (error) {
        res.render('login', { errors })
    }
}

module.exports = { registerAdmin, loginAdmin }

