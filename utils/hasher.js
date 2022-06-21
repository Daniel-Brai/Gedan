// dependencies
const CryptoJS = require('crypto-js')
const { config } = require('dotenv')

// read environment variable
config({path: './.env'})

// hash password 
const hashPassword = (password) => { 
    return CryptoJS.AES.encrypt(password, process.env.SECRET_HASH_KEY)
}

// unhash password
const unhashPassword = (password) => {
    return CryptoJS.AES.decrypt(password, process.env.SECRET_HASH_KEY)
}

module.exports = { hashPassword, unhashPassword }