const mongoose  = require('mongoose')
const makeSchema = require('./make')
const modelSchema = require('./model')
const vehicleSchema = require('./vehicle')


const Make = mongoose.model('Make', makeSchema)
const Model = mongoose.model('Model', modelSchema)
const Vehicle = mongoose.model('Vehicle', modelSchema)

module.exports = {
  Make,
  Model,
  Vehicle,
  
}