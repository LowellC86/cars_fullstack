const mongoose  = require('mongoose')
const makeSchema = require('./make')
const typeSchema = require('./type')
const vehicleSchema = require('./vehicle')
const Make = mongoose.model('Make', makeSchema)
const Type = mongoose.model('Type', typeSchema)
const Vehicle = mongoose.model('Type', vehicleSchema)

module.exports = {
  Make,
  Type,
  Vehicle
}