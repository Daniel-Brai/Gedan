// dependencies
const AWS = require('aws-sdk')
const { config } = require('dotenv')

// read env variables
config({path: './.env'})

//  creating an AWS S3 bucket 
const s3 = new AWS.S3({
    accessKeyID: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

module.exports = s3