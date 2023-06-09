const express = require('express');
const Router = express.Router()
const MakeRouter = require('./makesRouter')
const TypeRouter = require('./typesRouter')
const VehicleRouter = require('./vehiclesRouter')



Router.use('/makes', MakeRouter)
Router.use('/types', PhoneRouter)
Router.use('/vehicles', PlatformRouter)


module.exports = Router