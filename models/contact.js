// Setup
const mongoose = require('mongoose')
const url = process.env.MONGODB_URL
console.log('Connecting to', url)
mongoose.set('useFindAndModify', false)

// Connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.log('Error connecting to MongoDB:', error.message)
    })

// Define a Mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
})

// Don't show id and version in toJSON
contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// Export a Mongoose model
module.exports = mongoose.model('Contact', contactSchema)
