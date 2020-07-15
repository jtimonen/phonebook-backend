const mongoose = require('mongoose')
const n = process.argv.length

if (n < 3) {
  console.log('You must give 3 or 5 arguments!')
  process.exit(1)
} else if (n === 4) {
  console.log('You must give 3 or 5 arguments!')
  process.exit(1)
} else {

  // Define a Mongoose schema
  const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
  })

  // Define a Mongoose model
  const Contact = mongoose.model('Contact', contactSchema)

  // Define callback function for showing all contacts
  const callbackShow = persons => {
    console.log("PHONEBOOK")
    persons.forEach(element => {
      console.log(`${element.name}: ${element.number}`)
    });
    mongoose.connection.close()
  }

  // Define callback function for adding new contact
  const callbackAdd = response => {
    console.log(`Added ${response.name} (number ${response.number}) to phonebook!`)
    mongoose.connection.close()
  }

  // Connect to database
  const password = process.argv[2]
  const dbname = 'phonebook'
  const url =
    `mongodb+srv://jtimonen:${password}@frank.8gduu.mongodb.net/${dbname}?retryWrites=true&w=majority`
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

  if (n === 3) {
    // Show all contacts in database
    Contact.find({}).then(callbackShow)
  } else {
    // Add new contact to database
    const contact = new Contact({ name: process.argv[3], number: process.argv[4] })
    contact.save().then(callbackAdd)
  }

}
