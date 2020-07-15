// Packages and environment variables
require('dotenv').config()
const express = require('express')
const cors = require('cors')
var morgan = require('morgan')
const app = express()

// Middleware
app.use(express.json())
app.use(cors())
//app.use(express.static('build'))

// Custom token for the morgan middleware
morgan.token('data', function (req, res) {
    var out = ' '
    if (req.method === 'POST') { out = JSON.stringify(req.body) }
    return out
})
app.use(morgan(':method :url :status - :response-time ms :data'))

// Import mongoose model
const Contact = require('./models/contact')

// Error handler middleware
const castErrorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') { return response.status(400).send({ error: 'Malformatted id' }) }
    next(error)
}
const unknownEndpoint = (request, response) => { response.status(404).send({ error: 'Unknown endpoint' }) }

// Routes
app.get('/', (req, res) => { res.send('<h1>My phonebook backend</h1> See /info for info.') })
app.get('/api/persons', (req, res) => { Contact.find({}).then(contacts => { res.json(contacts) }) })
app.get('/info', (req, res) => {
    Contact.find({}).then(contacts => {
        const n = contacts.length
        let content = '<h1>Info</h1>'
        content += `<p>The phonebook has info about ${n} persons.<p>`
        content += '<p>' + (new Date()).toString() + '<p>'
        res.send(content)
    })
})

// GET
app.get('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
    Contact.findById(id).then(contact => {
        if (contact) {
            response.json(contact)
        } else {
            response.status(404).end()
        }
    }).catch(error => { next(error) })
})

// DELETE
app.delete('/api/persons/:id', (request, response, next) => {
    Contact.findByIdAndRemove(request.params.id)
        .then(result => { response.status(204).end() })
        .catch(error => next(error))
})

// POST
app.post('/api/persons', (request, response, next) => {
    const body = request.body
    if (!body.name) { return response.status(400).json({ error: 'name missing' }) }
    if (!body.number) { return response.status(400).json({ error: 'number missing' }) }
    const newContact = new Contact({ name: body.name, number: body.number })
    newContact.save()
        .then(savedContact => { response.json(savedContact) })
        .catch(error => next(error))
})

// PUT
app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    if (!body.name) { return response.status(400).json({ error: 'name missing' }) }
    if (!body.number) { return response.status(400).json({ error: 'number missing' }) }

    // Update existing contact
    const newContact = { name: body.name, number: body.number }
    Contact.findByIdAndUpdate(request.params.id, newContact, { new: true })
        .then(updatedContact => { response.json(updatedContact) })
        .catch(error => next(error))
})

// LISTEN
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use(unknownEndpoint)
app.use(castErrorHandler)
