// Setup
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const url = process.env.MONGODB_URL
console.log('Connecting to', url)
mongoose.set('useFindAndModify', false)
var uniqueValidator = require('mongoose-unique-validator')

// Connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.log('Error connecting to MongoDB:', error.message)
    })

// Define a Mongoose schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 3 },
    number: { type: String, required: true, minlength: 8 }
})

// Validation that requires unique names
contactSchema.plugin(uniqueValidator)

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
