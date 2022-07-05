// dependencies
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")

// import admin user model
const Admin = require('../model/admin')

// import password hasher and unhasher
// const { hashPassword , unhashPassword } = require('../utils/secure')

const registerAdmin = async (req, res) => { 

    let { username, email, password } = req.body

    const salt = await bcrypt.genSalt(10)
    let encryptedPassword = await bcrypt.hash(password, salt)

    // generate salt to hash password
    
    const newAdmin = new Admin({
        username: username,
        email: email, 
        password: encryptedPassword
    })

    if (!username && !email && !password) { 
        res.status(400).json({"Error": "Missing credentials! Try again"})
    }

    try {
        const admin = await newAdmin.save()
        res.status(201).json({"Message": "Admin created succesfully!"})
        console.log(admin)
        console.log(typeof admin)
        console.log(admin.password)
    } catch (error) {
        res.status(400).json({"Error": error.message || "An error occured - Unable to register admin!"})
    }
}

const loginAdmin = async (req, res) => {

    let { username, password } = req.body

    const errors = validationResult(req).array()

    if (!errors) { 
        res.status(400).json({"Message": "Invalid fields!"})
        res.render('login', { errors })
    }
    
    const admin = await Admin.findOne({username})

    if (!admin) { 
        res.status(404).json({"Error": "Admin not found!"})
    }

    let validPassword = await bcrypt.compare(password, admin.password)

    try {
        if (validPassword) {
            res.redirect('/gallery/upload')
        } else {
            res.render('login', { errors })
        }
    } catch (error) {
        res.status(400).json({"Error": error.message || "An error occured - Unable to login admin!"})
    }

}

module.exports = { registerAdmin, loginAdmin }

