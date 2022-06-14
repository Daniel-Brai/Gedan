// Dependencies
const { connect } = require('mongoose')

const connectDB = async() => {
    await connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`💾 [database]: database connection established...`)
        })
        .catch((err) => {
            console.log(`😢 [database]: database connection not established...`)
        })
}

module.exports = { connectDB }