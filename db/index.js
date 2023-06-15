const mongoose = require('mongoose')

mongoose
  .connect('mongodb://127.0.0.1:27017/vehicleDatabase') 
  .then(() => {
    console.log('Successfully connected to MongoDB.')
    require('../seed/index'); // Run the seed script here
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db