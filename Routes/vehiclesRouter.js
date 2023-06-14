const express = require('express')
const Router = require('express').Router()
const vehiclesController = require('../controllers/vehicleController.js')





// if just a slash after localhost:3001/api/vehicles, then below will be called
Router.get('/', vehiclesController.getVehicles)

// localhost:3001/api/vehicles/1
Router.get('/:id', vehiclesController.getVehiclesById)
// Router.put('/:id', vehiclesController.updateVehicle)




module.exports = Router