// dependencies
const { validationResult } = require("express-validator")
// import admin user model
const Admin = require('../model/admin')

// import password hasher and unhasher
const { hashPassword , unhashPassword } = require('../utils/hasher')

const registerAdmin = async (req, res) => { 

    var { username, email, password} = req.body

    password = hashPassword(password)

    

    const errors = validationResult(req)

    if (!errors.isEmpty()) { 
        return res.status(400).json({
            error: errors.array()[0].msg,
        })
    }

    const newAdmin = new Admin(req.body)

    if (!username && !email && !password) { 
        res.status(400).json({"Error": "Missing credentials! Try again"})
    }

    try {
        const admin = await newAdmin.save((err, _admin) => {
            if (err) {
                return res.status(400).json({
                    error:  err.message || "|An error occurred while saving admin"
                })
            }
            return _admin
        })
        console.log(admin)
    } catch (error) {
        res.status(400).json({"Error": error.message || "An error occured - Unable to register admin!"})
    }
}

const loginAdmin = async (req, res) => {
    var { username, password } = req.body

    const admin = Admin.findOne({username}, (err, admin) => { 
        if(err || !admin) { 
            return res.status(400).json({
                error: "Email was not found"
            })
        }
        return admin
    })

    console.log(admin)
    // const _admin = new Admin(req.body)

    // if ( admin.password)
    try {

    } catch (error) {
        res.status(400).json({"Error": error.message || "An error occured - Unable to login admin!"})
    }

}

module.exports = { registerAdmin, loginAdmin }

