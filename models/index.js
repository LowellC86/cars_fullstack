const mongoose  = require('mongoose')
const makeSchema = require('./make')
const typeSchema = require('./type')
const vehicleSchema = require('./vehicle')
const cartSchema = require('./cart')
const Make = mongoose.model('Make', makeSchema)
const Type = mongoose.model('Type', typeSchema)
const Vehicle = mongoose.model('Vehicle', vehicleSchema)
const Cart = mongoose.model('Cart', cartSchema)

module.exports = {
  Make,
  Type,
  Vehicle,
  Cart
}