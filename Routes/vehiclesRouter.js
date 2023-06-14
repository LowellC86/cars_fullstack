const express = require('express')
const Router = require('express').Router()
const vehiclesController = require('../controllers/vehicleController.js')


Router.get('/', vehiclesController.getVehicles)
Router.get('/:id', vehiclesController.getVehiclesById)





module.exports = Router