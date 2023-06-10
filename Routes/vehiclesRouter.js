const express = require('express')
const Router = require('express').Router()
const vehiclesController = require('../controllers/vehicleController.js')






Router.get('/', vehiclesController.getVehicles)
// Router.get('/:id', vehiclesController.getVehiclesById)
// Router.put('/:id', vehiclesController.updateVehicle)




module.exports = Router