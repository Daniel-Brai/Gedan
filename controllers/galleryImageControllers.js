// dependencies
const { config } = require('dotenv')
const s3 = require('../utils/aws-S3')
const Image = require('../model/gallery')

// read env variables
config({path: './.env'})

const getUploadedImages = async (req,res) => {
    try {
        const images = await Image.find()
        console.log(images)
    } catch (error) {
        console.log(`An error occured - ${error.message}`) 
    }
}

const postGalleryImage = async (req, res) => {
    console.log(req.file)

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file.buffer,
        ACL: "public-read-write",
        ContentType: "image/jpeg"
    }

    // upload the image to S3
    s3.upload(params, (error, data) => {
        if (error) {
            res.status(500).send(`An error occured -${error.message}`)
        } else {
            // log the data
            console.log(data)
        }
    })

    // saving the info to the database
    const galleryImage = new Image({
        img_desc: req.body.img_desc,
        img_url: data.Location
    })

    try {
        await galleryImage.save()
    } catch (error) {
        console.log(`An error occured - ${error.message}`) 
    }
}


module.exports = { getUploadedImages, postGalleryImage }