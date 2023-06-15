const express = require('express');
const Router = express.Router()
const MakeRouter = require('./makesRouter')
const TypeRouter = require('./typesRouter')
const VehicleRouter = require('./vehiclesRouter')
const CartRouter = require('./cartsRouter')
const db = require('../db')

Router.use('/makes', MakeRouter)
Router.use('/types', TypeRouter)
Router.use('/vehicles', VehicleRouter)
Router.use('/cart', CartRouter)

module.exports = Router